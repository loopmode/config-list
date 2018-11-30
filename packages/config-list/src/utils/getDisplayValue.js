import PropTypes from "prop-types";

/**
 * Resolve a prop that shall be displayed and may be either a primitive, a JSX/object or a function that returns either of those.
 */
export default function getDisplayValue(value, props) {
    if (value === undefined) {
        return null;
    }
    if (typeof value === "function") {
        return value(props);
    }
    return value;
}
