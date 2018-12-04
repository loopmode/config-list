import get from './utils/get';
const defaultSettings = {
    filter: () => true,
    label: item => get(item, 'label'),
    value: item => get(item, 'id'),
    key: item => get(item, 'key', get(item, 'id'))
};
export default defaultSettings;
