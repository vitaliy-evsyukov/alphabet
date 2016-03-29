jest.unmock('../src/Character.js');
jest.unmock('../src/Game.js');
jest.unmock('./characters.json');

import Character from '../src/Character.js';
import Game from '../src/Game.js';

var characters = require('./characters.json').characters;

describe('Game', () => {
    it('Character', () => {
        var character = new Character({
            "char": "f",
            "charImageURL": "",
            "associateImageURL": ""
        });

        expect(character.getChar()).toBe('f');
    });

    it('Game', () => {
        var chars = characters.map((item) => {
            return new Character(item);
        }).slice(0, 3);

        var game = new Game();

        game.setCharacters( chars );

        expect( game.getCharacters() ).toEqual( chars , 'chars in game not equal passed chars');
        expect( game.getCurrentChar() ).toEqual( chars[0] , 'current char not equal first char in passed');

        expect( game.getStackNext() ).toEqual( chars.slice(1), 'next chars to be array without current char');
        expect( game.getStackPrev() ).toEqual( [] , 'prev stack to be equal empty array');

        expect( game.pressChar('z') ).toBeFalsy('current char not to be equal "z"');
        expect( game.pressChar('а') ).toBeTruthy('current char it should be "а" (rus)');

    });
});

