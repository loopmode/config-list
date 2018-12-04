import get from './utils/get';
export const defaultItemSettings = {
    filter: () => true,
    label: item => get(item, 'label'),
    value: item => get(item, 'id'),
    key: item => get(item, 'key', get(item, 'id'))
};
