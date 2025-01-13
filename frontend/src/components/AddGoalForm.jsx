import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import useAddForm from '../hooks/useAddForm';

const typeSet = ['0', '1'];

const AddGoalForm = ({
  title = '',
  type = 0,
  parentId = 0,
  onAddGoal,
}) => {
  const formRef = useRef();
  const {
    sendAddForm,
    addRemoveType,
  } = useAddForm(onAddGoal, formRef);
  console.log(type);
  return (
    <form ref={formRef} onSubmit={sendAddForm}>
      <label htmlFor="title">
        Title:
        <input name="title" defaultValue="" value={title} />
      </label>
      <label htmlFor="type">
        Type:
        <input name="type" defaultValue="" type={type} size="4" />
        {typeSet.map(typeI => (
          <button type="button" onClick={() => addRemoveType(typeI)} className="typeBtn" key={typeI}>
            {typeI}
          </button>
        ))}
      </label>
      <label htmlFor="parentId">
        Parent Id:
        <input name="parentId" defaultValue={parentId} value={parentId} size="4" />
      </label>
      <button
        type="submit"
      >
        Add Goal
      </button>
    </form>
  );
};
export default AddGoalForm;

// Set default props
AddGoalForm.defaultProps = {
  title: '',
  type: 0,
  parentId: 0,
};

AddGoalForm.propTypes = {
  title: PropTypes.string,
  type: PropTypes.number,
  parentId: PropTypes.number,
  onAddGoal: PropTypes.func.isRequired,
};
