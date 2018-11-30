"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SupportedItemsShape = exports.ImmutableShape = exports.DataItemShape = exports.RenderableShape = exports.ItemSettingsShape = exports.displayValueShape = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function isImmutableMap(value) {
  return value && value.toString().substr(0, 3) === 'Map';
}

function isImmutableList(value) {
  return value && value.toString().substr(0, 4) === 'List';
}

var displayValueShape = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.node, _propTypes.default.func]);

exports.displayValueShape = displayValueShape;

var ItemSettingsShape = _propTypes.default.shape({
  getLabel: _propTypes.default.func,
  getID: _propTypes.default.func,
  getKey: _propTypes.default.func,
  isEditable: _propTypes.default.func,
  isRemovable: _propTypes.default.func
});

exports.ItemSettingsShape = ItemSettingsShape;

var RenderableShape = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.node, _propTypes.default.func]);

exports.RenderableShape = RenderableShape;

var DataItemShape = _propTypes.default.shape({
  id: _propTypes.default.string,
  key: _propTypes.default.string,
  label: RenderableShape,
  data: _propTypes.default.object
});

exports.DataItemShape = DataItemShape;

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

var SupportedItemsShape = _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.array, ImmutableShape.list, ImmutableShape.map]);

exports.SupportedItemsShape = SupportedItemsShape;