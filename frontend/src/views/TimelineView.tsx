import { useState, useEffect } from 'react';
import Timeline from 'react-visjs-timeline';
import { REST_ENDPOINT } from '../constants';
import { Alert, Snackbar } from '@mui/material';

const TimelineView = () => {
    const [timelineItems, setTimelineItems] = useState([]);
    const [prospects, setProspects] = useState([]);
    const [startUpdates, setStartUpdates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchGoals = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${REST_ENDPOINT}goals/?pageSize=1000&type=0`);
                if (!response.ok) throw new Error(`${response.status}`);
                const data = await response.json();
                console.log('data :', data);
                // Transform the goals data into timeline items format
                const items = data.children.data
                    .filter(goal => goal.start_timeframe !== null)
                    .map(goal => ({
                        id: goal.id,
                        content: goal.title,
                        start: goal.start_timeframe,
                        type: 'point'
                    }));

                setTimelineItems(items);
                const prospects = data.children.data
                    .filter(goal => goal.start_timeframe === null)
                    .map(goal => ({
                        id: goal.id,
                        content: goal.title,
                        start: goal.start_timeframe,
                        type: 'point'
                    }));
                setProspects(prospects);
            } catch (err) {
                console.error('Error fetching goals:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGoals();
    }, []);

    // Add state for toast
    const [toast, setToast] = useState({ open: false, message: '', severity: 'success' });

    // Replace the alert in saveTimeframe
    const saveTimeframe = async (id: number, start: string) => {
        try {
            const response = await fetch(`${REST_ENDPOINT}goals-timeframe/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    start_timeframe: new Date(start).toISOString().split('T')[0]
                })
            });
            if (!response.ok) throw new Error('Failed to update timeframe');
            const data = await response.json();

            // Remove the saved item from startUpdates
            setStartUpdates(startUpdates.filter(update => update.properties.id !== id));
            setToast({
                open: true,
                message: `Timeframe updated successfully: ${data.data.title}`,
                severity: 'success'
            });
        } catch (error) {
            console.error('Error updating timeframe:', error);
            setToast({
                open: true,
                message: 'Failed to update timeframe',
                severity: 'error'
            });
        }
    };

    // Add to the return statement, before the closing </div>
    <Snackbar
        open={toast.open}
        autoHideDuration={6000}
        onClose={() => setToast({ ...toast, open: false })}
    >
        <Alert severity={toast.severity} onClose={() => setToast({ ...toast, open: false })}>
            {toast.message}
        </Alert>
    </Snackbar>

    function logEvent(event, properties) {
        const existingUpdateIndex = startUpdates.findIndex(update =>
            update.properties.id === properties.id
        );

        if (existingUpdateIndex !== -1) {
            // Replace existing update
            const updatedList = [...startUpdates];
            updatedList[existingUpdateIndex] = { event, properties };
            setStartUpdates(updatedList);
        } else {
            // Add new update
            startUpdates.push({ event, properties });
            setStartUpdates([...startUpdates]);
        }

        // Update timelineItems with new position
        const updatedItems = timelineItems.map(item =>
            item.id === properties.id
                ? { ...item, start: properties.start }
                : item
        );
        setTimelineItems(updatedItems);
    }

    const clearLog = () => {
        const log = document.getElementById('log');
        if (log) {
            log.innerHTML = '';
        }
    };

    const basicExample = {
        options: {
            start: new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0],
            end: new Date(new Date().getFullYear() + 5, 11, 31).toISOString().split('T')[0],
            editable: true,
            onMove: props => {
                logEvent('mouseUp', props);
            },
            onRemove: props => {
                const removedItem = timelineItems.find(item => item.id === props.id);
                setTimelineItems(timelineItems.filter(item => item.id !== props.id));
                setStartUpdates(startUpdates.filter(update => update.properties.id !== props.id));
                if (removedItem) {
                    const newProspect = {
                        id: removedItem.id,
                        content: removedItem.content,
                        start: null,
                        type: 'point'
                    };
                    const sortedProspects = [...prospects, newProspect]
                        .sort((a, b) => a.content.localeCompare(b.content));
                    setProspects(sortedProspects);
                }
            }
        },
        items: timelineItems
    };
    return (
        <div className="App">
            <p className="header">
                A basic timeline. You can move and zoom the timeline, and select
                items.
            </p>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <Timeline {...basicExample} items={timelineItems} />
            )}
            <button onClick={clearLog}>Clear Log</button>
            <div id="log">
                {startUpdates && startUpdates.map(newUpdate =>
                (
                    <div key={`${newUpdate.properties.id}_${newUpdate.properties.start}`}
                        style={{
                            backgroundColor: '#fff3cd',
                            borderRadius: '4px'
                        }}>
                        <p>
                            <span>
                                {`${newUpdate.properties.content} :${new Date(newUpdate.properties.start).toISOString().split('T')[0]}`}
                            </span>
                            <button onClick={() => saveTimeframe(newUpdate.properties.id, newUpdate.properties.start)}>
                                Save Date
                            </button></p></div>)
                )}
            </div>

            <div style={{ marginTop: '2rem' }}>
                <h3>Prospects</h3>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {prospects?.map(prospect => (
                        <div key={prospect.id} style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0.5rem',
                            border: '1px solid #ccc'
                        }}>
                            <span>{prospect.content}</span>
                            <button onClick={() => {
                                const newTimelineItem = {
                                    ...prospect,
                                    start: new Date().toISOString().split('T')[0]
                                };
                                setTimelineItems([...(timelineItems || []), newTimelineItem]);
                                setProspects(prospects.filter(p => p.id !== prospect.id));
                                setStartUpdates([...startUpdates, {
                                    event: 'mouseUp',
                                    properties: newTimelineItem
                                }]);
                            }}>
                                Add to Timeline
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Snackbar
                open={toast.open}
                autoHideDuration={6000}
                onClose={() => setToast({ ...toast, open: false })}
            >
                <Alert severity={toast.severity} onClose={() => setToast({ ...toast, open: false })}>
                    {toast.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default TimelineView;
