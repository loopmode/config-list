export default function setValue(obj, key, value) {
    if (obj) {
        // immutable.js
        if (obj.set && obj.toJS) {
            return obj.set(key, value);
        }
        obj[key] = value;
    }
    return obj;
}
