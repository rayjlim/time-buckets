import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav style={{ marginBottom: '1rem' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Goals List</Link>
            <Link to="/completed"  style={{ marginRight: '1rem' }}>Completed Goals</Link>
            <Link to="/timeline" style={{ marginRight: '1rem' }}>Timeline</Link>
        </nav>
    );
};

export default Navigation;
