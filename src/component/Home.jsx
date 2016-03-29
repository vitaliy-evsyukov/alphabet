// main.js
import * as React from 'react';
import Transporter from './transporter/Transporter.jsx';
import Character from './character/Character.jsx';

require('./home.css');

//var alphabet = require( '../alphabet.json');
//var alphabet = [];
//for (var i = 1072; i <= 1103; i++) {
//    alphabet.push( String.fromCharCode(i) );
//}

export default React.createClass({

    getDefaultProps() {
        return {
            alphabet: []
        }
    },

    componentDidMount() {
        var self = this;
        var game = this.getGame();
        document.body.addEventListener('keypress', function (event) {
            var keyCode = event.keyCode || event.which;
            var letter = String.fromCharCode(keyCode);
            if(game.pressChar(letter)){
                console.log('letter', letter);
                self.forceUpdate();
            }
        });
    },

    getGame() {
        return this.props.game;
    },

    getAlphabet() {
        return this.props.game.getCharacters();
    },

    getNextStack() {
        return this.getGame().getStackNext().slice(0, 3);
    },

    getPrevStack() {
        let stack = this.getGame().getStackPrev().slice(-3);
        return stack;
    },

    render() {
        return (
            <div className="container">
                <div className="box">
                    <Transporter className="justify-end">
                        {
                            this.getPrevStack().map(function(item, index) {
                                return <Character key={`p_${index}_${item.getChar()}`} char={item.char} />;
                            })
                        }
                    </Transporter>

                    <div>
                        <Character char={this.getGame().getCurrentChar().getChar()} isActive={true}/>
                        <div>
                            <img height="150" width="150" src={this.getGame().getCurrentChar().getAssociateImageURL()} />
                        </div>
                    </div>

                    <Transporter className="justify-start">
                        {
                            this.getNextStack().map(function(item, index) {
                                return <Character char={item.char} />;
                            })
                        }
                    </Transporter>
                </div>
            </div>
        );
    }
});