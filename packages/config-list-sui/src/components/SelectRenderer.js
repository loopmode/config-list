import React, { PureComponent } from 'react';
import { Dropdown, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledSegment = styled(Segment)`
    &:first-child {
        padding-top: 0 !important;
    }
    .ui.dropdown {
        width: 100%;
    }
    .ui.icon.button {
        padding: 7px;
    }
`;

export default class SelectRenderer extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        configuredItems: PropTypes.array,
        items: PropTypes.array,

        dropdownText: PropTypes.string,
        dropdownIcon: PropTypes.string,
        // only shows items in dropdown that are not already selected
        exclusive: PropTypes.bool,

        itemConfig: PropTypes.shape({
            filter: PropTypes.func,
            identifier: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
            disabled: PropTypes.func,
            icon: PropTypes.func,
            label: PropTypes.func,
            selected: PropTypes.func
        }),

        onAddItem: PropTypes.func
    };

    static defaultProps = {
        onAddItem: () => {},
        className: 'icon',
        dropdownIcon: 'add circle',
        dropdownText: 'select item'
    };

    render() {
        const { onAddItem, dropdownIcon, items, dropdownText } = this.props;

        return (
            <StyledSegment vertical className="SelectRenderer">
                <Dropdown className="icon" icon={dropdownIcon} floating labeled button text={dropdownText}>
                    <Dropdown.Menu>
                        {items.map(item => {
                            return (
                                <Dropdown.Item
                                    key={item.key || item.id}
                                    onClick={() => onAddItem({ item })}
                                    text={item.label}
                                />
                            );
                        })}
                    </Dropdown.Menu>
                </Dropdown>
            </StyledSegment>
        );
    }
}
