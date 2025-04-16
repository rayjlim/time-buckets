import { useState, useEffect } from 'react';
import Timeline from 'react-visjs-timeline';
import { REST_ENDPOINT } from '../constants';




const TimelineView = () => {
    const [timelineItems, setTimelineItems] = useState([]);
    const [prospects, setProspects] = useState([]);
    const [startUpdates, setStartUpdates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchGoals = async () => {
            setIsLoading(true);
            try {

                const response = await fetch(`${REST_ENDPOINT}goals/?page=1&type=0`);
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
    function logEvent(event, properties) {
        startUpdates.push({
            event,
            properties
        });
        setStartUpdates([...startUpdates]);
    }
    const clearLog = () => {
        const log = document.getElementById('log');
        if (log) {
            log.innerHTML = '';
        }
    };

    const basicExample = {
        options: {
            start: '2025-01-01',
            end: '2027-12-31',
            editable: true,
            onMove: props => {
                logEvent('mouseUp', props);
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
                    <div key={newUpdate.properties.id}>
                        <span>{`event=${JSON.stringify(newUpdate.event)}, properties=${JSON.stringify(newUpdate.properties)}`}</span>
                        <br />
                        <span>{`${newUpdate.properties.id} :${new Date(newUpdate.properties.start).toISOString().split('T')[0]}`}</span>
                        <button onClick={async () => {
                            try {
                                const response = await fetch(`${REST_ENDPOINT}goals-timeframe/${newUpdate.properties.id}`, {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        start_timeframe: new Date(newUpdate.properties.start).toISOString().split('T')[0]
                                    })
                                });
                                if (!response.ok) throw new Error('Failed to update timeframe');
                                const data = await response.json();
                                console.log('Timeframe updated:', data);
                                alert('Timeframe updated successfully', data)
                            } catch (error) {
                                console.error('Error updating timeframe:', error);
                            }
                        }}>
                            Save Date
                        </button></div>)
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
                                const newTimelineItems = [...(timelineItems || []), {
                                    ...prospect,
                                    start: new Date().toISOString().split('T')[0]
                                }];
                                setTimelineItems(newTimelineItems);
                                setProspects(prospects.filter(p => p.id !== prospect.id));
                            }}>
                                Add to Timeline
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimelineView;
