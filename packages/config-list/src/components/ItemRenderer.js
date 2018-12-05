import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import Fragment from './Fragment';
import { settingsShape } from '../shapes';

export default class ItemRenderer extends PureComponent {
    static propTypes = {
        item: PropTypes.object,
        settings: settingsShape,
        editable: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
        removable: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
        ItemValueRenderer: PropTypes.func,
        isRemoving: PropTypes.bool,
        isEditing: PropTypes.bool,
        onEdit: PropTypes.func,
        onEditCancel: PropTypes.func,
        onRemove: PropTypes.func,
        onRemoveCancel: PropTypes.func,
        onRemoveConfirm: PropTypes.func,
        editor: PropTypes.element
    };
    render() {
        const {
            item,
            settings,
            onEdit,
            onEditCancel,
            onRemove,
            onRemoveCancel,
            onRemoveConfirm,
            isRemoving,
            isEditing,
            editor,
            ItemValueRenderer = ({ item }) => settings.label(item) || null
        } = this.props;

        const editable = this.resolveBool(this.props.editable);
        const removable = this.resolveBool(this.props.removable);
        return (
            <li>
                <span className="item-label">
                    <ItemValueRenderer {...this.props} />
                </span>
                {editable && (
                    <button
                        className={cx('btn-edit', { active: isEditing })}
                        onClick={event => {
                            if (isEditing) {
                                onEditCancel({ item, event });
                            } else {
                                onEdit({ item, event });
                            }
                        }}
                        children="✎"
                    />
                )}
                {removable && !isRemoving && (
                    <button className="btn-remove" onClick={event => onRemove({ item, event })} children="♻" />
                )}
                {removable && isRemoving && (
                    <Fragment>
                        <button
                            className="btn-remove-cancel"
                            onClick={event => onRemoveCancel({ item, event })}
                            children="✕"
                        />
                        <button
                            className="btn-remove-confirm"
                            onClick={event => onRemoveConfirm({ item, event })}
                            children="✔"
                        />
                    </Fragment>
                )}
                {editor}
            </li>
        );
    }
    resolveBool(value) {
        if (typeof value === 'function') {
            return value(this.props);
        }
        return value === true;
    }
}
