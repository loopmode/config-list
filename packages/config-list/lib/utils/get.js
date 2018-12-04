"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = get;

function get(target, key) {
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  if (!target) {
    return defaultValue;
  }

  if (target.get) {
    return target.get(key, defaultValue);
  }

  if (target.hasOwnProperty(key)) {
    return target[key];
  }

  return defaultValue;
}