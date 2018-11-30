import PropTypes from 'prop-types';

function isImmutableMap(value) {
    return value && value.toString().substr(0, 3) === 'Map';
}

function isImmutableList(value) {
    return value && value.toString().substr(0, 4) === 'List';
}

export const ImmutableShape = (props, propName, componentName) => {
    const value = props[propName];
    if (!value || isImmutableMap(value) || isImmutableList(value)) {
        return null;
    }
    return new TypeError(`Expected immutable.js value: ${value} for ${propName} in ${componentName}`);
};

ImmutableShape.map = (props, propName, componentName) => {
    const value = props[propName];
    if (!value || isImmutableMap(value)) {
        return null;
    }
    return new TypeError(`Expected immutable.js Map: ${value} for ${propName} in ${componentName}`);
};

ImmutableShape.list = (props, propName, componentName) => {
    const value = props[propName];
    if (!value || isImmutableList(value)) {
        return null;
    }
    return new TypeError(`Expected immutable.js List: ${value} for ${propName} in ${componentName}`);
};

export const SupportedItemsShape = PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.array,
    ImmutableShape.list,
    ImmutableShape.map
]);
