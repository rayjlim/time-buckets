import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav style={{ margin: '.25rem 0', backgroundColor: '#C1E1C1', width: '90%' }}>
            <Link to="/" style={{ margin: '0 .5rem' }}>Goals List</Link>
            <Link to="/completed"  style={{ margin: '1rem' }}>Completed Goals</Link>
            <Link to="/timeline" style={{ margin: '1rem' }}>Timeline</Link>
        </nav>
    );
};

export default Navigation;
