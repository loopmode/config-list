"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSelectSettings = exports.defaultListSettings = exports.COLUMN_FIELD_ACTIONS = exports.COLUMN_FIELD_ITEM = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _defaults = _interopRequireDefault(require("@loopmode/config-list/lib/defaults"));

var COLUMN_FIELD_ITEM = '$item';
exports.COLUMN_FIELD_ITEM = COLUMN_FIELD_ITEM;
var COLUMN_FIELD_ACTIONS = '$actions';
exports.COLUMN_FIELD_ACTIONS = COLUMN_FIELD_ACTIONS;
var defaultListSettings = (0, _objectSpread2.default)({}, _defaults.default, {
  displayHeaders: true,
  columns: [{
    label: 'Name',
    field: COLUMN_FIELD_ITEM
  }, {
    label: 'Actions',
    field: COLUMN_FIELD_ACTIONS
  }]
});
exports.defaultListSettings = defaultListSettings;
var defaultSelectSettings = (0, _objectSpread2.default)({}, _defaults.default, {
  dropdownHeader: null,
  dropdownFooter: null,
  dropdownIcon: 'add circle',
  dropdownText: 'select item',
  dropdownEmptyText: 'No selectable items available'
});
exports.defaultSelectSettings = defaultSelectSettings;