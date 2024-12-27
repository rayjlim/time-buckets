import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import MarkdownDisplay from './MarkdownDisplay';
import useSaveGoal from '../hooks/useSaveGoal';

import './Goal.css';

const typeSet = ['0', '1'];
const tagsSet = ['watch', 'hike', 'animals'];

const Goal = ({ goal, onRemoveGoal }) => {
  const formRef = useRef();
  const [current, setCurrent] = useState(goal);
  const [isEditing, setIsEditing] = useState(false);
  const {
    saveGoal,
    removeGoal,
    addRemoveTag,
    addRemoveType,
  } = useSaveGoal(goal, onRemoveGoal, current, setCurrent, setIsEditing, formRef);

  let mainClassName = 'goal-list-row';
  switch (true) {
    case current.type === '1':
      mainClassName = `${mainClassName} location-type`;
      break;
    case current.type === '2':
      mainClassName = `${mainClassName} experience-type`;
      break;
    default:
      console.log('');
  }

  return (
    <div className={mainClassName}>

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
            <label htmlFor="parent_id">
              Parent Id:
              <input name="parent_id" defaultValue={current.parent_id} />
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
          >
            Delete
          </button>
        </div>
      ) : (
        <div>
          {/* show non-editing format */}
          <div className="manual">
            {`${current.title} - ${current.id}`}
            <span>
              {`Reason: ${current.reason}`}
            </span>
            <span>
              {'Note: '}
              <MarkdownDisplay source={current.note} />
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
            <span>
              {`Tags: ${current.tags}`}
            </span>
            <span>
              {`Type: ${typeSet[current.type]} - Parent: ${current.parent_id}`}
            </span>
            <span>
              {`Added At: ${current.added_at}`}
            </span>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            type="button"
          >
            Edit
          </button>

        </div>
      )}

    </div>
  );
};
export default Goal;

Goal.propTypes = {
  goal: PropTypes.object.isRequired,
  onRemoveGoal: PropTypes.func.isRequired,
};
