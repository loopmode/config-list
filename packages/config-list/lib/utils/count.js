"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = count;

function count(items) {
  if (!items) {
    return 0;
  }

  if (Array.isArray(items)) {
    return items.length;
  }

  if (items.toJS) {
    return items.size;
  }

  return 0;
}