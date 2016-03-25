// main.js
import * as React from 'react';
import Transporter from './transporter/Transporter';
import Character from './character/Character';

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
        document.body.addEventListener('keypress', function (event) {
            var keyCode = event.keyCode || event.which;
            var letter = String.fromCharCode(keyCode);

            var alphabet = self.getAlphabet();

            alphabet.forEach(function (item, index) {
                if(item.char === letter && index === 0){
                    alphabet.splice(index, 1);
                }
            });

            self.setState({alphabet: alphabet});
        });
    },

    getAlphabet() {
        return this.props.game.getCharacters();
    },

    render() {
        return (
            <div>
                <h1>It work</h1>
                <Transporter>
                    {
                        this.getAlphabet().map(function(item, index) {
                            return <Character char={item.char} isActive={index == 0} />;
                        })
                    }
                </Transporter>
            </div>
        );
    }
});