"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderValue;

function renderValue(value, props) {
  if (typeof value === 'function') {
    return value(props) || null;
  }

  return value || null;
}