import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DataItemShape } from '../../utils/shapes';
import Fragment from './Fragment';
import cx from 'classnames';
import styled from 'styled-components';

const StyledListItem = styled.li`
    display: flex;
    flex-wrap: wrap;
    .item-label {
        flex: 1;
    }
    > button {
        &.active {
            color: deepskyblue;
        }
        &.btn-remove-confirm {
            color: red;
        }
        & + button {
            margin-left: 5px;
        }
        // target the editor without making assumptions about its tag or class
        & + *:last-child:not(button) {
            margin-top: 5px;
            flex-basis: 100%;
        }
    }
`;
export default class ItemRenderer extends PureComponent {
    static propTypes = {
        item: DataItemShape,
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
            onEdit,
            onEditCancel,
            onRemove,
            onRemoveCancel,
            onRemoveConfirm,
            isRemoving,
            isEditing,
            editor
        } = this.props;
        return (
            <StyledListItem>
                <span className="item-label">{item.label}</span>
                {item.editable && (
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
                {item.removable && !isRemoving && (
                    <button className="btn-remove" onClick={event => onRemove({ item, event })} children="♻" />
                )}
                {item.removable && isRemoving && (
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
            </StyledListItem>
        );
    }
}
