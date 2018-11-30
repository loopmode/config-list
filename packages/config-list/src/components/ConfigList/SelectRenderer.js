import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class SelectRenderer extends PureComponent {
    static propTypes = {
        items: PropTypes.array,
        onAddItem: PropTypes.func
    };
    render() {
        return (
            <select value="default" onChange={event => this.handleSelect(event)} style={{ width: '100%' }}>
                <option value="default" disabled children={'Add item'} />
                {this.props.items.map(item => (
                    <option key={item.key || item.id} value={item.id} children={item.label} />
                ))}
            </select>
        );
    }
    handleSelect(event) {
        const item = this.props.items[event.target.selectedIndex - 1];
        this.props.onAddItem({ event, item });
    }
}
