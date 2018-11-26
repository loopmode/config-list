export default function getValue(obj, key, defaultValue) {
    if (!obj) {
        return defaultValue;
    }
    if (typeof key === 'function') {
        return key(obj, defaultValue);
    }
    // immutable.js
    if (obj.get && obj.toJS) {
        return obj.get(key, defaultValue);
    }
    if (obj[key] === undefined) {
        return defaultValue;
    }
    return obj[key];
}
