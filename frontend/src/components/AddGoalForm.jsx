import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import useAddForm from '../hooks/useAddForm';

const typeSet = ['location', 'experience', 'achievement'];

const AddGoalForm = ({ onAddGoal }) => {
  const formRef = useRef();
  const {
    sendAddForm,
    addRemoveType,
  } = useAddForm(onAddGoal, formRef);

  return (
    <form ref={formRef} onSubmit={sendAddForm}>
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
