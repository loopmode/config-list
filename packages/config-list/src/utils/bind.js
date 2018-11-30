/**
 * Binds component instance methods.
 * Requires the component instance to be passed as first argument.
 * Any additional arguments are optional and specify "matchers" for instance method names.
 * Any instance method that has a name matching one of the arguments will be bound to the instance.
 * The arguments may be strings or regular expressions.
 *
 * When only the component instance is passed, all methods that start with `handle` will be bound.
 *
 * @param {Object} component - the component instance
 * @param {...String|RegExp} matchKeys - strings or regular expressions matching method names to bind
 */
export default function bind(component, ...matchKeys) {
    if (!matchKeys.length) {
        matchKeys = [/^handle/];
    }
    Object.getOwnPropertyNames(component.constructor.prototype).forEach(property => {
        if (matchKeys.some(matcher => property.match(matcher))) {
            component[property] = component[property].bind(component);
        }
    });
}
