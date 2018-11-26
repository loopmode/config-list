import PropTypes from 'prop-types';

import React, { PureComponent } from 'react';

import { Segment } from 'semantic-ui-react';

import StyledContainer from './EditableList.styled';
import SelectedItems from '../SelectedItems';
import DropdownSelect from '../DropdownSelect';
import DeleteModal from '../DeleteModal';

import getDisplayValue, { displayValueShape } from '../../utils/getDisplayValue';
import bind from '../../utils/bind';

export default class EditableList extends PureComponent {
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
        modalEdit: PropTypes.bool,
        modalConfirm: PropTypes.bool,
        modalConfirmSize: PropTypes.string,

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
        confirmation: null
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
        window.removeEventListener('click', this.handleGlobalClick);
    }
    setState(nextState) {
        this._isMounted && super.setState(nextState);
    }

    render() {
        const { nothingSelectableText, nothingSelectedText, items, selectedItems, className } = this.props;

        const hasSelectableItems = items && items.length > 0;
        const hasSelectedItems = selectedItems && selectedItems.length > 0;

        return (
            <StyledContainer className={`EditableList ${className || ''}`}>
                {hasSelectableItems ? (
                    <Segment vertical className="EditableList--select">
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
                    </Segment>
                ) : (
                    <Segment vertical className="EditableList--select">
                        {getDisplayValue(nothingSelectableText, this.props)}
                    </Segment>
                )}

                {hasSelectedItems ? (
                    <Segment vertical className="EditableList--selected">
                        <SelectedItems
                            items={selectedItems}
                            itemIdentifier={this.props.listItemIdentifier || this.props.itemIdentifier}
                            editable={this.props.editable}
                            removeable={this.props.removeable}
                            onEdit={this.props.onEdit}
                            onRemove={this.handleRemove}
                            confirmRemove={
                                this.state.confirmation && !this.state.modalConfirm
                                    ? this.state.confirmation.id
                                    : undefined
                            }
                        />
                    </Segment>
                ) : (
                    <Segment vertical className="EditableList--selected">
                        {getDisplayValue(nothingSelectedText, this.props)}
                    </Segment>
                )}

                {this.state.confirmation && this.props.modalConfirm && (
                    <DeleteModal
                        size={this.props.modalConfirmSize}
                        item={this.state.confirmation.item}
                        itemLabel={this.props.itemLabel}
                        itemID={this.state.confirmation.id}
                        titleText={this.props.confirmDeleteTitleText}
                        contentText={this.props.confirmDeleteContentText}
                        cancelText={this.props.confirmDeleteCancelText}
                        confirmText={this.props.confirmDeleteConfirmText}
                        onConfirm={this.handleRemoveConfirm}
                        onCancel={this.handleRemoveCancel}
                    />
                )}
            </StyledContainer>
        );
    }

    handleRemove({ id, item, event }) {
        if (!this.props.confirmRemove) {
            this.handleRemoveConfirm({ id, item });
            return;
        }
        if (this.props.modalConfirm) {
            this.setState({ confirmation: { id, item } });
            return;
        }

        // inline-confirm
        if (!this.state.confirmation) {
            window.addEventListener('click', this.handleGlobalClick);
            this.setState({ confirmation: { id, item, button: event.target } });
        } else if (this.state.confirmation.id === id) {
            window.removeEventListener('click', this.handleGlobalClick);
            this.handleRemoveConfirm({ id, item });
        }
    }
    handleRemoveCancel(/*{ id, item }*/) {
        this.setState({ confirmation: undefined });
    }
    handleRemoveConfirm({ id, item }) {
        this.props.onRemove({ id, item });
        this.setState({ confirmation: undefined });
    }
    handleGlobalClick(event) {
        if (!this.state.confirmation || !this.state.confirmation.button) {
            return;
        }
        if (event.target !== this.state.confirmation.button && !this.state.confirmation.button.contains(event.target)) {
            this.setState({ confirmation: undefined });
        }
    }
}
