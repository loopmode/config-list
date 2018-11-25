export default function bindHandlers(component, matchKeys = 'handle') {
    matchKeys = matchKeys.split(',');
    Object.getOwnPropertyNames(component.constructor.prototype).forEach(property => {
        if (matchKeys.some(matcher => property.startsWith(matcher))) {
            component[property] = component[property].bind(component);
        }
    });
}
