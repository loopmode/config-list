import React, { Component } from "react";

import ConfiguredList from "configured-list";

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
    render() {
        return (
            <div className="example">
                <ConfiguredList
                    confirmRemove
                    editable
                    removeable
                    items={triggers}
                    selectedItems={this.state.selectedTriggers}
                    onAdd={({ item }) =>
                        this.setState({
                            selectedTriggers: [
                                ...this.state.selectedTriggers,
                                item
                            ]
                        })
                    }
                    onRemove={({ id }) => {
                        console.log("onRemove", id);
                        this.setState({
                            selectedTriggers: this.state.selectedTriggers.filter(
                                v => v.id !== id
                            )
                        });
                    }}
                />
            </div>
        );
    }
}
