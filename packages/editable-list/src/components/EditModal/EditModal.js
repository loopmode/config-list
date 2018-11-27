import PropTypes from 'prop-types';

import React, { PureComponent } from 'react';
import { Modal, Button } from 'semantic-ui-react';

import AsyncState from '../AsyncState';

// import getValue from '../../utils/getValue';
import getDisplayValue, { displayValueShape } from '../../utils/getDisplayValue';
import bind from '../../utils/bind';

export default class EditModal extends PureComponent {
    static propTypes = {
        editor: PropTypes.func,
        size: PropTypes.string,
        item: PropTypes.object,
        onConfirm: PropTypes.func,
        onCancel: PropTypes.func,
        titleText: displayValueShape,
        contentText: displayValueShape,
        confirmText: displayValueShape,
        cancelText: displayValueShape,
        itemLabel: PropTypes.func
    };
    static defaultProps = {
        titleText: 'Edit item',
        contentText: null,
        cancelText: 'Cancel',
        confirmText: 'Save',
        size: 'mini'
    };
    state = {
        data: null
    };
    constructor(props, context) {
        super(props, context);
        this.state.data = props.item;
        bind(this);
    }
    render() {
        const titleText = getDisplayValue(this.props.titleText, this.props);
        const contentText = getDisplayValue(this.props.contentText, this.props);
        const { editor: Editor } = this.props;
        return (
            <Modal open size={this.props.size} onClose={this.props.onCancel}>
                {titleText && <Modal.Header>{titleText}</Modal.Header>}
                <Modal.Content>
                    {contentText && <p>{contentText}</p>}
                    <Editor item={this.state.data} onChange={this.handleChange} onSubmit={this.handleConfirm} />
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={this.handleCancel}>{getDisplayValue(this.props.cancelText, this.props)}</Button>
                    <AsyncState>
                        <Button positive onClick={this.handleConfirm}>
                            {getDisplayValue(this.props.confirmText, this.props)}
                        </Button>
                    </AsyncState>
                </Modal.Actions>
            </Modal>
        );
    }
    handleChange(change) {
        this.setState({
            data: {
                ...this.state.data,
                ...change
            }
        });
    }
    handleCancel() {
        return this.props.onCancel({
            item: this.props.item,
            data: this.state.data
        });
    }
    handleConfirm() {
        return this.props.onConfirm({
            item: this.props.item,
            data: this.state.data
        });
    }
}
