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
            <h2 className="_text-align_center color-display__heading">Color Input</h2>
            <div className="_grid _grid_template-columns-1-1">
                <UserColorInput changeColor={ChangeColor} />
                <div className="color-display__output-rectangle" style={{ background: `${userColor}` }} />
            </div>
        </>
    );
}

export default ColorDisplayIndex;