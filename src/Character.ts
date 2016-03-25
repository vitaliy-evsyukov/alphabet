class Character {

    constructor(char) {
        this.char = char.char;
        this.imageUrl = char.charImage;
    }

    getChar() {
        return this.char;
    }

    getImageUrl() {
        return this.imageUrl;
    }

};

export default Character;