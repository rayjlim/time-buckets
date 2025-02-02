import { RefObject, useState } from 'react';
import { REST_ENDPOINT } from '../constants';
import { GoalType } from '../types';

type AddHookParams = {
    onAddGoal: (goal: GoalType) => void,
    formRef: RefObject<HTMLFormElement>
};

const useAddForm = ({ onAddGoal, formRef }: AddHookParams) => {
    const [messageInfo, setMessageInfo] = useState('');

    async function sendAddForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!formRef.current) {
            setMessageInfo('Form reference not found');
            return;
        }

        const formData = new FormData(formRef.current);
        const today = new Date();
        const formattedDate = today.toISOString().split('T')[0];
        const newGoal = {
            title: formData.get('title'),
            type: formData.get('type'),
            parent_id: formData.get('parentId'),
            gps_zoom: 0,
            priority: 1,
            tags: '',
            added_at: formattedDate
        };

        try {
            const response = await fetch(`${REST_ENDPOINT}goals/`, {
                method: 'POST',
                body: JSON.stringify(newGoal),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }


            const output = await response.json();
            setMessageInfo(`Added : ${JSON.stringify(output)}`);
            // const json = JSON.stringify(output);
            // alert(`${output.data.length}, ${json}`);
            onAddGoal(output.data);

        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
            console.error('Error adding goal:', errorMessage);
            setMessageInfo(`Error: ${errorMessage}`);
        }
    }

    return { sendAddForm, messageInfo, setMessageInfo };
};

export default useAddForm;
