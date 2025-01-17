
import { ENVIRONMENT } from '../constants';
import './ribbon.css';


const Ribbon = () => {
    const showDevRibbon = ENVIRONMENT === 'development';
    return (
        <>{showDevRibbon && (
            <a
                className="github-fork-ribbon"
                href="#dev"
                data-ribbon="Development"
                title="Development"
            >
                Development
            </a>
        )}</>
    )
};

export default Ribbon;

