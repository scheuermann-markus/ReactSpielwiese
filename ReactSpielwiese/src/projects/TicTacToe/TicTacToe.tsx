import { useState } from 'react';
import './css/tictactoe.css'
import Field from './components/Field';
import { Game, Player } from './Models/Enums';

// Modul-Scope
let _patternPlayer1: Array<number> = [];
let _patternPlayer2: Array<number> = [];

export default function index() {
    const [_gameState, setGameState] = useState<Game>(Game.None);
    const [_activePlayer, setActivePlayer] = useState<Player>(Player.None);

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
        setGameState(Game.Running);
        setActivePlayer(Player.Player1);
        _patternPlayer1 = [];
        _patternPlayer2 = [];

        var winnerHeader = document.querySelector(".tictactoe__winner") as HTMLElement;
        if (winnerHeader != null)
            winnerHeader.style.display = "none";
    }

    const UserSelectField = (fieldId: number): void => {
        if (_activePlayer === Player.Player1) {
            // Spieler 1 ist am Zug
            _patternPlayer1.push(fieldId);

            var hasWon = CheckWinPattern(_patternPlayer1);

            if (hasWon) {
                // Spieler 1 hat gewonnen
                GameEnd(Player.Player1);
                return;
            }
        }
        else {
            // Spieler 2 ist am Zug
            _patternPlayer2.push(fieldId);

            var hasWon = CheckWinPattern(_patternPlayer2);

            if (hasWon) {
                // Spieler 2 hat gewonnen
                GameEnd(Player.Player2);
                return;
            }
        }

        // Spiel beenden, wenn alle Felder ausgewählt sind
        if ((_patternPlayer1.length + _patternPlayer2.length) === 9) {
            GameEnd(Player.None);
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

    const StoppGame = (): void => {
        setGameState(Game.None);
    }

    const GameEnd = (winner: Player): void => {
        setGameState(Game.Ended);

        var winnerHeader = document.querySelector(".tictactoe__winner") as HTMLElement;
        if (winnerHeader != null) {
            winnerHeader.style.display = "unset";

            switch (winner) {
                case Player.None: {
                    winnerHeader.innerHTML = "Unentschieden!";
                    break;
                }
                case Player.Player1: {
                    winnerHeader.innerHTML = "Spieler 1 hat gewonnen!";
                    break;
                }
                case Player.Player2: {
                    winnerHeader.innerHTML = "Spieler 2 hat gewonnen!";
                    break;
                }
            }
        }
    }

    const FIELDS = [];
    for (let i = 1; i <= 9; i++) {
        FIELDS.push(<Field key={i}
            id={i}
            activePlayer={_activePlayer}
            runningGame={_gameState}
            userSelectField={UserSelectField}
        />);
    }

    return (
        <div className="tictactoe _align-content-center">

            <div className="tictactoe__gitter">

                <div className="tictactoe__winner" />

                <div className="tictactoe__heading _text-align_center">
                    {_activePlayer === Player.Player1 && <h4>Spieler 1 ist am Zug.</h4>}
                    {_activePlayer === Player.Player2 && <h4>Spieler 2 ist am Zug.</h4>}
                </div>

                {FIELDS}

            </div>

            <div className="_text-align_center">
                {
                    _gameState === Game.Running ? (
                        <i className="bi bi-stop-fill btn btn-danger tictactoe__button" title="Stop" onClick={StoppGame}></i>
                    ) : (
                        <i className="bi bi-play-fill btn btn-primary tictactoe__button" title="Game start" onClick={GameStart}></i>
                    )
                }
            </div>
        </div>
    );
}
