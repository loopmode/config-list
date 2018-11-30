export default class DataConverter {
    // supported types
    static fromArray = items => items;
    static fromObject = items => Object.values(items);
    static fromImmutableList = items => items.toJS();
    static fromImmutableMap = items => items.valueSeq().toJS();

    static getConverter(items) {
        if (!items) {
            return null;
        }
        if (Object(items) !== items) {
            // no primitive types
            return null;
        }
        if (Array.isArray(items)) {
            return DataConverter.fromArray;
        }
        if (items.toJS) {
            const str = items.toString();
            if (str.substr(0, 3) === 'Map') {
                return DataConverter.fromImmutableMap;
            }
            if (str.substr(0, 4) === 'List') {
                return DataConverter.fromImmutableList;
            }
        }
        return DataConverter.fromObject;
    }

    static convertItems(items) {
        const convert = DataConverter.getConverter(items);
        return convert(items);
    }
}
