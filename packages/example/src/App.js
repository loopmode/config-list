import React, { Component } from 'react';

import './App.css';

import DefaultConfigList from 'config-list';
import TableListSUI from 'config-list-sui/lib/components/ConfigTableList';
import Example from './Example';
// import CommandsExample from "./CommandsExample";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="example">
                    <h3>Default</h3>
                    <Example renderer={DefaultConfigList} />
                </div>
                <div className="example">
                    <h3>Semantic UI Table</h3>
                    <Example
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
