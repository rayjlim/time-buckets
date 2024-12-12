import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { REST_ENDPOINT } from '../constants';

const typeSet = ['location', 'experience', 'achievement'];

const AddGoalForm = ({ onAddGoal }) => {
  const addForm = useRef();
  async function sendAddForm(event) {
    event.preventDefault();
    const formData = new FormData(addForm.current);
    const title = formData.get('title');
    const type = formData.get('type');
    const endpoint = `${REST_ENDPOINT}goals/`;
    const newGoal = {
      title,
      type,
    };
    const config = {
      method: 'POST',
      body: JSON.stringify(newGoal),
    };
    try {
      const response = await fetch(endpoint, config);
      console.log('response :', response);
      if (!response.ok) {
        console.log('response.status :', response.status);
        throw new Error(response.status);
      } else {
        const output = await response.json();
        toast(`Added : ${JSON.stringify(output)}`);
        // const json = JSON.stringify(output);
        // alert(`${output.data.length}, ${json}`);
        onAddGoal(output.data);
      }
    } catch (err) {
      console.log(`Error: ${err}`);
      toast.error(`loading error : ${err}`);
    }
  }
  function addRemoveType(content) {
    console.log('addRemove', content);

    const typeInput = addForm.current.querySelector('input[name="type"]');
    if (!typeInput.value.includes(content)) {
      typeInput.value = `${typeInput.value} ${content}`;
    } else {
      typeInput.value = typeInput.value.replace(content, '').trim();
    }
  }
  return (
    <form ref={addForm} onSubmit={sendAddForm}>
      <label htmlFor="title">
        Title:
        <input name="title" defaultValue="" />
      </label>
      <label htmlFor="type">
        Type:
        <input name="type" defaultValue="" />
        {typeSet.map(type => (
          <button type="button" onClick={() => addRemoveType(type)} className="typeBtn">
            {type}
          </button>
        ))}
      </label>
      <button
        type="submit"
        title=""
      >
        Add Goal
      </button>
    </form>
  );
};
export default AddGoalForm;
AddGoalForm.propTypes = {
  onAddGoal: PropTypes.func.isRequired,
};
