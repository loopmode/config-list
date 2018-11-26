"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDisplayValue;
exports.displayValueShape = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var displayValueShape = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.node, _propTypes.default.func]);
/**
 * Resolve a prop that shall be displayed and may be either a primitive, a JSX/object or a function that returns either of those.
 */


exports.displayValueShape = displayValueShape;

function getDisplayValue(value, props) {
  if (value === undefined) {
    return null;
  }

  if (typeof value === 'function') {
    return value(props);
  }

  return value;
}