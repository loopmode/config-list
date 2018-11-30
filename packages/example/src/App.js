import React, { Component } from 'react';

import './App.css';

import DefaultConfigList from '@loopmode/config-list';
import TableListSUI from '@loopmode/config-list-sui/lib/components/ConfigTableList';
import Example from './Example';
import Immutable from 'immutable';

import itemsArray from './common.data';

const itemsObject = itemsArray.reduce((result, item) => ({ ...result, [item.id]: item }), {});
const itemsList = Immutable.fromJS(itemsArray);
const itemsMap = Immutable.fromJS(itemsObject);
console.log({ itemsArray, itemsObject, itemsList, itemsMap });
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="example">
                    <h3>With array data</h3>
                    <p>
                        With <code>removable</code> flag
                    </p>
                    <Example renderer={DefaultConfigList} availableItems={itemsArray} removable />
                </div>
                <div className="example">
                    <h3>With object data</h3>
                    <p>
                        With <code>removable</code> and <code>confirmRemove</code> flags
                    </p>
                    <Example renderer={DefaultConfigList} availableItems={itemsObject} removable confirmRemove />
                </div>
                <div className="example">
                    <h3>With immutable list data</h3>
                    <p>
                        With <code>editable</code> flag and custom <code>ItemValueRenderer</code>
                    </p>
                    <Example
                        renderer={DefaultConfigList}
                        availableItems={itemsList}
                        editable
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
                    <Example renderer={DefaultConfigList} availableItems={itemsMap} editable removable confirmRemove />
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
