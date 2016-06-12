import Character from './Character.js';

window.audio = new Audio();
audio.src = './alphabet.mp3';

export const STATE_READY = 0;
export const STATE_PROGRESS = 1;

class Game {

    constructor(characters) {
        this._characters = characters.map((item) => {
            if (item instanceof Character) {
                return item;
            }

            return new Character(item);
        });

        this._currentCharIndex = 0;
        this.__timeout = null;
        this._state = STATE_READY;
    }

    getCharacters() {
        return this._characters;
    }

    setCharacters(characters) {
        return this._characters = characters.slice();
    }

    getCurrentChar() {
        return this._characters[ this._currentCharIndex ];
    }

    getStackNext() {
        return this._characters.slice(this._currentCharIndex + 1);
    }

    getStackPrev() {
        return this._characters.slice(0, this._currentCharIndex);
    }

    _getCurrentCharIndex() {
        return this._currentCharIndex;
    }

    _setCurrentCharIndex(value){
        this._currentCharIndex = value;
    }

    pressChar(char) {
        if (this.getState() === STATE_READY) {
            return false;
        }

        let currentChar = this.getCurrentChar();

        if (currentChar.getChar() === char) {
            this._setCurrentCharIndex( (1 + this._getCurrentCharIndex()) );
            this.sound();
            return true;
        }

        return false;
    }

    sound() {
        clearTimeout(this.__timeout);
        audio.pause();

        let timeRange = this.getCurrentChar().getTime();
        if (!timeRange) {
            return;
        }

        console.log('timeRange', timeRange);

        audio.currentTime = timeRange[0] / 1000;
        audio.play().then(() => {
            this.__timeout = setTimeout(() => {
                audio.pause();
            }, (timeRange[1] - timeRange[0]) );
        }, () => {
            this.__timeout = setTimeout(() => {
                audio.pause();
            }, (timeRange[1] - timeRange[0]) );
        });
    }

    getState() {
        return this._state;
    }

    start() {
        this._state = STATE_PROGRESS;
        this.sound();
    }

}

export default Game;