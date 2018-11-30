import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ListRenderer extends PureComponent {
    static propTypes = {
        children: PropTypes.node
    };
    render() {
        return <ul style={{ padding: 0, width: '100%' }}>{this.props.children}</ul>;
    }
}
