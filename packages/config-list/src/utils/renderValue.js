export default function renderValue(value, props) {
    if (typeof value === 'function') {
        return value(props) || null;
    }
    return value || null;
}
