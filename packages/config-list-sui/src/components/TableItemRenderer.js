import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';

import bind from 'config-list/lib/utils/bind';
import ItemEditButtons from './ItemEditButtons';
import ItemRemoveButtons from './ItemRemoveButtons';
import ModalDialog from './ModalDialog';

const EditorRow = styled.tr`
    td {
        padding-top: 0 !important;
        border-top: 0 !important;
    }
`;
const Fragment = React.Fragment || 'div';

export default class TableItemRenderer extends PureComponent {
    static propTypes = {
        item: PropTypes.object,
        editor: PropTypes.element,
        isEditing: PropTypes.bool,
        isRemoving: PropTypes.bool,
        onEdit: PropTypes.func,
        onEditCancel: PropTypes.func,
        onEditConfirm: PropTypes.func,
        onRemove: PropTypes.func,
        onRemoveCancel: PropTypes.func,
        onRemoveConfirm: PropTypes.func,
        parentProps: PropTypes.shape({
            columns: PropTypes.array,
            modalConfirm: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
            modalEdit: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
        })
    };
    static defaultProps = {
        editor: (
            <div>
                No <code>ItemEditor</code> provided
            </div>
        )
    };
    constructor(props, context) {
        super(props, context);
        bind(this);
    }
    render() {
        const { item } = this.props;
        const { columns, modalConfirm, modalEdit } = this.props.parentProps;

        return (
            <Fragment>
                <tr className="item-row">
                    {columns.map(column => {
                        return (
                            <td
                                key={`${item.key}--${column.field}`}
                                className={`column-${column.field}`}
                                children={item.label}
                            />
                        );
                    })}
                    <td className="column-actions">
                        {(item.editable || item.removable) && (
                            <div className="action-buttons">
                                <ItemEditButtons
                                    item={this.props.item}
                                    isEditing={this.props.isEditing}
                                    onEdit={this.props.onEdit}
                                    onEditCancel={this.props.onEditCancel}
                                />
                                <ItemRemoveButtons
                                    item={this.props.item}
                                    isRemoving={this.props.isRemoving}
                                    onRemove={this.props.onRemove}
                                    onRemoveCancel={this.props.onRemoveCancel}
                                    onRemoveConfirm={this.props.onRemoveConfirm}
                                    modalConfirm={modalConfirm}
                                />
                            </div>
                        )}
                    </td>
                </tr>

                {this.props.isEditing && (
                    <EditorRow className={cx('editor-row', { hidden: modalEdit })}>
                        <td colSpan={columns.length + 1}>
                            {modalEdit ? (
                                <ModalDialog
                                    withChildData
                                    children={this.props.editor}
                                    item={this.props.item}
                                    title={modalEdit.title || 'Edit item'}
                                    onConfirm={this.props.onEditConfirm}
                                    onCancel={this.props.onEditCancel}
                                    {...modalEdit}
                                />
                            ) : (
                                this.props.editor
                            )}
                        </td>
                    </EditorRow>
                )}
            </Fragment>
        );
    }
}
