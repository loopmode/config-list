import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Icon } from 'semantic-ui-react';

import bind from 'config-list/lib/utils/bind';

export default class TableItemRenderer extends PureComponent {
    static propTypes = {
        item: PropTypes.object,
        editor: PropTypes.element,
        isEditing: PropTypes.bool,
        isRemoving: PropTypes.bool,
        onEdit: PropTypes.func,
        onEditCancel: PropTypes.func,
        onRemove: PropTypes.func,
        onRemoveCancel: PropTypes.func,
        onRemoveConfirm: PropTypes.func,
        parentProps: PropTypes.shape({
            columns: PropTypes.array,
            modalConfirm: PropTypes.bool
        })
    };
    constructor(props, context) {
        super(props, context);
        bind(this);
    }
    render() {
        const { item } = this.props;
        if (!item.editable) {
            return null;
        }
        return this.renderEditButton();
    }

    renderEditButton() {
        const { isEditing } = this.props;
        return (
            <Button
                className="btn-edit"
                icon
                size="mini"
                active={isEditing}
                children={<Icon name="setting" />}
                onClick={this.handleEditClick}
            />
        );
    }
    handleEditClick(event) {
        const { isEditing, item } = this.props;
        if (isEditing) {
            this.props.onEditCancel({ item, event });
        } else {
            this.props.onEdit({ item, event });
        }
    }
}
