import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cx from 'classnames';

import bind from '@loopmode/config-list/lib/utils/bind';
import { settingsShape } from '@loopmode/config-list/lib/utils/shapes';
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
        editable: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
        removable: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
        ItemValueRenderer: PropTypes.func,
        settings: settingsShape,
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
        const { item, settings, ItemValueRenderer = ({ item }) => settings.label(item) } = this.props;
        const { columns, modalConfirm, modalEdit } = this.props.parentProps;

        const editable = this.resolveBool(this.props.editable);
        const removable = this.resolveBool(this.props.removable);
        return (
            <Fragment>
                <tr className="item-row">
                    {columns.map(column => {
                        return (
                            <td key={`${settings.key(item)}--${column.field}`} className={`column-${column.field}`}>
                                <ItemValueRenderer {...this.props} />
                            </td>
                        );
                    })}
                    <td className="column-actions">
                        {(editable || removable) && (
                            <div className="action-buttons">
                                <ItemEditButtons
                                    item={this.props.item}
                                    editable={editable}
                                    isEditing={this.props.isEditing}
                                    onEdit={this.props.onEdit}
                                    onEditCancel={this.props.onEditCancel}
                                />
                                <ItemRemoveButtons
                                    item={this.props.item}
                                    removable={removable}
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
    resolveBool(value) {
        if (typeof value === 'function') {
            return value(this.props);
        }
        return value === true;
    }
}
