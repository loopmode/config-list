"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bindHandlers;

function bindHandlers(component) {
  var matchKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'handle';
  matchKeys = matchKeys.split(',');
  Object.getOwnPropertyNames(component.constructor.prototype).forEach(function (property) {
    if (matchKeys.some(function (matcher) {
      return property.startsWith(matcher);
    })) {
      component[property] = component[property].bind(component);
    }
  });
}