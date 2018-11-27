import React, { Component } from "react";
import PropTypes from "prop-types";
import { Segment, Form, Input } from "semantic-ui-react";
import EditableList from "editable-list";
import bind from "editable-list/lib/utils/bind";

const items = [
    {
        id: "doubleclick",
        label: "Double click",
        action: "foo"
    },
    {
        id: "longclick",
        label: "Long click",
        action: null
    },
    {
        id: "shortclick",
        label: "Short click",
        action: null
    }
];

class Editor extends Component {
    static propTypes = {
        item: PropTypes.object,
        onChange: PropTypes.func,
        onSubmit: PropTypes.func
    };

    render() {
        return (
            <Form onSubmit={this.props.onSubmit}>
                <Form.Field inline>
                    <label>action</label>
                    <Input
                        autoFocus
                        name="action"
                        placeholder="action"
                        value={this.props.item.action || ""}
                        onChange={event =>
                            this.props.onChange({
                                [event.target.name]: event.target.value
                            })
                        }
                    />
                </Form.Field>
            </Form>
        );
    }
}

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
                    <EditableList
                        // confirmRemove
                        // confirmModal
                        dropdownExclusive
                        dropdownItemIcon={null}
                        // dropdownItemLabel={({ item }) => item.label}
                        listItemLabel={({ item: { id, label, action } }) => {
                            action = action || "-";
                            return (
                                <div title={`item: ${id}\naction: ${action}`}>
                                    <h4>{label}</h4>
                                    action: {action}
                                </div>
                            );
                        }}
                        // dropdownItemDisabled={null}
                        // dropdownItemIdentifier={item => item.id}
                        // listItemIdentifier={item => item.key}
                        editable
                        removeable
                        onAdd={this.handleAdd}
                        onEdit={this.handleEdit}
                        onRemove={this.handleRemove}
                        items={items}
                        selectedItems={this.state.configuredItems}
                        itemEditor={Editor}
                        editModal
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
    handleEdit({ data }) {
        const index = this.state.configuredItems.findIndex(
            it => it.id === data.id
        );
        const configuredItems = [...this.state.configuredItems];
        configuredItems[index] = data;
        this.setState({
            configuredItems
        });
    }
}
