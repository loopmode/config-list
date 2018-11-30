import PropTypes from 'prop-types';
import React, { Component } from 'react';

import $AsyncState from '@loopmode/async-state';

export default class AsyncState extends Component {
    static propTypes = {
        pendingProp: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
    };
    static defaultProps = {
        pendingProp: ['disabled', 'loading']
    };
    render() {
        return (
            <$AsyncState
                errorClass="negative"
                successClass="positive"
                successDuration={1000}
                errorDuration={1000}
                {...this.props}
            />
        );
    }
}
