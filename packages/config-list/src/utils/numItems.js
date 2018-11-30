export default function numItems(items) {
    if (!items) {
        return 0;
    }
    if (items.toJS) {
        return items.size;
    }
    return items.length;
}
