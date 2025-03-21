import { useEffect, useState } from 'react';
import { REST_ENDPOINT } from '../constants';

const useTreeView = () => {
    const [rootId, setRootId] = useState(0);
    const [treeView, setTreeView] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // console.log(isLoading);
        async function loadTreeView(event?: React.FormEvent<HTMLFormElement>) {
            console.log(event);
            event?.preventDefault();
            setIsLoading(true);

            try {
                const endpoint = `${REST_ENDPOINT}treeInfo/${rootId}`;
                const response = await fetch(endpoint, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log('response :', response);
                if (!response.ok) {
                    console.log('response.status :', response.status);
                    throw new Error(`${response.status}`);
                } else {
                    const data = await response.json();
                    console.log('data :', data);
                    setTreeView(data.data);
                }
            } catch (err) {
                console.log(`Error: ${err}`);
                // setMessageInfo(`loading error : ${err}`);
            } finally {
                setIsLoading(false);
            }
        }
        loadTreeView();
    }, [rootId]);

    return {
        rootId,
        setRootId,
        treeView,
        isLoading
    };
};

export default useTreeView;
