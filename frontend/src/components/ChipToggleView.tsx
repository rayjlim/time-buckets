
import { useState } from 'react';
import Switch from '@mui/material/Switch';

type MyComponentProps = {
    children: React.ReactNode
  };
const ChipToggleView: React.FC<MyComponentProps> = ({ children }) => {
    const [isChipView, setIsChipView] = useState(true);

    // Toggle between views
    const toggleView = () => {
        setIsChipView((prevView) => !prevView);
    };

    return (
        <div>
            <Switch size="small" onChange={toggleView}/>


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
