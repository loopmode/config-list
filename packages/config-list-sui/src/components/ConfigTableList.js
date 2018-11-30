import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ConfigList from 'config-list/lib/components/ConfigList';
import { ItemSettingsShape } from 'config-list/lib/utils/shapes';
import cx from 'classnames';

import ListRenderer from './TableListRenderer';
import ItemRenderer from './TableItemRenderer';
import SelectRenderer from './SelectRenderer';

export const defaultItemSettings = {
    getLabel: item => item.label,
    getID: item => item.id,
    getKey: item => item.id,
    isEditable: () => true,
    isRemovable: () => true
};

export default class TableConfigList extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        SelectRenderer: PropTypes.func,
        ListRenderer: PropTypes.func,
        ItemRenderer: PropTypes.func,
        ItemEditor: PropTypes.func,
        itemSettings: ItemSettingsShape,
        columns: PropTypes.array
    };
    static defaultProps = {
        SelectRenderer: SelectRenderer,
        ListRenderer: ListRenderer,
        ItemRenderer: ItemRenderer,
        itemSettings: defaultItemSettings,
        columns: [{ field: 'label', label: 'Name' }]
    };
    render() {
        return <ConfigList {...this.props} className={cx('TableConfigList', this.props.className)} />;
    }
}
