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
        <article style={{ display: 'flex', flexDirection: 'row', gap: '1rem', border: '1px solid grey' }}>
            <div>
                {`${current.title} `}
            </div>
            <div>
                {`${typeSet[current.type]}`}
                {current.children_count > 0 && `, Children: ${current.children_count}`}
            </div>

            <div>
                {`Tags: ${current.tags}`}
            </div>
            <div style={{ fontSize: 'small' }}>
                {`Added At: ${current.added_at}`}
            </div>
            <div style={{ fontSize: 'small' }}>
                <MarkdownDisplay source={current.reason || ''} />
                <MarkdownDisplay source={current.note || ''} />

            </div>
            {current.completed_at && (
                <div style={{ fontSize: 'large', fontWeight: 'bold' }}>
                    {current.completed_at}
                </div>
            )}
        </article>
    );

    return (
        <div>
            {renderDisplayView()}
        </div>
    );
};

export default Goal;
