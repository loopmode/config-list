import React, { Component } from "react";

import { Segment } from "semantic-ui-react";
import ConfiguredList from "editable-list";
import bind from "editable-list/lib/utils/bind";

const items = [
    {
        id: "doubleclick",
        label: "Double click",
        action: null
    },
    {
        id: "longclick",
        label: "Long click",
        action: "foo"
    },
    {
        id: "shortclick",
        label: "Short click",
        action: null
    }
];

export default class CommandsExample extends Component {
    state = {
        configuredItems: []
    };
    constructor(props, context) {
        super(props, context);
        bind(this);
    }
    render() {
        return (
            <div className="example">
                <Segment>
                    <ConfiguredList
                        confirmRemove
                        modalConfirm
                        dropdownExclusive
                        dropdownItemIcon={null}
                        // dropdownItemLabel={({ item }) => item.label}
                        // listItemLabel={({ item }) => (
                        //     <div>
                        //         <h4>{item.label}</h4>
                        //         {item.id}: {item.key}
                        //     </div>
                        // )}
                        // dropdownItemDisabled={null}
                        // dropdownItemIdentifier={item => item.id}
                        // listItemIdentifier={item => item.key}
                        editable
                        removeable
                        onAdd={this.handleAdd}
                        onRemove={this.handleRemove}
                        items={items}
                        selectedItems={this.state.configuredItems}
                    />
                </Segment>
            </div>
        );
    }
    handleAdd({ item }) {
        this.setState({
            configuredItems: [
                ...this.state.configuredItems,
                { ...item, key: Math.random() }
            ]
        });
    }
    handleRemove({ item }) {
        this.setState({
            configuredItems: this.state.configuredItems.filter(
                v => v.key !== item.key
            )
        });
    }
}
