import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import useAddForm from '../hooks/useAddForm';

const typeSet = ['0', '1'];

const AddGoalForm = ({ parentId = 0, onAddGoal }) => {
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
          <button type="button" onClick={() => addRemoveType(type)} className="typeBtn" key={type}>
            {type}
          </button>
        ))}
      </label>
      <label htmlFor="parentId">
        Parent Id:
        <input name="parentId" defaultValue={parentId} />
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

// Set default props
AddGoalForm.defaultProps = {
  parentId: 0,
};

AddGoalForm.propTypes = {
  parentId: PropTypes.number,
  onAddGoal: PropTypes.func.isRequired,
};
