import React, { PureComponent } from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import StyledDropdown from './DropdownSelect.styled';

export default class DropdownSelect extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        selectedItems: PropTypes.array,
        items: PropTypes.array,

        dropdownIcon: PropTypes.string,
        // only show items that can be selected (not selected already)
        exclusive: PropTypes.bool,
        noItemsText: PropTypes.string,

        itemFilter: PropTypes.func,
        onItemClick: PropTypes.func,
        itemLabel: PropTypes.func,
        itemSelected: PropTypes.func
    };

    static defaultProps = {
        className: 'icon',
        dropdownIcon: 'add circle',
        noItemsText: 'No selectable items available',
        itemIcon: this.itemIcon,
        itemLabel: this.itemLabel,
        itemFilter: this.itemFilter,
        itemSelected: this.itemSelected
    };

    render() {
        const {
            noItemsText,
            onItemClick,
            itemIcon,
            itemLabel,
            itemFilter,
            itemSelected,
            exclusive,
            items,
            dropdownIcon,
            selectedItems,
            ...props
        } = this.props;

        let renderedItems = items && items.filter(itemFilter);

        if (exclusive) {
            renderedItems = renderedItems.filter(item => !itemSelected(item, selectedItems));
        }

        return (
            <StyledDropdown icon={dropdownIcon} floating labeled button {...props}>
                <Dropdown.Menu>
                    {renderedItems &&
                        renderedItems.map(item => {
                            const isSelected = itemSelected(item, selectedItems);
                            return (
                                <Dropdown.Item
                                    key={item.get('id')}
                                    onClick={() => onItemClick(item)}
                                    disabled={isSelected}
                                    icon={itemIcon && itemIcon(item, isSelected)}
                                    text={itemLabel && itemLabel(item, isSelected)}
                                />
                            );
                        })}
                    {items && !renderedItems.size && <Dropdown.Item disabled text={noItemsText} />}
                </Dropdown.Menu>
            </StyledDropdown>
        );
    }
    itemFilter(/*item*/) {
        return true;
    }
    itemLabel(item) {
        return item.get('name');
    }
    itemIcon(item, isSelected) {
        return isSelected ? 'check circle outline' : 'circle outline';
    }
    itemSelected(item, selectedItems) {
        return selectedItems && !!selectedItems.find(cl => cl.get('id') === item.get('id'));
    }
}
