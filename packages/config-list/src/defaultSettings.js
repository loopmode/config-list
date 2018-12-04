import get from './utils/get';
export const defaultItemSettings = {
    filter: () => true,
    getLabel: item => get(item, 'label'),
    getValue: item => get(item, 'id'),
    getKey: item => get(item, 'key', get(item, 'id'))
};
