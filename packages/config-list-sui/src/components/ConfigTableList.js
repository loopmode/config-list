import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ConfigList from '@loopmode/config-list';
import cx from 'classnames';

import ListRenderer from './TableListRenderer';
import ItemRenderer from './TableItemRenderer';
import SelectRenderer from './SelectRenderer';

import * as defaults from '../defaults';

export default class ConfigTableList extends PureComponent {
    static COLUMN_FIELD_ACTIONS = defaults.COLUMN_FIELD_ACTIONS;
    static COLUMN_FIELD_ITEM = defaults.COLUMN_FIELD_ITEM;
    static propTypes = {
        className: PropTypes.string,
        SelectRenderer: PropTypes.func,
        ListRenderer: PropTypes.func,
        ItemRenderer: PropTypes.func,
        ItemEditor: PropTypes.func
    };
    static defaultProps = {
        SelectRenderer: SelectRenderer,
        ListRenderer: ListRenderer,
        ItemRenderer: ItemRenderer
    };
    render() {
        return <ConfigList {...this.props} className={cx('ConfigTableList', this.props.className)} />;
    }
}
