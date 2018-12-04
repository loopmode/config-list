export default function get(target, key, defaultValue = null) {
    if (!target) {
        return defaultValue;
    }
    if (target.get) {
        return target.get(key, defaultValue);
    }
    if (target.hasOwnProperty(key)) {
        return target[key];
    }
    return defaultValue;
}
