export function iterateList(fn, target, iterator) {
    return target[fn]((item, idx) => iterator(item, idx));
}
export function iterateObject(fn, target, iterator) {
    return Object.values(target)[fn](([idx, item]) => iterator(item, idx));
}
export function iterateImmutableMap(fn, target, iterator) {
    return target.valueSeq()[fn]((item, idx) => iterator(item, idx));
}

export function iterate(fn, items, iterator) {
    if (!items) {
        return;
    }
    if (Array.isArray(items)) {
        return iterateList(fn, items, iterator);
    }
    if (items.toJS) {
        const str = items.toString();
        if (str.substr(0, 3) === 'Seq') {
            return iterateList(fn, items, iterator);
        }
        if (str.substr(0, 4) === 'List') {
            return iterateList(fn, items, iterator);
        }
        if (str.substr(0, 3) === 'Map') {
            return iterateImmutableMap(fn, items, iterator);
        }
    }
    return iterateObject(fn, items, iterator);
}

export function map(items, iterator) {
    return iterate('map', items, iterator);
}

export function filter(items, iterator) {
    return iterate('filter', items, iterator);
}

export function forEach(items, iterator) {
    return iterate('forEach', items, iterator);
}
