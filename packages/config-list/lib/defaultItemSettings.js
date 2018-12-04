"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var defaultItemSettings = {
  filter: function filter() {
    return true;
  },
  getLabel: function getLabel(item) {
    return item.label || item.name;
  },
  getKey: function getKey(item) {
    return item.key || item.id;
  },
  getID: function getID(item) {
    return item.id;
  }
};
var _default = defaultItemSettings;
exports.default = _default;