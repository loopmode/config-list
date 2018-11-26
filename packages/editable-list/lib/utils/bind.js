"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bind;

function bind(component) {
  for (var _len = arguments.length, matchKeys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    matchKeys[_key - 1] = arguments[_key];
  }

  if (!matchKeys.length) {
    matchKeys = ['handle'];
  }

  Object.getOwnPropertyNames(component.constructor.prototype).forEach(function (property) {
    if (matchKeys.some(function (matcher) {
      return property.match(matcher);
    })) {
      component[property] = component[property].bind(component);
    }
  });
}