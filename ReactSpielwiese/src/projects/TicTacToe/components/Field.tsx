
interface Props {
    id: number;

    onFieldClick: (fieldId: number) => void;
}

export default function Field(props: Props) {
    return (
        <div style={{ gridArea: `area${props.id}` }} className="tictactoe__field" onClick={() => props.onFieldClick(props.id)}>
            hola {props.id}
        </div>
    );
}

