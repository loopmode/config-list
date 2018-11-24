import React, { PureComponent } from 'react';

import { Button, Icon, Table } from 'semantic-ui-react';

import PropTypes from 'prop-types';

const FIELD_ACTIONS = '$actions';

export default class SelectedItems extends PureComponent {
    static propTypes = {
        //
        editable: PropTypes.bool,
        removeable: PropTypes.bool,
        //
        onRemove: PropTypes.func,
        onEdit: PropTypes.func,
        //
        items: PropTypes.array,
        columns: PropTypes.arrayOf(
            PropTypes.shape({
                field: PropTypes.string,
                label: PropTypes.string
            })
        ),
        //
        getIdentifier: PropTypes.func,
        renderList: PropTypes.func,
        renderColumn: PropTypes.func,
        renderActions: PropTypes.func
    };

    static defaultProps = {
        columns: [{ field: 'name', label: 'Name' }, { field: '$actions', label: 'Actions' }],
        getIdentifier: this.getIdentifier,
        renderList: this.renderList,
        renderColumn: this.renderColumn,
        renderActions: this.renderActions
    };

    render() {
        const {
            items,
            columns,
            editable,
            removeable,
            getIdentifier,
            renderList,
            renderColumn,
            renderActions
        } = this.props;

        if (!items || !columns) {
            return null;
        }

        return renderList({ columns, items, getIdentifier, renderActions, renderColumn, editable, removeable });
    }

    getIdentifier(item) {
        return item.id;
    }

    renderList({ columns, items, getIdentifier, renderActions, renderColumn, editable, removeable }) {
        return (
            <Table>
                <thead>
                    <tr>
                        {columns.map(column => (
                            <th key={`${column.field}--${column.label}`} children={column.label} />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => {
                        const id = getIdentifier(item);
                        return (
                            <tr key={id}>
                                {columns.map(column => {
                                    const key = `${id}--${column.field}`;
                                    if (column.field === FIELD_ACTIONS) {
                                        return <td key={key}>{renderActions({ item, id, editable, removeable })}</td>;
                                    } else {
                                        return <td key={key}>{renderColumn({ column, item, id })}</td>;
                                    }
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    }

    renderColumn({ item, column }) {
        return item[column.field];
    }

    renderActions({ editable, removeable, id, item }) {
        return (
            <div className="action-buttons">
                {editable && (
                    <Button
                        icon
                        size="mini"
                        onClick={() => this.props.onEdit(id, item)}
                        children={<Icon name="setting" />}
                    />
                )}
                {removeable && (
                    <Button
                        icon
                        size="mini"
                        onClick={() => this.props.onRemove(id, item)}
                        children={<Icon name="delete" />}
                    />
                )}
            </div>
        );
    }
}
