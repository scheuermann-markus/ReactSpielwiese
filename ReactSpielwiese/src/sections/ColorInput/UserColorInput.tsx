import { useState } from "react";

interface Props {
    changeColor: (value: string) => void;
}

function UserColorInput(props: Props) {
    const [activeColor, setActiveColor] = useState("");

    const HandleChange = (e: any) => {
        const { value } = e.target;
        setActiveColor(value);

        props.changeColor(value);
    }

    return (
        <div className="user-color-input__container">
            <input
                id="input"
                className="user-color-input__input"
                type="text"
                aria-label="input"
                onChange={HandleChange}
                value={activeColor}
                placeholder="linear-gradient(to top right, #B67772, #101E3E);"
            />
            <span className="_secondary-text">* type in your color</span>
        </div>
    );
}

export default UserColorInput;