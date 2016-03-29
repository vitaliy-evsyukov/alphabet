'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Game from './src/Game';
import Home from './src/component/Home.jsx';

var alphabet = require('./src/alphabet.json').characters;
var game = new Game(alphabet);

ReactDOM.render(
    React.createElement( Home, {game: game} ),
    document.getElementById('app')
);