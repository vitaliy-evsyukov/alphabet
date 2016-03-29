import React from 'react';
import classnames from 'classnames';

require('./style.css');

var Transporter = React.createClass({
    render () {
        let classNames = classnames({
            'transporter': true
        }, this.props.className);

        return (
            <div className={classNames}>
                {this.props.children}
            </div>
        );
    }
});

export default Transporter;