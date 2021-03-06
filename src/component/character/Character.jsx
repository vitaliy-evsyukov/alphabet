import React from 'react';
import classnames from 'classnames';
require('./style.css');

var Character = React.createClass({
    render () {
        return (
            <div className={classnames({'character': true, 'active': this.props.isActive })}>
                <span>{this.props.char.toUpperCase()}</span>
            </div>
        );
    }
});

export default Character;