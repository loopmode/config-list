"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultListSettings = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _defaults = require("@loopmode/config-list/lib/defaults");

var defaultListSettings = (0, _objectSpread2.default)({}, _defaults.defaultListSettings, {
  actionsColumnTitle: 'Actions'
});
exports.defaultListSettings = defaultListSettings;