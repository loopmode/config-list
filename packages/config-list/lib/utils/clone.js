"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clone;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function clone(o) {
  if (!o) {
    return null;
  }

  var output, v, key;
  output = Array.isArray(o) ? [] : {};

  for (key in o) {
    v = o[key];
    output[key] = (0, _typeof2.default)(v) === 'object' ? clone(v) : v;
  }

  return output;
}