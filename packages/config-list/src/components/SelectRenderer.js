import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import bind from '../utils/bind';

import { settingsShape } from '../utils/shapes';
import { map, filter } from '../utils/iterate';

export default class SelectRenderer extends PureComponent {
    static propTypes = {
        availableItems: PropTypes.array,
        onAddItem: PropTypes.func,
        settings: settingsShape
    };
    constructor(props, context) {
        super(props, context);
        bind(this);
    }
    render() {
        const { availableItems, settings } = this.props;

        return (
            <select value="default" onChange={this.handleSelect}>
                <option value="default" disabled children={'Add item'} />
                {map(filter(availableItems, settings.filter), item => {
                    return (
                        <option key={settings.key(item)} value={settings.value(item)} children={settings.label(item)} />
                    );
                })}
            </select>
        );
    }
    handleSelect(event) {
        const { availableItems, settings } = this.props;
        const value = event.target.options[event.target.options.selectedIndex].value;
        const item = availableItems.find(item => settings.value(item) === value);
        this.props.onAddItem({ event, item });
    }
}
