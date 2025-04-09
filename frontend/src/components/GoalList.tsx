import PropTypes from 'prop-types';
import Goal from './Goal'
import './GoalList.css';
import { GoalType } from '../types';

interface GoalListProps {
    goals: GoalType[];
    onAddGoal?: (goal: GoalType) => void;
    onRemoveGoal?: (id: number) => void;
}

const GoalList = ({ 
    goals = [], 
    onAddGoal = () => {}, 
    onRemoveGoal = () => {} 
}: GoalListProps) => (
    <>
        {goals.map(entry => (
            <Goal
                goal={entry}
                key={entry.id}
                onRemoveGoal={onRemoveGoal}
                onAddGoal={onAddGoal}
            />
        ))}
    </>
);

export default GoalList;

GoalList.propTypes = {
    goals: PropTypes.array.isRequired,
    onRemoveGoal: PropTypes.func,
    onAddGoal: PropTypes.func,
};
