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
                    />
                </div>
            </div>
        );
    }
}

export default App;
