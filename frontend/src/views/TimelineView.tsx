import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Timeline from 'react-visjs-timeline';
import { REST_ENDPOINT } from '../constants';
import { Alert, Snackbar } from '@mui/material';

import './Timeline.css';
interface TimelineProps {
    id: number;
    content: string;
    start: string;
    type: string;
    [key: string]: string | number;
}

interface Goal {
    id: number;
    title: string;
    start_timeframe: string | null;
}

interface StartUpdate {
    event: string;
    properties: {
        id: number;
        content: string;
        start: string;
    };
}

const TimelineView = () => {
    const [goals, setGoals] = useState<Goal[]>([]);
    const [startUpdates, setStartUpdates] = useState<StartUpdate[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    // Remove the TimelineRef interface and update the ref declaration
    const timelineRef = useRef<Timeline>(null);

    const [toast, setToast] = useState<{
        open: boolean;
        message: string;
        severity: 'success' | 'error' | 'info' | 'warning';
    }>({ open: false, message: '', severity: 'success' });

    // Replace the alert in saveTimeframe
    const saveTimeframe = async (id: number, start: string) => {
        try {
            const response = await fetch(`${REST_ENDPOINT}goals-timeframe/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    start_timeframe: start ? new Date(start).toISOString().split('T')[0] : null
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

    // Then update the logEvent function and basicExample props:
    function logEvent(
        event: string,
        properties: TimelineProps
    ) {
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

        const updatedItems = goals.map(goal =>
            goal.id === properties.id
                ? { ...goal, start_timeframe: properties.start }
                : goal
        );
        setGoals(updatedItems);
    }

    const clearLog = () => {
        const log = document.getElementById('log');
        if (log) {
            log.innerHTML = '';
        }
    };

    const prospects = goals.filter(goal => goal.start_timeframe === null)
        .map(goal => ({
            id: goal.id,
            content: goal.title,
            start: goal.start_timeframe,
            type: 'point'
        }));

    const timelineItems = goals
        .filter(goal => goal.start_timeframe !== null)
        .map(goal => ({
            id: goal.id,
            content: goal.title,
            start: goal.start_timeframe,
            type: 'point'
        }));

    const basicExample = {
        options: {
            start: new Date(new Date().getFullYear(), 0, 1).toISOString().split('T')[0],
            end: new Date(new Date().getFullYear() + 5, 11, 31).toISOString().split('T')[0],
            editable: true,
            onMove: (props: TimelineProps) => {
                logEvent('mouseUp', props);
            },
            onRemove: (props: TimelineProps) => {
                const updatedItems = goals.map(goal =>
                    goal.id === props.id
                        ? { ...goal, start_timeframe: null }
                        : goal
                );
                setGoals(updatedItems);
                setStartUpdates(startUpdates.filter(update => update.properties.id !== props.id));
                saveTimeframe(props.id, '');
            }
        },
        items: timelineItems
    };
    useEffect(() => {
        const fetchGoals = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${REST_ENDPOINT}goals/?pageSize=1000&type=0&incompleted=true`);
                if (!response.ok) throw new Error(`${response.status}`);
                const data = await response.json();
                console.log('data :', data);
                setGoals(data.children.data); // Fix: access the data array from children

            } catch (err) {
                console.error('Error fetching goals:', err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchGoals();
    }, []);
    // Add this useEffect to redraw timeline when data loads
    useEffect(() => {
        // if (timelineRef.current && !isLoading && timelineItems.length > 0) {
        setTimeout(() => {
            const timeline = timelineRef.current;
            if (timeline?.timeline) {
                timeline.timeline.setWindow(
                    basicExample.options.start,
                    basicExample.options.end,
                    { animation: false }
                );
                const container = timeline.timeline.dom.container;
                if (container) {
                    const event = new Event('resize');
                    window.dispatchEvent(event);
                }
            }
        }, 100);
        // }
    }, [isLoading, timelineItems, basicExample.options.start, basicExample.options.end]);

    // Modify the Timeline component in the return statement
    return (
        <div className="App">
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <Timeline
                    ref={timelineRef}
                    {...basicExample}
                    items={timelineItems}
                />
            )}
            <button onClick={clearLog}>Clear Log</button>
            <div id="log">
                {startUpdates && startUpdates.map(newUpdate =>
                (
                    <div key={`${newUpdate.properties.id}_${newUpdate.properties.start}`}
                        className="log-item"
                    >
                        <p>
                            <span>
                                {`${newUpdate.properties.content} :${new Date(newUpdate.properties.start).toISOString().split('T')[0]}`}
                            </span>
                            <button onClick={() => saveTimeframe(newUpdate.properties.id, newUpdate.properties.start)}>
                                Save Date
                            </button>
                        </p>
                    </div>)
                )}
            </div>

            <div className="prospects-container">
                <h3>Prospects</h3>
                <div className="prospects-list">
                    {prospects?.map(prospect => (
                        <div key={prospect.id}
                            className="prospects-item"
                        >
                            <span>
                                <Link to={`/?idField=${prospect.id}`}>
                                    {prospect.content}</Link></span>
                            <button onClick={() => {
                                const updatedItems = goals.map(goal =>
                                    goal.id === prospect.id
                                        ? { ...goal, start_timeframe: new Date().toISOString().split('T')[0] }
                                        : goal
                                );
                                setGoals(updatedItems);
                                const newTimelineItem = {
                                    id: prospect.id,
                                    content: prospect.content,
                                    start: new Date().toISOString().split('T')[0],
                                    type: 'point'

                                }
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
