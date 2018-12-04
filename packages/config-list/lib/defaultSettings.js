"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultItemSettings = void 0;

var _get = _interopRequireDefault(require("./utils/get"));

var defaultItemSettings = {
  filter: function filter() {
    return true;
  },
  getLabel: function getLabel(item) {
    return (0, _get.default)(item, 'label');
  },
  getValue: function getValue(item) {
    return (0, _get.default)(item, 'id');
  },
  getKey: function getKey(item) {
    return (0, _get.default)(item, 'key', (0, _get.default)(item, 'id'));
  }
};
exports.defaultItemSettings = defaultItemSettings;