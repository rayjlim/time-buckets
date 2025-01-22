import { useState } from 'react';
import { REST_ENDPOINT } from '../constants';
import { GoalType } from '../types';


const useAddForm = (onAddGoal: (goal: GoalType) => void, formRef: React.RefObject<HTMLFormElement>) => {
    const [messageInfo, setMessageInfo] = useState('');
    async function sendAddForm(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = formRef.current ? new FormData(formRef.current) : null;
        const title = formData?.get('title');
        const type = formData?.get('type');
        const parentId = formData?.get('parentId');
        const endpoint = `${REST_ENDPOINT}goals/`;
        const newGoal = {
            title,
            type,
            parent_id: parentId,
            gps_zoom: 0,
        };
        const config = {
            method: 'POST',
            body: JSON.stringify(newGoal),
        };
        try {
            const response = await fetch(endpoint, config);
            console.log('response :', response);
            if (!response.ok) {
                console.log('response.status :', response.status);
                throw new Error(`${response.status}`);
            } else {
                const output = await response.json();
                setMessageInfo(`Added : ${JSON.stringify(output)}`);
                // const json = JSON.stringify(output);
                // alert(`${output.data.length}, ${json}`);
                onAddGoal(output.data);
            }
        } catch (err) {
            console.log(`Error: ${err}`);
            setMessageInfo(`loading error : ${err}`);
        }
    }

    return { sendAddForm, messageInfo, setMessageInfo };
};

export default useAddForm;
