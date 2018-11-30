import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DataConverter from './DataConverter';
import { ItemSettingsShape } from '../../utils/shapes';

export default class DataAdapter extends PureComponent {
    static propTypes = {
        children: PropTypes.func,
        items: PropTypes.array,
        itemSettings: ItemSettingsShape
    };

    render() {
        return this.props.children({
            items: this.createDataItems(this.props.items, this.props.itemSettings)
        });
    }

    createDataItems(items, settings) {
        const convert = DataConverter.getConverter(items);
        if (!convert) {
            return null;
        }

        return convert(items).map(item => {
            return {
                key: settings.getKey(item),
                id: settings.getID(item),
                label: settings.getLabel(item),
                editable: settings.isEditable(item),
                removable: settings.isRemovable(item),
                data: item
            };
        });
    }
}
