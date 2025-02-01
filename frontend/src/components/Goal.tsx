import { useState, useRef } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
// import MarkdownDisplay from './MarkdownDisplay';

import MapDisplay from './MapDisplay';
import AddGoalForm from './AddGoalForm';
import useSaveGoal from '../hooks/useSaveGoal';

import { TAGS } from '../constants';
import { GoalType } from '../types';
import './Goal.css';

const typeSet = ['Location', 'Experience'];

interface GoalProps {
    goal: GoalType;
    onRemoveGoal: (id: number) => void;
}

const Goal: React.FC<GoalProps> = ({ goal, onRemoveGoal }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [current, setCurrent] = useState(goal);
    const [isEditing, setIsEditing] = useState(false);
    const [isAddingChild, setIsAddingChild] = useState(false);
    const [typeForm, setTypeForm] = useState(goal.type);

    const {
        saveGoal,
        removeGoal,
        addRemoveTag,
    } = useSaveGoal(goal, onRemoveGoal, current, setCurrent, setIsEditing, formRef);

    let mainClassName = 'goal-list-row';
    switch (true) {
        case current.type === 0:
            mainClassName = `${mainClassName} location-type`;
            break;
        case current.type === 1:
            mainClassName = `${mainClassName} experience-type`;
            break;
        default:
            console.log('');
    }

    function toggleIsAddingChild() {
        setIsAddingChild(!isAddingChild);
    }

    const onAddGoal = () => {
        setIsAddingChild(!isAddingChild);
    };

    const changeSearchFormParent = (id: string) => {
        const searchTitle = document.getElementById('searchTitle') as HTMLInputElement;
        const searchParentId = document.getElementById('searchFormParentId') as HTMLInputElement;

        const searchFormId = document.getElementById('searchform-id') as HTMLInputElement;
        const searchFormSubmit = document.getElementById('searchFormSubmit') as HTMLInputElement;

        if (searchTitle) searchTitle.value = '';
        if (searchParentId) searchParentId.value = '';
        if (searchFormId) searchFormId.value = id;
        if (searchFormSubmit) searchFormSubmit.click();
    };
    const displayMap = () => {
        const mapDimension = 150;
        return current.gps_coords.indexOf(',') !== -1 && (
            <MapDisplay center={current.gps_coords.split(",").map(Number) as [number, number]} zoom={current.gps_zoom}
                height={mapDimension}
                width={mapDimension}
            />)

    }

    return (
        <div className={mainClassName}>
            {isEditing ? (
                <div className="manual">
                    <form ref={formRef} onSubmit={saveGoal}>
                        <FormControl>
                            <TextField
                                name="title"
                                required
                                id="form-title"
                                label="Title"
                                defaultValue={current.title}
                            />
                            <TextField
                                name="priority"
                                id="form-priority"
                                title="Priorities description
                            - Finance (1-10)
                            - Relationship (1-10)
                            - Physical (1-10)
                            - Time Frame (1-10)
                            - Total (1-50)
                            "
                                label="Priority"
                                defaultValue={current.priority}
                            />
                            <TextField
                                name="reason"
                                id="form-reason"
                                label="Reason"
                                defaultValue={current.reason}
                            />

                            <RadioGroup
                                row
                                aria-labelledby="row-radio-buttons-group-label"
                                name="type"
                                value={typeForm}
                                onChange={(e) => setTypeForm(Number(e.target.value))}
                                className="type-radio"
                            >
                                <FormControlLabel value="0" control={<Radio />} label="Location" />
                                <FormControlLabel value="1" control={<Radio />} label="Experience" />
                            </RadioGroup>

                            <TextField
                                name="parentId"
                                id="form-parentId"
                                label="Parent"
                                defaultValue={current.parent_id}
                            />
                            <TextField
                                name="completedAt"
                                id="form-completedAt"
                                label="Date Completed"
                                defaultValue={current.completed_at}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        height: '30px', // Set the height
                                        fontSize: '0.875rem', // Adjust font size
                                    },
                                    '& .MuiInputLabel-root': {
                                        fontSize: '0.75rem', // Adjust label font size
                                    },
                                }}
                            />
                            <TextField
                                name="tags"
                                id="form-tags"
                                label="Tags"
                                defaultValue={current.tags}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        height: '30px', // Set the height
                                        fontSize: '0.875rem', // Adjust font size
                                    },
                                    '& .MuiInputLabel-root': {
                                        fontSize: '0.75rem', // Adjust label font size
                                    },
                                }}
                            />

                            <br />
                            {TAGS.map(tag => (
                                <button type="button" onClick={() => addRemoveTag(tag)} className="tagBtn" key={tag}>
                                    {tag}
                                </button>
                            ))}
                            <TextField
                                id="form-note"
                                name="note"
                                label="Multiline"
                                multiline
                                rows={4}
                                defaultValue={current.note}
                                style={{ margin: '.5em auto', width: '75%' }}
                            />
                            <TextField
                                name="addedAt"
                                id="form-addedAt"
                                label="Date Added"
                                defaultValue={current.added_at}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        height: '30px', // Set the height
                                        fontSize: '0.875rem', // Adjust font size
                                    },
                                    '& .MuiInputLabel-root': {
                                        fontSize: '0.75rem', // Adjust label font size
                                    },
                                }}
                            />
                            <TextField
                                name="gpsCoords"
                                id="form-gpsCoords"
                                label="GPS coords"
                                defaultValue={current.gps_coords}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        height: '30px', // Set the height
                                        fontSize: '0.875rem', // Adjust font size
                                    },
                                    '& .MuiInputLabel-root': {
                                        fontSize: '0.75rem', // Adjust label font size
                                    },
                                }}
                            />
                            <TextField
                                name="gpsZoom"
                                id="form-gpsZoom"
                                label="GPS Zoom"
                                defaultValue={current.gps_zoom}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        height: '30px', // Set the height
                                        fontSize: '0.875rem', // Adjust font size
                                    },
                                    '& .MuiInputLabel-root': {
                                        fontSize: '0.75rem', // Adjust label font size
                                    },
                                }}
                            />
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '100%',

                            }}>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <button type="submit" className="saveBtn">Save</button>
                                    <button
                                        onClick={() => setIsEditing(!isEditing)}
                                        type="button"
                                    >
                                        Cancel
                                    </button>

                                </div>
                                <button
                                    onClick={() => removeGoal()}
                                    type="button"
                                    style={{ width: '5rem' }}
                                >
                                    Delete
                                </button>

                            </div>
                        </FormControl>
                    </form>

                </div>
            ) : (
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                }}>
                    {/* show non-editing format */}
                    <div className="manual goal-display" style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                            <button type="button" onClick={() => changeSearchFormParent(`${current.id}`)}>{current.id}</button>
                            {`${current.title} `}
                            </div>
                            <div>
                                {`${typeSet[current.type]}`}
                                {current.children_count > 0 && `, Children: ${current.children_count}`}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                                Parent
                                <button type="button" onClick={() => changeSearchFormParent(`${current.parent_id}`)}>{current.parent?.title || 'root'}</button>
                            </div>
                            <button
                                onClick={() => setIsEditing(!isEditing)}
                                type="button"
                            >
                                Edit
                            </button>
                        </div>
                        <div>
                            <div title="Priorities description
- Finance (1-10)
- Relationship (1-10)
- Physical (1-10)
- Time Frame (1-10)
- Total (1-50)
"
                                style={{ 'margin': '0 auto' }}>
                                Priority:
                                {current.priority !== -1 && (
                                    <>
                                        {current.priority}
                                    </>
                                )}
                            </div>


                            {/* <div>
              {`Reason: ${current.reason}`}
            </div>
             <div>
              {'Note: '}
              <MarkdownDisplay source={current.note} />
            </div> */}
                            <div>
                                {`Tags: ${current.tags}`}
                            </div>
                            <div style={{ fontSize: 'small' }}>
                                {`Added At: ${current.added_at}`}
                            </div>
                            {current.completed_at !== null && current.completed_at !== '' && (<div style={{ fontSize: 'large', fontWeight: 'bold' }}>
                                {`Completed At: ${current.completed_at}`}
                            </div>)}
                        </div>
                    </div>
                    {current.gps_coords && current.gps_coords !== '' && (
                        <div>
                            {`GPS: ${current.gps_coords.slice(0, 10)}`}
                            {displayMap()}
                        </div>
                    )}
                </div>

            )
            }
            {
                isAddingChild ? (
                    <>
                        <h3>Add Children</h3>
                        <button onClick={toggleIsAddingChild} type="button" style={{ width: '5rem' }}>Close</button>
                        <AddGoalForm parentId={current.id} onAddGoal={onAddGoal} />
                    </>
                ) : (

                    <button onClick={toggleIsAddingChild} type="button" style={{ width: '10rem' }}>Show Add form</button>

                )
            }
        </div >
    );
};
export default Goal;
