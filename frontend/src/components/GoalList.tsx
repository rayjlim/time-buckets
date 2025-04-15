import PropTypes from 'prop-types';
import Goal from './Goal'
import GoalPrint from './GoalPrint'

import './GoalList.css';
import { GoalType } from '../types';

interface GoalListProps {
    goals: GoalType[];
    printFormat?: boolean;
    onAddGoal?: (goal: GoalType) => void;
    onRemoveGoal?: (id: number) => void;
}

const GoalList = ({
    goals = [],
    printFormat = false,
    onAddGoal = () => { },
    onRemoveGoal = () => { }
}: GoalListProps) => (
    <>
        {goals.map(entry => (
            printFormat ?
                <GoalPrint
                    goal={entry}
                    key={entry.id}
                /> : (
                    <Goal
                        goal={entry}
                        key={entry.id}
                        onRemoveGoal={onRemoveGoal}
                        onAddGoal={onAddGoal}
                    />)
        ))}
    </>
);

export default GoalList;

GoalList.propTypes = {
    goals: PropTypes.array.isRequired,
    printFormat: PropTypes.bool,
    onRemoveGoal: PropTypes.func,
    onAddGoal: PropTypes.func,
};
