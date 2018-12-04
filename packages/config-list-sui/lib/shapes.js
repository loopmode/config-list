"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.settingsShape = exports.columnShape = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shapes = require("@loopmode/config-list/lib/shapes");

var columnShape = _propTypes.default.shape({
  field: _propTypes.default.string,
  label: _propTypes.default.string
});

exports.columnShape = columnShape;

var settingsShape = _propTypes.default.shape((0, _objectSpread2.default)({}, _shapes.settings, {
  columns: _propTypes.default.arrayOf(columnShape)
}));

exports.settingsShape = settingsShape;