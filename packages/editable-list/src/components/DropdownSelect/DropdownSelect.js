import React, { PureComponent } from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import getValue from '../../utils/getValue';
import getDisplayValue, { displayValueShape } from '../../utils/getDisplayValue';

import StyledDropdown from './DropdownSelect.styled';

export default class DropdownSelect extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        selectedItems: PropTypes.array,
        items: PropTypes.array,

        dropdownIcon: PropTypes.string,
        // only shows items in dropdown that are not already selected
        exclusive: PropTypes.bool,
        nothingSelectableText: displayValueShape,

        itemFilter: PropTypes.func,
        itemIdentifier: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
        onSelectItem: PropTypes.func,
        itemDisabled: PropTypes.func,
        itemIcon: PropTypes.func,
        itemLabel: PropTypes.func,
        itemSelected: PropTypes.func
    };

    static defaultProps = {
        onSelectItem: () => {},
        className: 'icon',
        dropdownIcon: 'add circle',
        nothingSelectableText: '-'
    };

    render() {
        const {
            nothingSelectableText,
            onSelectItem,
            itemIdentifier,
            itemDisabled = this.itemDisabled,
            itemIcon = this.itemIcon,
            itemLabel = this.itemLabel,
            itemFilter = this.itemFilter,
            itemSelected = this.itemSelected,
            exclusive,
            items,
            dropdownIcon,
            selectedItems,
            ...props
        } = this.props;

        let itemsToRender = items && items.filter(itemFilter);

        if (exclusive && itemsToRender) {
            itemsToRender = itemsToRender.filter(item => !itemSelected(item, selectedItems, itemIdentifier));
        }

        return (
            <StyledDropdown icon={dropdownIcon} floating labeled button {...props}>
                <Dropdown.Menu>
                    {itemsToRender &&
                        itemsToRender.map(item => {
                            const id = getValue(item, itemIdentifier);
                            const isSelected = itemSelected(item, selectedItems, itemIdentifier);
                            return (
                                <Dropdown.Item
                                    key={id}
                                    onClick={() => onSelectItem({ item, id })}
                                    disabled={itemDisabled && itemDisabled(item, isSelected)}
                                    icon={itemIcon && itemIcon(item, isSelected)}
                                    text={itemLabel && itemLabel(item, isSelected)}
                                />
                            );
                        })}
                    {(!items || !this.hasItems(itemsToRender)) && (
                        <Dropdown.Item disabled text={getDisplayValue(nothingSelectableText, this.props)} />
                    )}
                </Dropdown.Menu>
            </StyledDropdown>
        );
    }
    hasItems(items) {
        if (!items) {
            return false;
        }
        if (items.toJS) {
            return items.size > 0;
        }
        return items.length > 0;
    }
    itemFilter(/*item*/) {
        return true;
    }
    itemLabel(item /*, isSelected*/) {
        return getValue(item, 'label') || getValue(item, 'name');
    }
    itemIcon(item, isSelected) {
        return isSelected ? 'check circle outline' : 'circle outline';
    }
    itemDisabled(item, isSelected) {
        return isSelected;
    }
    itemSelected(item, selectedItems, itemIdentifier) {
        if (!item || !selectedItems) {
            return false;
        }
        const itemID = getValue(item, itemIdentifier);
        const hasTargetID = it => getValue(it, itemIdentifier) === itemID;
        if (selectedItems.find(hasTargetID)) {
            return true;
        }
        return false;
    }
}
