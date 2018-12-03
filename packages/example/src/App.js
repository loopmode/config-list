import React, { Component } from 'react';

import './App.css';

import DefaultConfigList from '@loopmode/config-list';
import TableListSUI from '@loopmode/config-list-sui/lib/components/ConfigTableList';
import Example from './Example';

import itemsArray from './common.data';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="example">
                    <h3>Standard</h3>
                    <p>
                        With <code>removable</code> flag
                    </p>
                    <Example renderer={DefaultConfigList} availableItems={itemsArray} removable />
                </div>
                <div className="example">
                    <h3>
                        With <code>confirmRemove</code> flag
                    </h3>
                    <p>
                        With <code>removable</code> and <code>confirmRemove</code> boolean flags
                    </p>
                    <Example renderer={DefaultConfigList} availableItems={itemsArray} removable confirmRemove />
                </div>
                <div className="example">
                    <h3>
                        With custom <code>ItemValueRenderer</code>
                    </h3>
                    <p>
                        With <code>editable</code> and <code>removable</code> flags and custom{' '}
                        <code>ItemValueRenderer</code>
                    </p>
                    <Example
                        renderer={DefaultConfigList}
                        availableItems={itemsArray}
                        removable
                        editable
                        ItemValueRenderer={({ item }) => {
                            return `${item.label} (${item.value || 'no value'})`;
                        }}
                    />
                </div>
                <div className="example">
                    <h3>
                        With custom <code>confirmRemove</code> function
                    </h3>
                    <p>Removing must be confirmed only if the item has a value</p>
                    <Example
                        renderer={DefaultConfigList}
                        availableItems={itemsArray}
                        ItemValueRenderer={({ item }) => {
                            return `${item.label} (${item.value || 'no value'})`;
                        }}
                        editable
                        removable
                        confirmRemove={({ item }) => !!item.value}
                    />
                </div>
                <div className="example">
                    <h3>
                        With custom <code>editable</code> and <code>removable</code> functions
                    </h3>
                    <p>Items are editable when they have no value and removable when they do.</p>
                    <Example
                        confirmRemove
                        renderer={DefaultConfigList}
                        availableItems={itemsArray}
                        editable={({ item }) => !item.value}
                        removable={({ item }) => item.value}
                        ItemValueRenderer={({ item }) => {
                            return `${item.label} (${item.value || 'no value'})`;
                        }}
                    />
                </div>
                <div className="example">
                    <h3>With immutable map data</h3>
                    <p>
                        With <code>editable</code>, <code>removable</code> and <code>confirmRemove</code>
                    </p>
                    <Example
                        renderer={DefaultConfigList}
                        availableItems={itemsArray}
                        editable
                        removable
                        confirmRemove
                    />
                </div>
                <div className="example">
                    <h3>With exclusive flag</h3>
                    <p>Items can be added/configured only once</p>
                    <Example
                        renderer={DefaultConfigList}
                        availableItems={itemsArray}
                        editable
                        removable
                        confirmRemove
                        exclusive
                    />
                </div>
                <div className="example">
                    <h3>With Semantic UI</h3>
                    <p>
                        With modal dialogs for confirm and edit, and a custom <code>ItemValueRenderer</code>
                    </p>
                    <Example
                        editable
                        removable
                        confirmRemove
                        availableItems={itemsArray}
                        // editable={({ item }) => !item.value}
                        renderer={TableListSUI}
                        modalConfirm={{
                            title: 'Remove this item',
                            size: 'mini',
                            confirmProps: { color: 'red', children: 'Yes, remove' }
                        }}
                        modalEdit={{
                            title: 'Edit this item',
                            confirmProps: { color: 'blue', children: 'Save' }
                        }}
                        ItemValueRenderer={({ item }) => {
                            return (
                                <div>
                                    <h4>{item.label}</h4>
                                    Value: <code>{item.value}</code>
                                </div>
                            );
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default App;
