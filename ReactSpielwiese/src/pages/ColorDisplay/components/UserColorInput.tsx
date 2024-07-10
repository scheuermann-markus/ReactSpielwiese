import { useState } from "react";

interface Props {
    changeColor: (value: string) => void;
}

function UserColorInput(props: Props) {
    const [activeColor, setActiveColor] = useState("white");

    const HandleChange = (e: any) => {
        const { value } = e.target;
        setActiveColor(value);

        props.changeColor(value);
    }

    return (
        <input
            id="input"
            type="text"
            aria-label="input"
            onChange={HandleChange}
            value={activeColor}
        />
    );
}

export default UserColorInput;