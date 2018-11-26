import React, { Component } from "react";

import { Segment } from "semantic-ui-react";
import ConfiguredList from "editable-list";
import bind from "editable-list/lib/utils/bind";

const triggers = [
    {
        id: "doubleclick",
        label: "Double click"
    },
    {
        id: "longclick",
        label: "Long click"
    },
    {
        id: "shortclick",
        label: "Short click"
    }
];

export default class CommandsExample extends Component {
    state = {
        selectedTriggers: []
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
                        // dropdownItemDisabled={null}
                        // dropdownItemIdentifier={item => item.id}
                        // listItemIdentifier={item => item.key}
                        editable
                        removeable
                        onAdd={this.handleAdd}
                        onRemove={this.handleRemove}
                        items={triggers}
                        selectedItems={this.state.selectedTriggers}
                    />
                </Segment>
            </div>
        );
    }
    handleAdd({ item }) {
        this.setState({
            selectedTriggers: [
                ...this.state.selectedTriggers,
                { ...item, key: Math.random() }
            ]
        });
    }
    handleRemove({ item }) {
        this.setState({
            selectedTriggers: this.state.selectedTriggers.filter(
                v => v.key !== item.key
            )
        });
    }
}
