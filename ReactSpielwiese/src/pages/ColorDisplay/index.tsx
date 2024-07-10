import { useState } from 'react';
import './css/color-display.css'
import UserColorInput from './components/UserColorInput';

function ColorDisplayIndex() {
    const [userColor, setUserColor] = useState("");

    const ChangeColor = (color: string) => {
        setUserColor(color);
    }

    return (
        <>
            <div className="color-display__output-rectangle" style={{ background: `${userColor}` }} />
            <UserColorInput changeColor={ChangeColor} />
        </>
    );
}

export default ColorDisplayIndex;