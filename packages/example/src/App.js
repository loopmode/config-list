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
                    <h3>Default</h3>
                    <Example renderer={DefaultConfigList} availableItems={itemsArray} />
                </div>
                <div className="example">
                    <h3>With object data</h3>
                    <Example renderer={DefaultConfigList} availableItems={itemsObject} />
                </div>
                <div className="example">
                    <h3>With immutable list data</h3>
                    <Example renderer={DefaultConfigList} availableItems={itemsList} />
                </div>
                <div className="example">
                    <h3>With immutable map data</h3>
                    <Example renderer={DefaultConfigList} availableItems={itemsMap} />
                </div>
                <div className="example">
                    <h3>Semantic UI Table</h3>
                    <Example
                        availableItems={itemsArray}
                        // editable={({ item }) => !item.value}
                        renderer={TableListSUI}
                        confirmRemove
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
