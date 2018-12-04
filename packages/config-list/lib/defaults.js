"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get = _interopRequireDefault(require("./utils/get"));

var defaultSettings = {
  filter: function filter() {
    return true;
  },
  label: function label(item) {
    return (0, _get.default)(item, 'label');
  },
  value: function value(item) {
    return (0, _get.default)(item, 'id');
  },
  key: function key(item) {
    return (0, _get.default)(item, 'key', (0, _get.default)(item, 'id'));
  }
};
var _default = defaultSettings;
exports.default = _default;