
import { useState } from 'react';
import { Chip } from '@react-md/chip';
type MyComponentProps = {
    children: React.ReactNode,
    buttonText: string,
  };
const ChipToggleView: React.FC<MyComponentProps> = ({ children, buttonText }) => {
    const [isChipView, setIsChipView] = useState(true);

    // Toggle between views
    const toggleView = () => {
        setIsChipView((prevView) => !prevView);
    };

    return (
        <div>

            <Chip onClick={toggleView}>
                {buttonText}
            </Chip>

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
