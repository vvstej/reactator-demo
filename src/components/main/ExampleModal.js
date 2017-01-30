import React from 'react';
import BootstrapModal from 'reactator/components/BootstrapModal';

/**
 * @class
 * @memberOf module:Demo
 * @classdesc ExampleModal is a simple example of a modal in a page using {@link module:Reactator.BootstrapModalMixin} and {@link module:Reactator.BootstrapModal}.
 */
export default class ExampleModal extends React.PureComponent {
    render() {
        return (
            <BootstrapModal ref='modal' handleHideModal={this.props.handleHideModal}>
                <div className='w-100'>
                    <strong>Example Modal</strong>
                    <button type="button" className="close" data-dismiss="modal" dangerouslySetInnerHTML={{__html: '&times'}} />
                </div>
                <div>Some Modal Body, eh?!</div>
                <div>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
            </BootstrapModal>
        );
    }
}
