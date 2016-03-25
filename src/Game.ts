class Game {
    constructor(characters) {
        this._characters = characters;
    }

    getCharacters() {
        return this._characters;
    }

    start() {
        console.log('game start');
    }
};

export default Game;