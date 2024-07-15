import $ from "jquery";
import './css/simon-game.css'
import wrongSound from './sounds/wrong.mp3'
import blueSound from "./sounds/blue.mp3";
import greenSound from "./sounds/green.mp3";
import redSound from "./sounds/red.mp3";
import yellowSound from "./sounds/yellow.mp3";

//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//*//
//* GAME LOGIC *// 

// Variables
var _level: number = 0;
var _buttonColors: string[] = ["green", "red", "yellow", "blue"];
var _gamePattern: string[] = [];
var _userPattern: string[] = [];
var _lives: number = 0;
var _mutedGame: boolean = true;
var _rotatingButtons: boolean = false;
SwitchAdvancedMode();
const GameOverSound = new Audio(wrongSound);
const BlueButtonSound = new Audio(blueSound);
const GreenButtonSound = new Audio(greenSound);
const RedButtonSound = new Audio(redSound);
const YellowButtonSound = new Audio(yellowSound);


function GameStart(): void {
    if (_level === 0) {
        setTimeout(function () {
            NextSequence();
        }, 100);
    }
}

function NextSequence(): void {
    // Update _level
    _level++;
    let element = document.getElementById("simon-h2");

    if (element != null) {
        element.textContent = "_level " + _level; 
    }

    // Choose random button
    let randomColor = _buttonColors[Math.floor(Math.random() * 4)];
    _gamePattern.push(randomColor);
    ButtonShowAnimation(randomColor);
    PlaySound(randomColor);
}

// User clicks on a button
function HandleButtonClick(e: MouseEvent): void {
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

function CheckPattern(i: number): void {
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

            $("._lives-h2").text("0");
            $(".simon-game-area").css("transform", "rotate(0deg)");
        } else {
            // Reduce Lives
            _lives--;
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

// Rotate Buttons
function RotateButtons() {
    if (_rotatingButtons === true && _level > 1) {
        var x = 90 * (_level - 1);
        $(".simon-game-area").css("transform", "rotate(" + x + "deg)");
    }
}

// Animation when randomly selected Button is shown to the user
function ButtonShowAnimation(buttonId: string): any {
    $("#" + buttonId)
        .fadeOut(100)
        .fadeIn(100);
}

// Animation when User clicks on a Button
function ButtonPressAnimation(buttonId: string): any {
    $("#" + buttonId).addClass("pressed");
    setTimeout(function () {
        $("#" + buttonId).removeClass("pressed");
    }, 100);
}

function PlaySound(item: string): void {
    if (_mutedGame)
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

// Set Amout of Lives
function AddLive() {
    if (_lives < 9 && _level === 0) {
        _lives++;
        $("._lives-h2").text(_lives);
    }
}

function ReduceLive() {
    if (_lives > 0 && _level === 0) {
        _lives--;
        $("._lives-h2").text(_lives);
    }
}

function SwitchAdvancedMode() {
    if (document.getElementsByClassName("checkbox").checked === false) {
        document.getElementsByClassName("checkbox").checked = true;
        _rotatingButtons = true;
    } else {
        document.getElementsByClassName("checkbox").checked = false;
        _rotatingButtons = false;
    }
}


function SimonGame() {
    return (
        <>
            <div className="simon-game">
                {/** Heading Section */}
                <div className="simon-head">
                    <h1>Retro Simon Game</h1>
                    <h2 onClick={GameStart} className="simon-h2" id="simon-h2">
                        Click Here to Start the Game.
                    </h2>
                </div>
                <div className="simon-grid">
                    {/** Set number of Lives */}

                    <div className="simon-_lives">
                        <div className="col col-subtract-live">
                            <h3>Lives</h3>
                            <button onClick={ReduceLive} className="plus-minus-btn">
                                -
                            </button>
                        </div>
                        <div className="col col-live-amount">
                            <h2 className="_lives-h2">{_lives}</h2>
                        </div>
                        <div className="col col-add-live">
                            <button onClick={AddLive} className="plus-minus-btn">
                                +
                            </button>
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
                            <input type="checkbox" onClick={SwitchAdvancedMode} />
                            <span className="switch-left">On</span>
                            <span className="switch-right">Off</span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SimonGame;