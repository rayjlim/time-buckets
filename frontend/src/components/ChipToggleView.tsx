
import { useState } from 'react';
import Switch from '@mui/material/Switch';

type MyComponentProps = {
    children: React.ReactNode;
    label?: string;
};

const ChipToggleView: React.FC<MyComponentProps> = ({ children, label }) => {
    const [isChipView, setIsChipView] = useState(true);

    // Toggle between views
    const toggleView = () => {
        setIsChipView((prevView) => !prevView);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', width: '90%'}}>
            <Switch size="small" onChange={toggleView}/>
            {label && <span>{label}</span>}
            {isChipView ? (
                <hr />
            ) : (
                <>
                    {children}
                </>
            )}
        </div>
    );
};

export default ChipToggleView;
