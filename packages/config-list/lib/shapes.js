"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderableShape = exports.settingsShape = exports.settings = exports.itemsShape = exports.ImmutableShape = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function isImmutableMap(value) {
  return value && value.toString().substr(0, 3) === 'Map';
}

function isImmutableList(value) {
  return value && value.toString().substr(0, 4) === 'List';
}

var ImmutableShape = function ImmutableShape(props, propName, componentName) {
  var value = props[propName];

  if (!value || isImmutableMap(value) || isImmutableList(value)) {
    return null;
  }

  return new TypeError("Expected immutable.js value: ".concat(value, " for ").concat(propName, " in ").concat(componentName));
};

exports.ImmutableShape = ImmutableShape;

ImmutableShape.map = function (props, propName, componentName) {
  var value = props[propName];

  if (!value || isImmutableMap(value)) {
    return null;
  }

  return new TypeError("Expected immutable.js Map: ".concat(value, " for ").concat(propName, " in ").concat(componentName));
};

ImmutableShape.list = function (props, propName, componentName) {
  var value = props[propName];

  if (!value || isImmutableList(value)) {
    return null;
  }

  return new TypeError("Expected immutable.js List: ".concat(value, " for ").concat(propName, " in ").concat(componentName));
};

var itemsShape = _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object, ImmutableShape.list, ImmutableShape.map]);

exports.itemsShape = itemsShape;
var settings = {
  filter: _propTypes.default.func,
  value: _propTypes.default.func,
  label: _propTypes.default.func,
  key: _propTypes.default.func
};
exports.settings = settings;

var settingsShape = _propTypes.default.shape(settings);

exports.settingsShape = settingsShape;

var renderableShape = _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.node, _propTypes.default.string, _propTypes.default.number]);

exports.renderableShape = renderableShape;