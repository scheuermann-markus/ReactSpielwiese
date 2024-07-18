import { useEffect, useState } from "react";
import { Game, Player } from "../Models/Enums";

interface Props {
    id: number;
    activePlayer: Player,
    runningGame: Game,

    userSelectField: (fieldId: number) => void;
}

export default function Field(props: Props) {
    const [_selectedFrom, setSelectedFrom] = useState<Player>(Player.None);

    const OnFieldClick = (): void => {
        if (_selectedFrom != Player.None) {
            return;
        }

        setSelectedFrom(props.activePlayer);

        props.userSelectField(props.id);
    }

    const GetFieldCssClasses = (): string => {
        let css = "tictactoe__field";

        if (props.runningGame === Game.None || _selectedFrom != Player.None) {
            css += " tictactoe__field--locked";
        }

        return css;
    }

    // Felder zurücksetzen, wenn Spiel neu gestartet wird. dh wenn der Game-State sich auf 'Running' ändert.
    useEffect(() => {
        if (props.runningGame === Game.Running || props.runningGame === Game.None) {
            setSelectedFrom(Player.None);
        }
    }, [props.runningGame]);

    return (
        <div style={{ gridArea: `area${props.id}` }} className={GetFieldCssClasses()} onClick={OnFieldClick}>
            {_selectedFrom === Player.Player1 && <i className="bi bi-x-lg"></i>}
            {_selectedFrom === Player.Player2 && <i className="bi bi-circle"></i>}
        </div>
    );
}

