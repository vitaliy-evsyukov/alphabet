class Character {

    constructor(opt) {
        this.char = opt.char;
        this.charImageURL = opt.charImageURL;
        this.associateImageURL = opt.associateImageURL;
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

};

export default Character;