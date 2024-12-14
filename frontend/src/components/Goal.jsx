import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
// import { parse, format } from 'date-fns';
import { toast } from 'react-toastify';
import { REST_ENDPOINT } from '../constants';

import './Goal.css';

const typeSet = ['location', 'experience', 'achievement'];
const tagsSet = ['watch', 'hike', 'animals'];

const Goal = ({ goal, onRemoveGoal }) => {
  const formRef = useRef();
  const [current, setCurrent] = useState(goal);

  const [isEditing, setIsEditing] = useState(false);

  async function saveGoal(event) {
    console.log('save goal');
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const title = formData.get('title');
    const priority = formData.get('priority');
    const reason = formData.get('reason');
    const note = formData.get('note');
    const addedAt = formData.get('addedAt');
    const tags = formData.get('tags');
    const thoughts = formData.get('thoughts');
    const type = formData.get('type');

    const endpoint = `${REST_ENDPOINT}goals/${goal.id}`;
    const config = {
      method: 'POST',
      body: JSON.stringify({
        title,
        priority,
        reason,
        note,
        addedAt,
        tags,
        thoughts,
        type,
      }),
    };
    try {
      const response = await fetch(endpoint, config);
      console.log('response :', response);
      if (!response.ok) {
        console.log('response.status :', response.status);
        throw new Error(response.status);
      } else {
        const data = await response.json();
        console.log('data :', data);
        setCurrent({
          ...current,
          title,
          priority,
          reason,
          note,
          tags,
          added_at: addedAt,
          type,
        });
        setIsEditing(false);
      }
    } catch (err) {
      console.log(`Error: ${err}`);
      toast.error(`loading error : ${err}`);
    }
  }
  async function removeGoal() {
    console.log('remove goal');

    const endpoint = `${REST_ENDPOINT}goals/${goal.id}`;
    const config = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json', // Optional: Specify if sending JSON data
      },
    };
    try {
      const response = await fetch(endpoint, config);
      console.log('response :', response);
      if (!response.ok) {
        console.log('response.status :', response.status);
        throw new Error(response.status);
      } else {
        const data = await response.json();
        console.log('data :', data);
        setIsEditing(false);
        onRemoveGoal(goal.id);
      }
    } catch (err) {
      console.log(`Error: ${err}`);
      toast.error(`loading error : ${err}`);
    }
  }
  function addRemoveTag(content) {
    console.log('addRemove', content);

    const tagsInput = formRef.current.querySelector('input[name="tags"]');
    if (!tagsInput.value.includes(content)) {
      tagsInput.value = `${tagsInput.value} ${content}`;
    } else {
      tagsInput.value = tagsInput.value.replace(content, '').trim();
    }
  }
  function addRemoveType(content) {
    console.log('addRemove', content);

    const typeInput = formRef.current.querySelector('input[name="type"]');
    if (!typeInput.value.includes(content)) {
      typeInput.value = `${typeInput.value} ${content}`;
    } else {
      typeInput.value = typeInput.value.replace(content, '').trim();
    }
  }

  let mainClassName = 'goal-list-row';
  switch (true) {
    case current.size_calculated > 20:
      mainClassName = `${mainClassName} large-size`;
      break;
    case current.size_calculated > 10:
      mainClassName = `${mainClassName} medium-size`;
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
-1
- 1 - 20  Top tier to play
- 50 - 80  Next to install
- 80 - 100  Next to download + install
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
            {current.title}
            <span>
              {`Reason: ${current.reason}`}
            </span>
            <span>
              {`Note: ${current.note}`}
            </span>
            <span title="Priorities description
-1
- 1 - 20  Top tier to play
- 50 - 80  Next to install
- 80 - 100  Next to download + install
- 200 finished, installed, uninstalled,
- 300 Errors / Issues
- 400 There's a newer version
- 500 Not interested"
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
              {`Type: ${current.type}`}
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
