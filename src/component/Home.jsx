// main.js
import * as React from 'react';
import Transporter from './transporter/Transporter.jsx';
import Character from './character/Character.jsx';
import * as Game from '../Game';

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

    getInitialState() {
        return {
            gameState: 'ready',
            step: 0
        }
    },

    componentDidMount() {
        let game = this.getGame();
        document.body.addEventListener('keypress', (event) => {
            let keyCode = event.keyCode || event.which;

            // Запускаем игру по пробелу
            if (game.getState() === Game.STATE_READY) {
                // 32 == space
                if (keyCode === 32) {
                    this.startGame();
                }

                return false;
            }

            let letter = String.fromCharCode(keyCode);
            if(game.pressChar(letter)){
                this.nextStep();
            }
        });
    },

    startGame() {
        this.getGame().start();
        this.setState({gameState: 'progress'});
    },

    nextStep() {
        this.setState(function (prevState) {
            return {step: prevState.step++};
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
        return this.getGame().getStackPrev().slice(-3);
    },

    render() {
        return (
            <div className="container">
                {this.getGame().getState() === 1 &&
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
                            {this.getNextStack().map(function(item, index) {
                                    return <Character key={index} char={item.char} />;
                            })}
                        </Transporter>
                    </div>
                }
                {this.getGame().getState() === Game.STATE_READY &&
                    <div className="box">
                        <div className="btn-start" onClick={this.startGame}></div>
                    </div>
                }
            </div>
        );
    }
});