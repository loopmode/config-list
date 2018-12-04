import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import bind from '@loopmode/config-list/lib/utils/bind';
import { Button, Icon } from 'semantic-ui-react';

import ModalDialog from './ModalDialog';

/* eslint-disable react/prop-types */

const RemoveButton = ({ onClick }) => (
    <Button className="btn-remove" icon size="mini" onClick={onClick} children={<Icon name={'minus circle'} />} />
);

const CancelButton = ({ onClick }) => (
    <Button className="btn-remove-cancel" icon size="mini" children={<Icon name={'cancel'} />} onClick={onClick} />
);

const ConfirmButton = ({ onClick }) => (
    <Button
        className="btn-remove-confirm"
        icon
        size="mini"
        color={'red'}
        onClick={onClick}
        children={<Icon name={'check'} />}
    />
);

const ConfirmModal = ({
    onConfirm,
    onCancel,
    title = 'Remove item',
    content = 'Do you really want to remove this item?',
    ...props
}) => <ModalDialog title={title} children={content} onConfirm={onConfirm} onCancel={onCancel} {...props} />;

/* eslint-enable react/prop-types */

export default class ItemRemoveButtons extends PureComponent {
    static propTypes = {
        item: PropTypes.object,
        removable: PropTypes.bool,
        isRemoving: PropTypes.bool,
        onRemove: PropTypes.func,
        onRemoveCancel: PropTypes.func,
        onRemoveConfirm: PropTypes.func,
        modalConfirm: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
    };
    constructor(props, context) {
        super(props, context);
        bind(this);
    }
    render() {
        const { removable, isRemoving, modalConfirm } = this.props;

        if (!removable) {
            return null;
        }

        if (!isRemoving) {
            return <RemoveButton onClick={this.handleRemoveClick} />;
        }

        if (modalConfirm) {
            return (
                <React.Fragment>
                    <RemoveButton onClick={this.handleRemoveClick} />
                    <ConfirmModal
                        item={this.props.item}
                        onConfirm={this.handleConfirmClick}
                        onCancel={this.handleCancelClick}
                        {...modalConfirm}
                    />
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
                <CancelButton onClick={this.handleCancelClick} />
                <ConfirmButton onClick={this.handleConfirmClick} />
            </React.Fragment>
        );
    }

    handleRemoveClick(event) {
        const { item } = this.props;
        this.props.onRemove({ item, event });
    }

    handleCancelClick(event) {
        const { item } = this.props;
        this.props.onRemoveCancel({ item, event });
    }
    handleConfirmClick(event) {
        const { item } = this.props;
        this.props.onRemoveConfirm({ item, event });
    }
}
