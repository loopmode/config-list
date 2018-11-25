import PropTypes from 'prop-types';

import React, { PureComponent } from 'react';
import { Modal, Button } from 'semantic-ui-react';

import AsyncState from '../AsyncState';

import getValue from '../../utils/getValue';
import getDisplayValue, { displayValueShape } from '../../utils/getDisplayValue';
import bind from '../../utils/bind';

export default class DeleteModal extends PureComponent {
    static propTypes = {
        item: PropTypes.object,
        itemID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        onConfirm: PropTypes.func,
        onCancel: PropTypes.func,
        titleText: displayValueShape,
        contentText: displayValueShape,
        confirmText: displayValueShape,
        cancelText: displayValueShape,
        itemLabel: PropTypes.func
    };
    static defaultProps = {
        titleText: 'Remove item',
        contentText: ({ item }) => `Do you want to remove "${getValue(item, 'label') || getValue(item, 'name')}"?`,
        cancelText: 'Cancel',
        confirmText: 'Remove'
    };
    constructor(props, context) {
        super(props, context);
        bind(this);
    }
    render() {
        const titleText = getDisplayValue(this.props.titleText, this.props);
        const contentText = getDisplayValue(this.props.contentText, this.props);

        return (
            <Modal open size="tiny" onClose={this.props.onCancel}>
                {titleText && <Modal.Header>{titleText}</Modal.Header>}
                {contentText && <Modal.Content>{contentText}</Modal.Content>}
                <Modal.Actions>
                    <Button onClick={this.handleCancel}>{getDisplayValue(this.props.cancelText, this.props)}</Button>
                    <AsyncState>
                        <Button negative onClick={this.handleConfirm}>
                            {getDisplayValue(this.props.confirmText, this.props)}
                        </Button>
                    </AsyncState>
                </Modal.Actions>
            </Modal>
        );
    }
    handleCancel() {
        return this.props.onCancel({
            item: this.props.item,
            id: this.props.itemID
        });
    }
    handleConfirm() {
        return this.props.onConfirm({
            item: this.props.item,
            id: this.props.itemID
        });
    }
}
