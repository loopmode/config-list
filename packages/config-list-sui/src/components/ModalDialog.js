import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button, Modal } from 'semantic-ui-react';
import AsyncState from './AsyncState';
import bind from 'config-list/lib/utils/bind';

export default class ModalDialog extends PureComponent {
    static propTypes = {
        item: PropTypes.object,
        title: PropTypes.node,
        cancelProps: PropTypes.object,
        confirmProps: PropTypes.object,
        children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
        onConfirm: PropTypes.func,
        onCancel: PropTypes.func,
        withChildData: PropTypes.bool
    };

    getChildData = null;
    registerChildData(getChildData) {
        this.getChildData = getChildData;
    }

    constructor(props, context) {
        super(props, context);
        bind(this, /register/, /handle/);
    }

    render() {
        const {
            // props to omit in spread rest
            withChildData,
            item,
            onConfirm,
            onCancel,
            // actually used props
            title,
            children,
            cancelProps,
            confirmProps,
            // spread rest for semantic ui modal
            ...modalProps
        } = this.props;
        return (
            <Modal {...{ open: true, ...modalProps }}>
                <Modal.Header>{title}</Modal.Header>
                <Modal.Content>
                    <Modal.Description>{this.renderContent(children)}</Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <AsyncState>
                        <Button children={'Cancel'} onClick={this.handleCancel} {...cancelProps} />
                    </AsyncState>
                    <AsyncState>
                        <Button children={'Confirm'} onClick={this.handleConfirm} {...confirmProps} />
                    </AsyncState>
                </Modal.Actions>
            </Modal>
        );
    }
    renderContent(children) {
        const childProps = {};
        if (this.props.withChildData) {
            childProps.modalParent = {
                registerChildData: this.registerChildData
            };
        }

        if (typeof children === 'function') {
            return children(childProps);
        } else {
            return React.Children.map(children, child => React.cloneElement(child, childProps));
        }
    }
    getParams(event) {
        const { item, withChildData } = this.props;
        const params = { event, item };

        if (withChildData) {
            if (this.getChildData) {
                Object.assign(params, this.getChildData());
            } else {
                console.warn(
                    'Expected a registered child but found none.',
                    'The child of this modal dialog should call this.props.parentModal.registerChildData(this, this.getData).'
                );
            }
        }

        return params;
    }
    handleCancel(event) {
        this.props.onCancel(this.getParams(event));
    }
    handleConfirm(event) {
        this.props.onConfirm(this.getParams(event));
    }
}
