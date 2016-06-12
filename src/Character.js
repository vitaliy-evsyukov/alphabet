class Character {

    constructor(opt) {
        this.char = opt.char;
        this.charImageURL = opt.charImageURL;
        this.associateImageURL = opt.associateImageURL;
        this.time = opt.time;
    }

    getChar() {
        return this.char;
    }

    getImageUrl() {
        return this.imageUrl;
    }

    getAssociateImageURL() {
        return this.associateImageURL;
    }

    getTime() {
        return this.time;
    }
}

export default Character;