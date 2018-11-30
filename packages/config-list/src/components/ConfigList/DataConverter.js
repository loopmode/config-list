export default class DataConverter {
    // supported types
    static array = items => items;
    static object = items => Object.values(items);
    static immutableList = items => items.toJS();
    static immutableMap = items => items.valueSeq().toJS();

    static getConverter(items) {
        if (!items) {
            return null;
        }
        if (Object(items) !== items) {
            // no primitive types
            return null;
        }
        if (Array.isArray(items)) {
            return DataConverter.array;
        }
        if (items.toJS) {
            const str = items.toString();
            if (str.substr(0, 3) === 'Map') {
                return DataConverter.immutableMap;
            }
            if (str.substr(0, 4) === 'List') {
                return DataConverter.immutableMap;
            }
        }
        return DataConverter.object;
    }

    static convertItems(items) {
        const convert = DataConverter.getConverter(items);
        console.log('convert');
        return convert(items);
    }
}
