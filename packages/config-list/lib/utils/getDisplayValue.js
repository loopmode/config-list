"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDisplayValue;

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * Resolve a prop that shall be displayed and may be either a primitive, a JSX/object or a function that returns either of those.
 */
function getDisplayValue(value, props) {
  if (value === undefined) {
    return null;
  }

  if (typeof value === "function") {
    return value(props);
  }

  return value;
}