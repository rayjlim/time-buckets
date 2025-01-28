import { useState } from 'react';

import { REST_ENDPOINT } from '../constants';

const useSaveGoal = (
    goal: any,
    onRemoveGoal: any,
    current: any,
    setCurrent: any,
    setIsEditing: any,
    formRef: any) => {
    const [messageInfo, setMessageInfo] = useState('');

    async function saveGoal(event: any) {
        console.log('save goal');
        event.preventDefault();
        const formData = new FormData(formRef.current);
        const title = formData.get('title');
        const priority = formData.get('priority');
        const completedAt = formData.get('completedAt');
        const reason = formData.get('reason');
        const note = formData.get('note');
        const addedAt = formData.get('addedAt');
        const tags = formData.get('tags');
        const thoughts = formData.get('thoughts');
        const type = formData.get('type');
        const parentId = formData.get('parentId');
        const gpsCoords = formData.get('gpsCoords');
        const gpsZoom = formData.get('gpsZoom');

        const endpoint = `${REST_ENDPOINT}goals/${goal.id}`;
        const config = {
            method: 'POST',
            body: JSON.stringify({
                title,
                priority,
                reason,
                note,
                addedAt,
                tags,
                thoughts,
                type,
                parentId,
                gpsCoords,
                gpsZoom,
                completedAt
            }),
        };
        try {
            const response = await fetch(endpoint, config);
            console.log('response :', response);
            if (!response.ok) {
                console.log('response.status :', response.status);
                throw new Error(`${response.status}`);
            } else {
                const data = await response.json();
                console.log('data :', data);
                setCurrent({
                    ...current,
                    title,
                    priority,
                    reason,
                    note,
                    tags,
                    added_at: addedAt,
                    type,
                    parent_id: parentId,
                    gps_coords: gpsCoords,
                    gps_zoom: gpsZoom,
                    completed_at: completedAt
                });
                setIsEditing(false);
            }
        } catch (err) {
            console.log(`Error: ${err}`);
            setMessageInfo(`loading error : ${err}`);
        }
    }
    async function removeGoal() {
        console.log('remove goal');

        const endpoint = `${REST_ENDPOINT}goals/${goal.id}`;
        const config = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json', // Optional: Specify if sending JSON data
            },
        };
        try {
            const response = await fetch(endpoint, config);
            console.log('response :', response);
            if (!response.ok) {
                console.log('response.status :', response.status);
                throw new Error(`${response.status}`);
            } else {
                const data = await response.json();
                console.log('data :', data);
                setIsEditing(false);
                onRemoveGoal(goal.id);
            }
        } catch (err) {
            console.log(`Error: ${err}`);
            setMessageInfo(`loading error : ${err}`);
        }
    }
    function addRemoveTag(content: string) {
        console.log('addRemove', content);

        const tagsInput = formRef.current.querySelector('input[name="tags"]');
        if (!tagsInput.value.includes(content)) {
            tagsInput.value = `${tagsInput.value} ${content}`;
        } else {
            tagsInput.value = tagsInput.value.replace(content, '').trim();
        }
    }
    function addRemoveType(content: string) {
        console.log('addRemove', content);

        const typeInput = formRef.current.querySelector('input[name="type"]');
        if (!typeInput.value.includes(content)) {
            typeInput.value = `${typeInput.value} ${content}`;
        } else {
            typeInput.value = typeInput.value.replace(content, '').trim();
        }
    }

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
