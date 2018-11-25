import PropTypes from 'prop-types';

import React, { PureComponent } from 'react';
import { Form } from 'semantic-ui-react';

import StyledForm from './ConfiguredList.styled';
import SelectedItems from '../SelectedItems';
import DropdownSelect from '../DropdownSelect';
import DeleteModal from '../DeleteModal';

import getDisplayValue, { displayValueShape } from '../../utils/getDisplayValue';
import bind from '../../utils/bind';

export default class ConfiguredList extends PureComponent {
    static propTypes = {
        items: PropTypes.array,
        selectedItems: PropTypes.array,
        className: PropTypes.string,

        editable: PropTypes.bool,
        removeable: PropTypes.bool,

        onAdd: PropTypes.func,
        onEdit: PropTypes.func,
        onRemove: PropTypes.func,

        itemLabel: PropTypes.func,

        confirmRemove: PropTypes.bool,

        dropdownExclusive: PropTypes.bool,
        dropdownText: PropTypes.string,
        dropdownClassName: PropTypes.string,
        dropdownItemIcon: PropTypes.func,
        dropdownItemFilter: PropTypes.func,
        dropdownItemDisabled: PropTypes.func,
        dropdownItemSelected: PropTypes.func,

        nothingSelectableText: displayValueShape,
        nothingSelectedText: displayValueShape,

        confirmDeleteTitleText: displayValueShape,
        confirmDeleteContentText: displayValueShape,
        confirmDeleteCancelText: displayValueShape,
        confirmDeleteConfirmText: displayValueShape,

        itemIdentifier: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        dropdownItemIdentifier: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        listItemIdentifier: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    };
    static defaultProps = {
        itemIdentifier: 'id',
        dropdownText: 'Select an item',
        nothingSelectableText: 'No items to select',
        nothingSelectedText: 'No items selected'
    };

    offsetSliderSettings = {
        min: 0,
        max: 100,
        step: 1
    };

    state = {
        confirmRemove: undefined
    };
    constructor(props, context) {
        super(props, context);
        bind(this);
    }

    componentDidMount() {
        this._isMounted = true;
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    setState(nextState) {
        this._isMounted && super.setState(nextState);
    }

    render() {
        const { nothingSelectableText, nothingSelectedText, items, selectedItems, className } = this.props;

        const hasSelectableItems = items && items.length > 0;
        const hasSelectedItems = selectedItems && selectedItems.length > 0;

        return (
            <StyledForm className={`ConfiguredList ${className || ''}`}>
                {hasSelectableItems ? (
                    <Form.Field>
                        <DropdownSelect
                            text={this.props.dropdownText}
                            items={items}
                            selectedItems={selectedItems}
                            exclusive={this.props.dropdownExclusive}
                            itemIdentifier={this.props.dropdownItemIdentifier || this.props.itemIdentifier}
                            itemIcon={this.props.dropdownItemIcon}
                            itemDisabled={this.props.dropdownItemDisabled}
                            itemLabel={this.props.itemLabel}
                            itemFilter={this.props.dropdownItemFilter}
                            itemSelected={this.props.dropdownItemSelected}
                            nothingSelectableText={this.props.nothingSelectableText}
                            className={this.props.dropdownClassName}
                            onSelectItem={this.props.onAdd}
                        />
                    </Form.Field>
                ) : (
                    <Form.Field>{getDisplayValue(nothingSelectableText, this.props)}</Form.Field>
                )}

                {hasSelectedItems ? (
                    <Form.Field>
                        <SelectedItems
                            items={selectedItems}
                            itemIdentifier={this.props.listItemIdentifier || this.props.itemIdentifier}
                            editable={this.props.editable}
                            removeable={this.props.removeable}
                            onEdit={this.props.onEdit}
                            onRemove={this.handleRemove}
                        />
                    </Form.Field>
                ) : (
                    <Form.Field>{getDisplayValue(nothingSelectedText, this.props)}</Form.Field>
                )}

                {this.state.confirmRemove && (
                    <DeleteModal
                        item={this.state.confirmRemove.item}
                        itemLabel={this.props.itemLabel}
                        itemID={this.state.confirmRemove.id}
                        titleText={this.props.confirmDeleteTitleText}
                        contentText={this.props.confirmDeleteContentText}
                        cancelText={this.props.confirmDeleteCancelText}
                        confirmText={this.props.confirmDeleteConfirmText}
                        onConfirm={this.handleRemoveConfirm}
                        onCancel={this.handleRemoveCancel}
                    />
                )}
            </StyledForm>
        );
    }

    handleRemove({ id, item }) {
        if (this.props.confirmRemove) {
            this.setState({ confirmRemove: { id, item } });
        } else {
            this.handleRemoveConfirm({ id, item });
        }
    }
    handleRemoveCancel(/*{ id, item }*/) {
        this.setState({ confirmRemove: undefined });
    }
    handleRemoveConfirm({ id, item }) {
        this.props.onRemove({ id, item });
        this.setState({ confirmRemove: undefined });
    }
}
