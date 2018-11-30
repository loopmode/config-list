import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { items } from './common.data';
import ItemEditor from './ItemEditor';

class Example extends Component {
    static propTypes = {
        renderer: PropTypes.func,
        modalConfirm: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        modalEdit: PropTypes.oneOfType([PropTypes.bool, PropTypes.object])
    };
    static defaultProps = {
        editable: true,
        removable: true
    };
    state = {
        configuredItems: []
    };

    render() {
        const { renderer: ConfigList, modalConfirm, modalEdit } = this.props;
        const { configuredItems } = this.state;
        return (
            <ConfigList
                ItemEditor={ItemEditor}
                items={items}
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
        configuredItems[index].data = {
            ...item.data,
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
