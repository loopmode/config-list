export default function bind(component, ...matchKeys) {
    if (!matchKeys.length) {
        matchKeys = ['handle'];
    }
    Object.getOwnPropertyNames(component.constructor.prototype).forEach(property => {
        if (matchKeys.some(matcher => property.match(matcher))) {
            component[property] = component[property].bind(component);
        }
    });
}
