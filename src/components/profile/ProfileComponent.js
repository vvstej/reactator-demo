import React from 'react';

// TODO: Delete this in favor of a TodoExample

/**
 * @class
 * @memberOf module:Demo
 * @classdesc ProfileComponent is a simple page for the demo.
 *            Demonstrating the use of context.router to link back to the default page.
 */
export default class ProfileComponent extends React.PureComponent {
    static contextTypes = {
        router: React.PropTypes.object
    }

    mainPage() {
        this.context.router.push({
            pathname: '/',
            query: {},
            state: {}
        });
    }

    backPage() {
        this.context.router.goBack();
    }

    render() {
        return (
            <div>
                <div>
                    <a className='btn btn-primary' onClick={::this.mainPage}>Main Page</a>
                    <a className='btn btn-primary' onClick={::this.backPage}>Back</a>
                </div>
            </div>
        );
    }
}
