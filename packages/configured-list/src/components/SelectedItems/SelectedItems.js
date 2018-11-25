import React, { PureComponent } from 'react';

import { Button, Icon, Table } from 'semantic-ui-react';

import PropTypes from 'prop-types';

import getValue from '../../utils/getValue';
import bindHandlers from '../../utils/bindHandlers';

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
        itemIdentifier: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        renderColumnValue: PropTypes.func,
        renderActionButtons: PropTypes.func
    };

    static defaultProps = {
        columns: [{ field: 'label', label: 'Name' }, { field: '$actions', label: 'Actions' }]
    };

    constructor(props, context) {
        super(props, context);
        bindHandlers(this, 'renderActionButtons');
    }

    render() {
        const {
            items,
            columns,
            editable,
            removeable,
            renderColumnValue = this.renderColumnValue,
            renderActionButtons = this.renderActionButtons,
            itemIdentifier
        } = this.props;

        if (!items || !columns) {
            return null;
        }

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
                        const id = getValue(item, itemIdentifier);
                        return (
                            <tr key={id}>
                                {columns.map(column => {
                                    const key = `${id}--${column.field}`;
                                    if (column.field === FIELD_ACTIONS) {
                                        return (
                                            <td key={key}>{renderActionButtons({ item, id, editable, removeable })}</td>
                                        );
                                    } else {
                                        return <td key={key}>{renderColumnValue({ column, item, id })}</td>;
                                    }
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        );
    }

    renderColumnValue({ item, column }) {
        return getValue(item, column.field);
    }

    renderActionButtons({ editable, removeable, id, item }) {
        return (
            <div className="action-buttons">
                {editable && (
                    <Button
                        icon
                        size="mini"
                        onClick={() => this.props.onEdit({ id, item })}
                        children={<Icon name="setting" />}
                    />
                )}
                {removeable && (
                    <Button
                        icon
                        size="mini"
                        onClick={() => this.props.onRemove({ id, item })}
                        children={<Icon name="delete" />}
                    />
                )}
            </div>
        );
    }
}
