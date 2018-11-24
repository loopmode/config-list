import PropTypes from 'prop-types';

import React, { PureComponent } from 'react';
import { Modal, Button } from 'semantic-ui-react';

import AsyncState from '../AsyncState';

export default class DeleteModal extends PureComponent {
    static propTypes = {
        onConfirm: PropTypes.func,
        onClose: PropTypes.func,
        onCancel: PropTypes.func,
        title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        confirmText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        cancelText: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
    };
    static defaultProps = {
        title: 'Delete query',
        cancelText: 'Cancel',
        confirmText: 'Delete'
    };
    render() {
        return (
            <Modal open size="small" onClose={this.props.onClose}>
                <Modal.Header>{this.props.title}</Modal.Header>
                <Modal.Content>{this.props.text}</Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.props.onCancel || this.props.onClose}>{this.props.cancelText}</Button>
                    <AsyncState>
                        <Button negative onClick={this.props.onConfirm}>
                            {this.props.confirmText}
                        </Button>
                    </AsyncState>
                </Modal.Actions>
            </Modal>
        );
    }
}
