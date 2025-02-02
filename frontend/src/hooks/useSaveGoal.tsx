import { RefObject, useState } from 'react';
import { GoalType } from '../types';
import { REST_ENDPOINT } from '../constants';

type SaveHookParams = {
    goal: GoalType;
    current: GoalType;
    onRemoveGoal: (id: number) => void;
    setCurrent: (goal: GoalType) => void;
    setIsEditing: (isEditing: boolean) => void;
    formRef: RefObject<HTMLFormElement> ;
};

const useSaveGoal = (
    { goal,
        current,
        onRemoveGoal,
        setCurrent,
        setIsEditing,
        formRef }: SaveHookParams) => {
    const [messageInfo, setMessageInfo] = useState('');

    const handleFetchError = (err: Error) => {
        console.error(`Error: ${err}`);
        setMessageInfo(`Loading error: ${err}`);
    };

    const makeRequest = async (endpoint: string, config: RequestInit) => {
        const response = await fetch(endpoint, config);
        if (!response.ok) {
            throw new Error(`${response.status}`);
        }
        return response.json();
    };
    const parseFormValues = (formValues: Record<string, string>) => {
        return {
            ...current,
            title: formValues.title?.trim() || '',
            priority: parseInt(formValues.priority) || 1,
            reason: formValues.reason?.trim() || '',
            note: formValues.note?.trim() || '',
            tags: formValues.tags?.trim() || '',
            added_at: formValues.addedAt || '',
            type: parseInt(formValues.type) || 0,
            parent_id: parseInt(formValues.parentId) || 0,
            gps_coords: formValues.gpsCoords?.trim() || '',
            gps_zoom: parseInt(formValues.gpsZoom) || 0,
            completed_at: formValues.completedAt || ''
        };
    };
    async function saveGoal(event: React.FormEvent) {
        event.preventDefault();
        const formData = new FormData(formRef.current!);
        const formValues = Object.fromEntries(formData);

        try {
            await makeRequest(`${REST_ENDPOINT}goals/${goal.id}`, {
                method: 'POST',
                body: JSON.stringify(formValues),
            });
            setCurrent(parseFormValues(formValues as Record<string,string>));
            setIsEditing(false);
        } catch (err) {
            handleFetchError(err as Error);
        }
    }

    async function removeGoal() {
        try {
            await makeRequest(`${REST_ENDPOINT}goals/${goal.id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            setIsEditing(false);
            onRemoveGoal(goal.id);
        } catch (err) {
            handleFetchError(err as Error);
        }
    }

    function toggleFormValue(fieldName: string, content: string) {
        const input = formRef.current?.querySelector(`input[name="${fieldName}"]`) as HTMLInputElement;
        if (!input) return;

        input.value = input.value.includes(content)
            ? input.value.replace(content, '').trim()
            : `${input.value} ${content}`.trim();
    }

    const addRemoveTag = (content: string) => toggleFormValue('tags', content);

    const addRemoveType = (content: string) => toggleFormValue('type', content);

    return {
        saveGoal,
        removeGoal,
        addRemoveTag,
        addRemoveType,
        messageInfo,
        setMessageInfo
    };
};

export default useSaveGoal;
