import React from 'react';
import {Link} from 'react-router';
import ExampleModal from './ExampleModal.js';
import ResponsiveContainer from 'reactator/containers/ResopnsiveContainer';

/**
 * @class
 * @memberOf module:Demo
 * @classdesc MainComponent is a simple default page for the demo.
 *            Demonstrate use of context.router and {@link module:Reactator.ResponsiveComponent}
 */
export default class MainComponent extends React.PureComponent {
    static contextTypes = {
        router: React.PropTypes.object
    }

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    profilePageNoPrevent() {
        this.context.router.push({
            pathname: '/profile',
            query: {},
            state: {}
        });
    }

    profilePage(event) {
        event.preventDefault();
        this.profilePageNoPrevent();
    }

    showModal() {
        this.setState({
            modal: true
        });
    }

    handleHideModal() {
        this.setState({
            modal: false
        });
    }

    render() {

        const xs1 = (<div>XS 1</div>);
        const xs2 = (<div>XS 2</div>);
        const xl = (<h1>XL Yay!!</h1>);
        const md = (<h3>MD</h3>);
        const md0 = (<h3>Armin was here</h3>);

        return (
            <div>
                <ResponsiveContainer MD={md0} />
                <ResponsiveContainer XS={xs1} XL={xl} />
                <ResponsiveContainer XS={xs2} MD={md} />
                <br />
                <Link className="btn btn-primary" to="/profile">Link to Profile</Link>
                <a className='btn btn-primary' href="#" onClick={::this.showModal} role="button">Show Modal</a>
                {this.state.modal ? <ExampleModal handleHideModal={::this.handleHideModal} /> : null}
            </div>
        );
    }
}
