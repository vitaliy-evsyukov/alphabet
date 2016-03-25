import * as React from 'react';
require('./style.css');

var Transporter = React.createClass({
    render () {
        return (
            <div className="transporter">
                {this.props.children}
            </div>
        );
    }
});

export default Transporter;