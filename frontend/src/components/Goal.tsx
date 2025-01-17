import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import MarkdownDisplay from './MarkdownDisplay';
import MapDisplay from './MapDisplay';
import AddGoalForm from './AddGoalForm';
import useSaveGoal from '../hooks/useSaveGoal';

import './Goal.css';

const typeSet = ['0', '1'];
const tagsSet = ['watch', 'hike', 'animals'];

const Goal = ({ goal, onRemoveGoal }) => {
    const formRef = useRef();
    const [current, setCurrent] = useState(goal);
    const [isEditing, setIsEditing] = useState(false);
    const [isAddingChild, setIsAddingChild] = useState(false);

    const {
        saveGoal,
        removeGoal,
        addRemoveTag,
        addRemoveType,
    } = useSaveGoal(goal, onRemoveGoal, current, setCurrent, setIsEditing, formRef);

    let mainClassName = 'goal-list-row';
    switch (true) {
        case current.type === '0':
            mainClassName = `${mainClassName} location-type`;
            break;
        case current.type === '1':
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

    const changeSearchFormParent = id => {
        document.getElementById('searchTitle').value = '';
        document.getElementById('searchFormParentId').value = id;
        document.getElementById('searchFormSubmit').click();
    };

    return (
        <div className={mainClassName}>
            <button type="button" onClick={() => changeSearchFormParent(current.id)} className="buttonAsLink">Children</button>
            {isEditing ? (
                <div className="manual">
                    <form ref={formRef} onSubmit={saveGoal}>
                        <label htmlFor="title">
                            Title:
                            <input name="title" defaultValue={current.title} />
                        </label>
                        <label
                            htmlFor="priority"
                            title="Priorities description
- Finance (1-10)
- Relationship (1-10)
- Physical (1-10)
- Time Frame (1-10)
- Total (1-50)
"
                        >
                            Priority:
                            <input name="priority" defaultValue={current.priority} />
                        </label>
                        <label htmlFor="reason">
                            Reason:
                            <input name="reason" defaultValue={current.reason} />
                        </label>

                        <label htmlFor="type">
                            Type:
                            <input name="type" defaultValue={current.type} />
                            {typeSet.map(type => (
                                <button type="button" onClick={() => addRemoveType(type)} className="typeBtn" key={type}>
                                    {type}
                                </button>
                            ))}
                        </label>
                        <label htmlFor="parentId">
                            Parent Id:
                            <input name="parentId" defaultValue={current.parent_id} />
                        </label>
                        <label htmlFor="tags">
                            Tags:
                            <input name="tags" defaultValue={current.tags} />
                            {tagsSet.map(tag => (
                                <button type="button" onClick={() => addRemoveTag(tag)} className="tagBtn" key={tag}>
                                    {tag}
                                </button>
                            ))}
                        </label>
                        <label htmlFor="note" className="notesField">
                            Notes:
                            <textarea name="note" defaultValue={current.note} />
                        </label>
                        <label htmlFor="added_at">
                            Added At:
                            <input name="addedAt" defaultValue={current.added_at} />
                        </label>
                        <label htmlFor="gpsCoords">
                            GPS coords:
                            <input name="gpsCoords" defaultValue={current.gps_coords} />
                        </label>
                        <label htmlFor="gpsZoom">
                            Zoom level:
                            <input name="gpsZoom" defaultValue={current.gps_zoom} />
                        </label>
                        <button type="submit" className="saveBtn">Save</button>
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            type="button"
                        >
                            Cancel
                        </button>
                    </form>
                    <button
                        onClick={() => removeGoal()}
                        type="button"
                        style={{ width: '5rem' }}
                    >
                        Delete
                    </button>
                </div>
            ) : (
                <div>
                    {/* show non-editing format */}
                    <div className="manual goal-display">
                        <span>
                            {`${current.title} - ${current.id}`}
                        </span>
                        <span>
                            {`Type: ${typeSet[current.type]} - Parent:`}
                            <button type="button" onClick={() => changeSearchFormParent(current.parent_id)}>{current.parent_id}</button>
                        </span>
                        <span title="Priorities description
- Finance (1-10)
- Relationship (1-10)
- Physical (1-10)
- Time Frame (1-10)
- Total (1-50)
"
                        >
                            Priority:
                            {current.priority !== -1 && (
                                <span>
                                    {current.priority}
                                </span>
                            )}
                        </span>
                        {current.gps_coords && (
                            <>
                                <span>
                                    {`GPS: ${current.gps_coords}`}
                                </span>
                                <MapDisplay center={current.gps_coords.split(",").map(Number)} zoom={current.gps_zoom}
                                height={200}
                                width={200}
                                />
                            </>
                        )}
                        {/* <span>
              {`Reason: ${current.reason}`}
            </span> */}
                        {/* <span>
              {'Note: '}
              <MarkdownDisplay source={current.note} />
            </span> */}
                        <span>
                            {`Tags: ${current.tags}`}
                        </span>

                        {/* <span>
              {`Added At: ${current.added_at}`}
            </span> */}
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            type="button"
                        >
                            Edit
                        </button>
                    </div>

                </div>
            )}
            {isAddingChild ? (
                <>
                    <h3>Add Children</h3>
                    <button onClick={toggleIsAddingChild} type="button" style={{ width: '5rem' }}>Close</button>
                    <AddGoalForm parentId={current.id} onAddGoal={onAddGoal} />
                </>
            ) : (

                <button onClick={toggleIsAddingChild} type="button" style={{ width: '10rem' }}>Show Add form</button>

            )}
        </div>
    );
};
export default Goal;

Goal.propTypes = {
    goal: PropTypes.object.isRequired,
    onRemoveGoal: PropTypes.func.isRequired,
};
