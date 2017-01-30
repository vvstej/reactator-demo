import React from 'react';

/**
 * @class
 * @memberOf module:Demo
 * @classdesc AppLayout is a basic layout for the demo adding a div.app around its children.
 */
export default class AppLayout extends React.PureComponent {
    render() {
        return (
            <div className='app'>
                {this.props.children}
            </div>
        );
    }
}
