// import type { ReactElement } from "react";
import { useAddMessage } from "@react-md/alert";
import { Button } from "@react-md/button";



// If you need to define props, create an interface
interface MdDisplayProps {
    // Add any props here if needed
    center: [number, number];
}

const MdDisplay: React.FC<MdDisplayProps> = ({ center }) => {
    console.log(center);
    const addMessage = useAddMessage();
    return (<>
        <h3>Show Toast</h3>
        <Button
      id="button-1"
      onClick={() => addMessage({ children: "Example Message" })}
      style={{  color: 'white' }}
    >
      Show Message
    </Button>
    </>
    )
};

export default MdDisplay;
