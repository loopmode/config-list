"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = numItems;

function numItems(items) {
  if (!items) {
    return 0;
  }

  if (items.toJS) {
    return items.size;
  }

  return items.length;
}