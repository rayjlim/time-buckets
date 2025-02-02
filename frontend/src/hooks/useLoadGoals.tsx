import { useState } from 'react';
import { REST_ENDPOINT } from '../constants';
import { PageDataType } from '../types';

const useLoadGoals = (searchForm: React.RefObject<HTMLFormElement>, page: number, setIsLoading: (isLoading: boolean) => void, setGoals: (goals: PageDataType) => void) => {
    const [messageInfo, setMessageInfo] = useState('');

    async function loadGoals(event?: React.FormEvent<HTMLFormElement>) {
        if (!searchForm.current) return;

        console.log(event);
        event?.preventDefault();
        const formData = new FormData(searchForm.current);
        const searchTitle = formData.get('searchTitle');
        const type = formData.get('type') || 0;
        const tags = formData.get('tags');

        const orderBy = formData.get('orderBy');
        const startsWith = formData.get('startsWith');
        const priority = formData.get('priority');
        const parentId = formData.get('parentId');
        const id = formData.get('idField');
        const locationsWithoutCoords = formData.has('locationsWithoutCoords');

        const endpoint = `${REST_ENDPOINT}goals/?page=${page}`;
        let searchFields = '';
        if (searchTitle !== '') {
            searchFields += `&search_title=${searchTitle}`;
        }
        if (type !== '') {
            searchFields += `&type=${type}`;
        }

        if (tags !== '') {
            searchFields += `&tags=${tags}`;
        }
        if (orderBy !== '') {
            searchFields += `&order_by=${orderBy}`;
        }
        if (startsWith !== '') {
            searchFields += `&starts_with=${startsWith}`;
        }
        if (priority !== '') {
            searchFields += `&priority=${priority}`;
        }
        if (parentId !== '') {
            searchFields += `&parent_id=${parentId}`;
        }
        if (id !== '') {
            searchFields += `&id=${id}`;
        }
        if (locationsWithoutCoords === true) {
            searchFields += `&locationsWithoutCoords=true`;
        }


        setIsLoading(true);
        // TODO: if production, then pass mode: 'no-cors', in fetch options

        try {
            const response = await fetch(`${endpoint}${searchFields}`, {

            });
            console.log('response :', response);
            if (!response.ok) {
                console.log('response.status :', response.status);
                throw new Error(`${response.status}`);
            } else {
                const data = await response.json();
                console.log('data :', data);
                setGoals(data);

            }
        } catch (err) {
            console.log(`Error: ${err}`);
            setMessageInfo(`loading error : ${err}`);
        } finally {
            setIsLoading(false);
        }
    }

    return {
        loadGoals,
        messageInfo,
        setMessageInfo
    };
};

export default useLoadGoals;
