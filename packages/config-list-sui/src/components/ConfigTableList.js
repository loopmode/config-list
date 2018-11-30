import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ConfigList from 'config-list';
import cx from 'classnames';

import ListRenderer from './TableListRenderer';
import ItemRenderer from './TableItemRenderer';
import SelectRenderer from './SelectRenderer';

export default class TableConfigList extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        SelectRenderer: PropTypes.func,
        ListRenderer: PropTypes.func,
        ItemRenderer: PropTypes.func,
        ItemEditor: PropTypes.func,
        columns: PropTypes.array
    };
    static defaultProps = {
        SelectRenderer: SelectRenderer,
        ListRenderer: ListRenderer,
        ItemRenderer: ItemRenderer,
        columns: [{ field: 'label', label: 'Name' }]
    };
    render() {
        return <ConfigList {...this.props} className={cx('TableConfigList', this.props.className)} />;
    }
}
