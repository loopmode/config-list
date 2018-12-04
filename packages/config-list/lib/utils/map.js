"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapItems = mapItems;
exports.mapObjectValues = mapObjectValues;
exports.mapImmutableValues = mapImmutableValues;
exports.default = map;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

function mapItems(items, iterator) {
  return items.map(function (item, idx) {
    return iterator(item, idx);
  });
}

function mapObjectValues(items, iterator) {
  return Object.values(items).map(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        idx = _ref2[0],
        item = _ref2[1];

    return iterator(item, idx);
  });
}

function mapImmutableValues(items, iterator) {
  return items.valueSeq().map(function (item, idx) {
    return iterator(item, idx);
  });
}

function map(items, iterator) {
  if (!items) {
    return;
  }

  if (Array.isArray(items)) {
    return mapItems(items, iterator);
  }

  if (items.toJS) {
    var str = items.toString();

    if (str.substr(0, 4) === 'List') {
      return mapItems(items, iterator);
    }

    if (str.substr(0, 3) === 'Map') {
      return mapImmutableValues(items, iterator);
    }
  }

  return mapObjectValues(items, iterator);
}