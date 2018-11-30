import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import memoize from 'memoize-one';

import { SupportedItemsShape } from '../utils/shapes';
import bind from '../utils/bind';
import DefaultSelectRenderer from './SelectRenderer';
import DefaultListRenderer from './ListRenderer';
import DefaultItemRenderer from './ItemRenderer';

import DataConverter from './DataConverter';
export default class ConfigList extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        availableItems: SupportedItemsShape,
        configuredItems: SupportedItemsShape,
        SelectRenderer: PropTypes.func,
        ListRenderer: PropTypes.func,
        ItemRenderer: PropTypes.func,
        ItemValueRenderer: PropTypes.func,
        ItemEditor: PropTypes.func,
        //
        editable: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
        removable: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
        //
        onAddItem: PropTypes.func,
        onEditItem: PropTypes.func,
        onRemoveItem: PropTypes.func,
        //
        confirmRemove: PropTypes.bool
    };
    static defaultProps = {
        SelectRenderer: DefaultSelectRenderer,
        ListRenderer: DefaultListRenderer,
        ItemRenderer: DefaultItemRenderer
    };
    state = {
        removing: {},
        editing: {}
    };

    convertItems = memoize(items => DataConverter.convertItems(items));

    constructor(props, context) {
        super(props, context);
        bind(this);
    }
    render() {
        const {
            className,
            editable,
            removable,
            configuredItems,
            SelectRenderer,
            ListRenderer,
            ItemRenderer,
            ItemValueRenderer,
            onAddItem
        } = this.props;

        const hasConfiguredItems = configuredItems && configuredItems.length > 0;

        const availableItems = this.convertItems(this.props.availableItems);

        return (
            <div className={cx('ConfigList', className)}>
                <SelectRenderer
                    availableItems={availableItems}
                    configuredItems={configuredItems}
                    onAddItem={onAddItem}
                    parentProps={this.props}
                />
                {hasConfiguredItems && (
                    <ListRenderer
                        availableItems={availableItems}
                        configuredItems={configuredItems}
                        parentProps={this.props}
                    >
                        {configuredItems.map(item => {
                            const editorData = this.state.editing[item.key || item.id];
                            const isRemoving = !!this.state.removing[item.key || item.id];
                            const isEditing = !!editorData;
                            return (
                                <ItemRenderer
                                    editable={editable}
                                    removable={removable}
                                    ItemValueRenderer={ItemValueRenderer}
                                    key={item.key || item.id}
                                    item={item}
                                    parentProps={this.props}
                                    // removing
                                    isRemoving={isRemoving}
                                    onRemove={this.handleRemove}
                                    onRemoveConfirm={this.handleRemoveConfirm}
                                    onRemoveCancel={this.handleRemoveCancel}
                                    // editing
                                    isEditing={isEditing}
                                    onEdit={this.handleEdit}
                                    onEditConfirm={this.handleEditConfirm}
                                    onEditCancel={this.handleEditCancel}
                                    editor={this.renderItemEditor(item)}
                                />
                            );
                        })}
                    </ListRenderer>
                )}
            </div>
        );
    }

    renderItemEditor(item) {
        const { ItemEditor } = this.props;
        const editorData = this.state.editing[item.key || item.id];

        if (!editorData) {
            return null;
        }

        let editorContent = null;
        if (ItemEditor) {
            editorContent = (
                <ItemEditor
                    key={item.key || item.id}
                    item={item}
                    parentProps={this.props}
                    onEditConfirm={this.handleEditConfirm}
                    onEditCancel={this.handleEditCancel}
                />
            );
        } else {
            editorContent = (
                <div>
                    No <code>ItemEditor</code> provided
                </div>
            );
        }

        return editorContent;
    }

    // -------------------------------------------------
    //
    //          EDIT ITEM
    //
    // -------------------------------------------------

    handleEdit({ item }) {
        this.setState({ editing: { ...this.state.editing, [item.key || item.id]: true } });
    }

    handleEditCancel({ item }) {
        this.setState({ editing: { ...this.state.editing, [item.key || item.id]: false } });
    }

    handleEditConfirm({ item, data }) {
        this.setState({ editing: { ...this.state.editing, [item.key || item.id]: false } });
        if (!this.props.onEditItem) {
            return;
        }
        this.props.onEditItem({ item, data, event });
    }

    // -------------------------------------------------
    //
    //          REMOVE ITEM
    //
    // -------------------------------------------------

    handleRemove({ item, event }) {
        if (this.props.confirmRemove) {
            this.setState({ removing: { ...this.state.removing, [item.key || item.id]: true } });
        } else if (this.props.onRemoveItem) {
            this.props.onRemoveItem({ item, event });
        }
    }

    handleRemoveCancel({ item }) {
        this.setState({ removing: { ...this.state.removing, [item.key || item.id]: false } });
    }

    handleRemoveConfirm({ item }) {
        this.setState({ removing: { ...this.state.removing, [item.key || item.id]: false } });
        if (!this.props.onRemoveItem) {
            return;
        }
        this.props.onRemoveItem({ item, event });
    }
}
