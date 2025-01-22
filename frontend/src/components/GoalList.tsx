import PropTypes from 'prop-types';
import Goal from './Goal'
import './GoalList.css';
import { GoalType } from '../types';

interface GoalListProps {
    goals: GoalType[];
    onRemoveGoal: (id: number) => void;
}

const GoalList: React.FC<GoalListProps> = ({ goals, onRemoveGoal }) => (
  <>
    {goals.map(entry => (
      <Goal
        goal={entry}
        key={entry.id}
        onRemoveGoal={onRemoveGoal}
      />
    ))}
  </>
);
export default GoalList;

GoalList.propTypes = {
  goals: PropTypes.array.isRequired,
  onRemoveGoal: PropTypes.func.isRequired,
};
