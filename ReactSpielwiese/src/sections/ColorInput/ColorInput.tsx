import { useState } from 'react';
import './color-display.css'
import UserColorInput from './UserColorInput';

export default function ColorInput() {
    const [userColor, setUserColor] = useState("");

    const ChangeColor = (color: string) => {
        setUserColor(color);
    }

    return (
        <>
            <div className="_grid _grid_template-columns-1-1">
                <div>
                    <h2 className="_text-align_center color-display__heading">Color Input</h2>
                    <UserColorInput changeColor={ChangeColor} />
                </div>
                <div className="color-display__output-rectangle" style={{ background: `${userColor}` }} />
            </div>
        </>
    );
}