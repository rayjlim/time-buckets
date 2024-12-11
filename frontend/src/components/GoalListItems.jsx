import React from 'react';
import PropTypes from 'prop-types';
import Goal from './Goal';
import './GoalListItems.css';

const GoalList = ({ goals }) => (
  <>
    {goals.map(entry => (
      <Goal goal={entry} key={entry.id} />
    ))}
  </>
);
export default GoalList;

GoalList.propTypes = {
  goals: PropTypes.array.isRequired,
};
