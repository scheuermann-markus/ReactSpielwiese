import { useState } from 'react';
import './css/tictactoe.css'
import Field from './components/Field';


enum Player {
    None,
    Player1,
    Player2
}

export default function index() {
    const [_activeGame, setActiveGame] = useState<boolean>(false);

    const [_activePlayer, setActivePlayer] = useState<Player>(Player.None);
    let _patternPlayer1: Array<number> = [];
    let _patternPlayer2: Array<number> = [];

    let _winPatterns: Array<Array<number>> = [
        [1, 2, 3],
        [3, 6, 9],
        [9, 8, 7],
        [7, 4, 1],
        [1, 5, 9],
        [3, 5, 7],
        [4, 5, 6],
        [8, 5, 2]
    ];

    const GameStart = (): void => {
        // Alle Werte auf Anfang setzen
        _patternPlayer1 = [];
        _patternPlayer2 = [];
        setActivePlayer(Player.Player1);
    }

    const UserSelectField = (fieldId: number): void => {
        if (_activePlayer === Player.Player1) {
            // Spieler 1 ist am Zug
            _patternPlayer1.push(fieldId);

            var hasWon = CheckWinPattern(_patternPlayer1);

            if (hasWon) {
                // Spieler 1 hat gewonnen
                GameEnd(Player.Player1);
            }
        }
        else {
            // Spieler 2 ist am Zug
            _patternPlayer2.push(fieldId);

            var hasWon = CheckWinPattern(_patternPlayer2);

            if (hasWon) {
                // Spieler 2 hat gewonnen
                GameEnd(Player.Player2);
            }
        }

        ChangeActivePlayer();
    }

    const CheckWinPattern = (pattern: number[]): boolean => {
        for (let winPattern of _winPatterns) {
            if (winPattern.every(e => pattern.includes(e))) {
                return true;
            }
        }

        return false;
    }

    const ChangeActivePlayer = (): void => {
        if (_activePlayer === Player.Player1) {
            setActivePlayer(Player.Player2);
        }
        else {
            setActivePlayer(Player.Player1);
        }
    }

    const GameEnd = (winner: Player): void => {

    }

    const FIELDS = [];
    for (let i = 1; i <= 9; i++) {
        FIELDS.push(<Field key={i}
            id={i}
            onFieldClick={UserSelectField}
        />);
    }

    return (
        <div className="tictactoe _align-content-center">

            <div className="tictactoe__gitter">

                {FIELDS}

            </div>
        </div>
    );
}
