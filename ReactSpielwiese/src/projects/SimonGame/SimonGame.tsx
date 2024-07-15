import $ from "jquery";
import './css/simon-game.css'
import wrongSound from './sounds/wrong.mp3'
import blueSound from "./sounds/blue.mp3";
import greenSound from "./sounds/green.mp3";
import redSound from "./sounds/red.mp3";
import yellowSound from "./sounds/yellow.mp3";
import Header from "../../layout/Header";
import { useState } from "react";



// Variables
var _level: number = 0;
var _buttonColors: string[] = ["green", "red", "yellow", "blue"];
var _gamePattern: string[] = [];
var _userPattern: string[] = [];
var _lives: number = 0;

const GameOverSound = new Audio(wrongSound);
const BlueButtonSound = new Audio(blueSound);
const GreenButtonSound = new Audio(greenSound);
const RedButtonSound = new Audio(redSound);
const YellowButtonSound = new Audio(yellowSound);




export default function SimonGame() {
    const [_gameActive, setGameActive] = useState<boolean>(false);
    const [_muted, setMuted] = useState<boolean>(true);
    const [_advancedMode, setAdvancedMode] = useState<boolean>(false);

    const GameStart = (): void => {
        if (_level === 0) {

            setGameActive(true);
            setTimeout(function () {
                NextSequence();
            }, 100);
        }
    }

    const RotateButtons = () => {
        if (_advancedMode === true && _level > 1) {
            var x = 90 * (_level - 1);
            $(".simon-game-area").css("transform", "rotate(" + x + "deg)");
        }
    }

    // Animation when randomly selected Button is shown to the user
    const ButtonShowAnimation = (buttonId: string): any => {
        $("#" + buttonId)
            .fadeOut(100)
            .fadeIn(100);
    }

    // Animation when User clicks on a Button
    const ButtonPressAnimation = (buttonId: string): any => {
        $("#" + buttonId).addClass("pressed");
        setTimeout(function () {
            $("#" + buttonId).removeClass("pressed");
        }, 100);
    }

    // Set Amout of Lives
    const AddLive = (): void => {
        if (_lives < 9 && _level === 0) {
            _lives++;
            $(".lives-h2").text(_lives);
        }
    }

    const ReduceLive = (): void => {
        if (_lives > 0) {
            _lives--;
            $(".lives-h2").text(_lives);
        }
    }

    const ToggleMuted = (): void => {
        setMuted(!_muted);
    }

    const CheckPattern = (i: number): void => {
        if (_userPattern[i] === _gamePattern[i]) {
            // Correct Pattern
            if (_userPattern.length === _gamePattern.length) {
                _userPattern = [];
                setTimeout(function () {
                    RotateButtons();
                }, 250);

                setTimeout(function () {
                    NextSequence();
                }, 1000);
            }
        } else {
            // Incorrect Pattern
            if (_lives === 0) {
                // Game over
                $("#simon-h2").text("Game over.");
                setTimeout(function () {
                    $("#simon-h2").text("Click Here to Start the Game.");
                }, 1500);

                $(".button").addClass("wrong");
                setTimeout(function () {
                    $(".button").removeClass("wrong");
                }, 500);

                PlaySound("game over");

                _userPattern = [];
                _gamePattern = [];
                _level = 0;
                setGameActive(false);

                $("._lives-h2").text("0");
                $(".simon-game-area").css("transform", "rotate(0deg)");
            } else {
                // Reduce Lives
                ReduceLive();
                _userPattern = [];
                $("._lives-h2").text(_lives);

                $(".button").addClass("false");
                setTimeout(function () {
                    $(".button").removeClass("false");
                }, 500);

                PlaySound("game over");
            }
        }
    }

    const HandleButtonClick = (e: MouseEvent): void => {
        const target = e.target as HTMLElement;

        if (target === null)
            return;

        PlaySound(target.id);
        ButtonPressAnimation(target.id);
        if (_level !== 0) {
            _userPattern.push(target.id);
            CheckPattern(_userPattern.length - 1);
        }
    }

    const NextSequence = (): void => {
        // Update _level
        _level++;
        let element = document.getElementById("simon-h2");

        if (element != null) {
            element.textContent = "level " + _level;
        }

        // Choose random button
        let randomColor = _buttonColors[Math.floor(Math.random() * 4)];
        _gamePattern.push(randomColor);
        ButtonShowAnimation(randomColor);
        PlaySound(randomColor);
    }

    const PlaySound = (item: string): void => {
        if (_muted)
            return;

        if (item === "green") {
            GreenButtonSound.play();
        } else if (item === "red") {
            RedButtonSound.play();
        } else if (item === "yellow") {
            YellowButtonSound.play();
        } else if (item === "blue") {
            BlueButtonSound.play();
        } else if (item === "game over") {
            GameOverSound.play();
        }
    }

    const SwitchAdvancedMode = (): void => {
        if (_level != 0)
            return;

        let checkbox = document.getElementsByClassName("checkbox") as HTMLInputElement;

        if (checkbox.checked === undefined || checkbox.checked === false) {
            checkbox.checked = true;
            setAdvancedMode(true);
        }
        else {
            checkbox.checked = false;
            setAdvancedMode(false);
        }
    }

    return (
        <>
            <div className="simon-game _align-content-center">
                {/** Heading Section */}
                <div className="simon-head">
                    <h1>Retro Simon Game</h1>
                    <h2 onClick={GameStart} className="simon-h2" id="simon-h2">
                        Click Here to Start the Game.
                    </h2>
                </div>
                <div className="simon-grid">
                    <div className="_flex _flex-direction-column _justify-content_space-evenly">
                        {/** Mute Sound */}
                        <div className="_flex _justify-content-center">
                            <h4 className="simon-game__secondary-heading">Mute: </h4>
                            <h4 onClick={ToggleMuted} className="simon-game__mic-icon _align-content-center">
                                {_muted ? <i className="bi bi-mic-mute-fill" title="unmute"></i> : <i className="bi bi-mic-fill" title="mute"></i>}
                            </h4>
                        </div>
                        {/** Set number of Lives */}
                        <div className="simon-game__lives">
                            <h4 className="simon-game__secondary-heading">Lives</h4>
                            <div className="_flex _justify-content-center">
                                <button onClick={ReduceLive} className="simon-game__lives-btn">
                                    -
                                </button>
                                <div className="col col-live-amount simon-game__lives-wrapper">
                                    <h4 className="lives-h2">{_lives}</h4>
                                </div>
                                <button onClick={AddLive} className="simon-game__lives-btn">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    {/** Game Section */}
                    <div className="simon-game-area">
                        <div className="game-div">
                            <button
                                onClick={(e) => HandleButtonClick(e.nativeEvent)}
                                id="green"
                                className="button green-btn"
                            ></button>
                            <button
                                onClick={(e) => HandleButtonClick(e.nativeEvent)}
                                id="red"
                                className="button red-btn"
                            ></button>
                        </div>
                        <div className="game-div">
                            <button
                                onClick={(e) => HandleButtonClick(e.nativeEvent)}
                                id="yellow"
                                className="button yellow-btn"
                            ></button>
                            <button
                                onClick={(e) => HandleButtonClick(e.nativeEvent)}
                                id="blue"
                                className="button blue-btn"
                            ></button>
                        </div>
                    </div>
                    {/** Simon Advanced Switcher */}
                    <div className="simon-switcher">
                        <h4>Advanced Mode</h4>
                        <label className="rocker">
                            <input type="checkbox" onClick={SwitchAdvancedMode} disabled={_gameActive} />
                            <span className="switch-left">On</span>
                            <span className="switch-right">Off</span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}