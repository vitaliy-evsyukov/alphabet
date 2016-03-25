'use strict';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Game from './src/Game';
import Home from './src/component/Home';

var alphabet = require('./src/alphabet.json');
var game = new Game(alphabet.characters);

ReactDOM.render(
    React.createElement(Home, {game: game}),
    document.getElementById('app')
);