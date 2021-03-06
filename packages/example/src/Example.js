import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemEditor from './ItemEditor';
import { itemsShape } from '@loopmode/config-list/lib/utils/shapes';

class Example extends Component {
    static propTypes = {
        renderer: PropTypes.func,
        availableItems: itemsShape,
        ItemValueRenderer: PropTypes.func,
        modalConfirm: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        modalEdit: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        exclusive: PropTypes.bool
    };
    static defaultProps = {};
    state = {
        configuredItems: []
    };

    render() {
        const { renderer: ConfigList, availableItems, ItemValueRenderer, modalConfirm, modalEdit } = this.props;
        const { configuredItems } = this.state;

        return (
            <ConfigList
                exclusive={this.props.exclusive}
                ItemEditor={ItemEditor}
                ItemValueRenderer={ItemValueRenderer}
                availableItems={availableItems}
                configuredItems={configuredItems}
                onAddItem={({ item }) => this.handleAddItem({ item })}
                onRemoveItem={({ item }) => this.handleRemoveItem({ item })}
                onEditItem={({ item, data }) => this.handleEditItem({ item, data })}
                modalConfirm={modalConfirm}
                modalEdit={modalEdit}
                editable={this.props.editable}
                removable={this.props.removable}
                confirmRemove={this.props.confirmRemove}
            />
        );
    }

    handleAddItem({ item }) {
        const { configuredItems } = this.state;
        this.setState({
            configuredItems: [...configuredItems, { ...item, key: `${item.id}__${createKey()}` }]
        });
    }
    handleRemoveItem({ item }) {
        const { configuredItems } = this.state;
        this.setState({
            configuredItems: configuredItems.filter(it => it.key !== item.key)
        });
    }
    handleEditItem({ item, data }) {
        const { configuredItems } = this.state;
        const index = configuredItems.findIndex(it => it.key === item.key);
        configuredItems[index] = {
            ...item,
            ...data
        };
        this.setState({
            configuredItems
        });
    }
}

function createKey() {
    return (
        Date.now().toString(36) +
        Math.random()
            .toString(36)
            .substr(2, 5)
    );
}

export default Example;
