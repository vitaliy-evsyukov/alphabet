import Character from './Character.js';

class Game {

    constructor(characters) {
        this._characters = characters.map((item) => {
            if (item instanceof Character) {
                return item;
            }

            return new Character(item);
        });

        this._currentCharIndex = 0;
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
        var currentChar = this.getCurrentChar();

        console.log('currentChar', currentChar);
        if (currentChar.getChar() === char) {
            this._setCurrentCharIndex( (1 + this._getCurrentCharIndex()) );
            return true;
        }

        return false;
    }

}

export default Game;