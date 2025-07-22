import { GoalType } from '../types';
import MarkdownDisplay from './MarkdownDisplay';
import './Goal.css';

const typeSet = ['Location', 'Experience'];

interface GoalProps {
    goal: GoalType
}

const Goal = ({ goal }: GoalProps) => {
    const current = goal as GoalType;
    console.log(current);
    const renderDisplayView = () => (
        <article className="goal-print-article">
            <div>
                <span>{`${current.title} `}</span>
                <br></br>
                <span className="goal-print-title">{`${typeSet[current.type]}`}</span>
            </div>
            <div className="goal-print-info">
                {current.children_count > 0 && `Children: ${current.children_count}`}
            </div>
            <div className="goal-print-info">
                {`Tags: ${current.tags}`}
            </div>
            <div className="goal-print-details">
                <div className="goal-print-details-small">
                    {`Added: ${current.added_at}`}
                </div>
                <div className="goal-print-details-small">
                    <MarkdownDisplay source={current.reason || ''} />
                    <MarkdownDisplay source={current.note || ''} />
                </div>
                {current.completed_at && (
                    <div className="goal-print-completion">
                        {current.completed_at}
                    </div>
                )}
            </div>
        </article>
    );

    return (
        <div>
            {renderDisplayView()}
        </div>
    );
};

export default Goal;
