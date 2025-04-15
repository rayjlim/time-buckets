import { useState, useRef } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Radio, RadioGroup, FormControlLabel, FormControl, TextField } from '@mui/material';
import MapDisplay from './MapDisplay';
import AddGoalForm from './AddGoalForm';
import useSaveGoal from '../hooks/useSaveGoal';

import { TAGS } from '../constants';
import { GoalType } from '../types';
import './Goal.css';

const typeSet = ['Location', 'Experience'];

interface FormTextFieldProps {
    name: string;
    label: string;
    defaultValue?: string | number;
    required?: boolean;
    title?: string;
}

// Remove the inputStyles constant at the top

const FormTextField = ({ name, label, defaultValue, ...props }: FormTextFieldProps) => (
    <TextField
        name={name}
        id={`form-${name}`}
        label={label}
        defaultValue={defaultValue}
        className="mui-text-field"
        {...props}
    />
);

interface GoalProps {
    goal: GoalType;
    onAddGoal: (goal: GoalType) => void;
    onRemoveGoal: (id: number) => void;
}

const Goal = ({ goal, onAddGoal, onRemoveGoal }: GoalProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [current, setCurrent] = useState(goal);
    const [isEditing, setIsEditing] = useState(false);
    const [isAddingChild, setIsAddingChild] = useState(false);
    const [typeForm, setTypeForm] = useState(goal.type);
    const [gpsCoords, setGpsCoords] = useState(goal.gps_coords || '');

    const {
        saveGoal,
        removeGoal,
        addRemoveTag,
    } = useSaveGoal({ goal, onRemoveGoal, current, setCurrent, setIsEditing, formRef });

    const mainClassName = `goal-list-row ${current.type === 0 ? 'location-type' : 'experience-type'}`;

    function toggleIsAddingChild() {
        setIsAddingChild(!isAddingChild);
    }

    const _onAddGoal = (newGoal: GoalType) => {
        toggleIsAddingChild();
        onAddGoal(newGoal);
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
            />
        )
    }

    const renderEditForm = () => (
        <div className="manual">
            <form ref={formRef} onSubmit={saveGoal}>
                <FormControl>
                    <TextField name="title" label="Title" defaultValue={current.title} required className="mui-text-field" />
                    <TextField
                        name="priority"
                        label="Priority"
                        defaultValue={current.priority}
                        title="Priorities description\n- Finance (1-10)\n- Relationship (1-10)\n- Physical (1-10)\n- Time Frame (1-10)\n- Total (1-50)"
                        className="mui-text-field"
                    />
                    <TextField
                        name="reason"
                        id="form-reason"
                        label="Reason"
                        defaultValue={current.reason}
                        className="mui-text-field"
                    />

                    <RadioGroup
                        row
                        aria-labelledby="row-radio-buttons-group-label"
                        name="type"
                        value={typeForm}
                        onChange={e => setTypeForm(Number(e.target.value))}
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
                        className="mui-text-field"
                    />
                    <DatePicker
                        name="completedAt"
                        label="Date Completed"
                        defaultValue={current.completed_at ? new Date(current.completed_at) : null}
                        slotProps={{
                            textField: {
                                size: "small",
                                className: "mui-text-field"
                            }
                        }}

                    />
                    <TextField
                        name="tags"
                        id="form-tags"
                        label="Tags"
                        defaultValue={current.tags}
                        className="mui-text-field"
                    />

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '8px 0' }}>
                        {TAGS.map(tag => (
                            <button
                                type="button"
                                onClick={() => addRemoveTag(tag)}
                                className="tagBtn"
                                key={tag}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                    <TextField
                        id="form-note"
                        name="note"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue={current.note}
                        style={{ margin: '.5em auto', width: '85%' }}
                    />
                    <DatePicker
                        name="addedAt"
                        label="Date Added"
                        value={current.added_at ? new Date(current.added_at) : null}
                        slotProps={{
                            textField: {
                                size: "small",
                               className: "mui-text-field"
                            }
                        }}

                    />
                    <div className="mui-wide-container">
                        <TextField
                            name="gpsCoords"
                            id="form-gpsCoords"
                            label="GPS coords"
                            value={gpsCoords}
                            onChange={e => setGpsCoords(e.target.value)}
                            error={gpsCoords !== '' && !/^-?\d+\.?\d*,\s?-?\d+\.?\d*$/.test(gpsCoords)}
                            helperText={gpsCoords !== '' && !/^-?\d+\.?\d*,\s?-?\d+\.?\d*$/.test(gpsCoords) ? 'Format: latitude,longitude (e.g., 41.40338,2.17403)' : ''}
                            className="mui-text-field-wide"
                        />
                        <TextField
                            name="gpsZoom"
                            id="form-gpsZoom"
                            label="GPS Zoom"
                            defaultValue={current.gps_zoom}
                            className="mui-text-field-wide"
                        />
                    </div>
                    <button type="submit" className="saveBtn">Save</button>
                    <button
                        onClick={() => setIsEditing(!isEditing)}
                        type="button"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => removeGoal()}
                        type="button"
                        style={{ width: '5rem' }}
                    >
                        Delete
                    </button>

                </FormControl>
            </form>
        </div>
    );

    const renderDisplayView = () => (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            {/* show non-editing format */}
            <div className="manual goal-display" style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                        <button type="button" onClick={() => changeSearchFormParent(current.id + '')}>{current.id}</button>
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


                    {/*
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
                    <div style={{ fontSize: 'small' }}>
                        {`${current.note}`}
                    </div>
                    {current.completed_at && (
                        <div style={{ fontSize: 'large', fontWeight: 'bold' }}>
                            {`Completed At: ${current.completed_at}`}
                        </div>
                    )}
                </div>
            </div>
            {current.gps_coords && current.gps_coords !== '' && (
                <div>
                    GPS:
                    <a href={`https://www.google.com/maps/place/${current.gps_coords}`}>
                        {current.gps_coords.slice(0, 10)}
                    </a>
                    {displayMap()}
                </div>
            )}
        </div>
    );

    return (
        <div className={mainClassName}>
            {isEditing ? renderEditForm() : renderDisplayView()}
            {isAddingChild ? (
                <>
                    <h3>Add Children</h3>
                    <button onClick={toggleIsAddingChild} type="button" style={{ width: '5rem' }}>Close</button>
                    <AddGoalForm parentId={current.id} onAddGoal={_onAddGoal} />
                </>
            ) : (
                <button onClick={toggleIsAddingChild} type="button" style={{ width: '10rem' }}>
                    Show Add form
                </button>
            )}
        </div>
    );
};

export default Goal;
