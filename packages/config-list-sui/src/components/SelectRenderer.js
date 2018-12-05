import React, { PureComponent } from 'react';
import { Dropdown, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import memoize from 'memoize-one';

import { selectSettingsShape } from '../shapes';
import { defaultSelectSettings } from '../defaults';
import { itemsShape } from '@loopmode/config-list/lib/shapes';
import { map, filter } from '@loopmode/config-list/lib/utils/iterate';
import count from '@loopmode/config-list/lib/utils/count';

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
        configuredItems: itemsShape,
        availableItems: itemsShape,

        // only shows items in dropdown that are not already selected
        exclusive: PropTypes.bool,

        settings: selectSettingsShape,
        onAddItem: PropTypes.func
    };

    static defaultProps = {
        onAddItem: () => {},
        className: 'icon'
    };

    getSettings = memoize((defaults, settings) => ({ ...defaults, ...settings }));
    get settings() {
        return this.getSettings(defaultSelectSettings, this.props.settings);
    }
    render() {
        const { settings } = this;
        const { onAddItem, configuredItems, availableItems } = this.props;

        const selectableItems = filter(availableItems, item =>
            settings.filter(item, { configuredItems, availableItems })
        );
        const hasSelectableItems = count(selectableItems) > 0;
        return (
            <StyledSegment vertical className="SelectRenderer">
                <Dropdown
                    className="icon"
                    icon={settings.dropdownIcon}
                    floating
                    labeled
                    button
                    text={settings.dropdownText}
                >
                    <Dropdown.Menu>
                        {!hasSelectableItems && <Dropdown.Item disabled text={settings.dropdownEmptyText} />}
                        {hasSelectableItems &&
                            map(selectableItems, item => {
                                return (
                                    <Dropdown.Item
                                        key={settings.key(item)}
                                        text={settings.label(item)}
                                        onClick={() => onAddItem({ item })}
                                    />
                                );
                            })}
                    </Dropdown.Menu>
                </Dropdown>
            </StyledSegment>
        );
    }
}
