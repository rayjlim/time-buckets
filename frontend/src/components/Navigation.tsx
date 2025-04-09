import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav style={{ marginBottom: '1rem' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Goals List</Link>
            <Link to="/completed">Completed Goals</Link>
        </nav>
    );
};

export default Navigation;
