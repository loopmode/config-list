"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iterateList = iterateList;
exports.iterateObject = iterateObject;
exports.iterateImmutableMap = iterateImmutableMap;
exports.iterate = iterate;
exports.map = map;
exports.filter = filter;
exports.forEach = forEach;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

function iterateList(fn, target, iterator) {
  return target[fn](function (item, idx) {
    return iterator(item, idx);
  });
}

function iterateObject(fn, target, iterator) {
  return Object.values(target)[fn](function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        idx = _ref2[0],
        item = _ref2[1];

    return iterator(item, idx);
  });
}

function iterateImmutableMap(fn, target, iterator) {
  return target.valueSeq()[fn](function (item, idx) {
    return iterator(item, idx);
  });
}

function iterate(fn, items, iterator) {
  if (!items) {
    return;
  }

  if (Array.isArray(items)) {
    return iterateList(fn, items, iterator);
  }

  if (items.toJS) {
    var str = items.toString();

    if (str.substr(0, 3) === 'Seq') {
      return iterateList(fn, items, iterator);
    }

    if (str.substr(0, 4) === 'List') {
      return iterateList(fn, items, iterator);
    }

    if (str.substr(0, 3) === 'Map') {
      return iterateImmutableMap(fn, items, iterator);
    }
  }

  return iterateObject(fn, items, iterator);
}

function map(items, iterator) {
  return iterate('map', items, iterator);
}

function filter(items, iterator) {
  return iterate('filter', items, iterator);
}

function forEach(items, iterator) {
  return iterate('forEach', items, iterator);
}