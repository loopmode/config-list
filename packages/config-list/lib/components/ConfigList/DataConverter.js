"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var DataConverter =
/*#__PURE__*/
function () {
  function DataConverter() {
    (0, _classCallCheck2.default)(this, DataConverter);
  }

  (0, _createClass2.default)(DataConverter, null, [{
    key: "getConverter",
    // supported types
    value: function getConverter(items) {
      if (!items) {
        return null;
      }

      if (Object(items) !== items) {
        // no primitive types
        return null;
      }

      if (Array.isArray(items)) {
        return DataConverter.array;
      }

      if (items.toJS) {
        var str = items.toString();

        if (str.substr(0, 3) === 'Map') {
          return DataConverter.immutableMap;
        }

        if (str.substr(0, 4) === 'List') {
          return DataConverter.immutableMap;
        }
      }

      return DataConverter.object;
    }
  }, {
    key: "convertItems",
    value: function convertItems(items) {
      console.log('convert', items);
      var convert = DataConverter.getConverter(items);
      return convert(items);
    }
  }]);
  return DataConverter;
}();

exports.default = DataConverter;
(0, _defineProperty2.default)(DataConverter, "array", function (items) {
  return items;
});
(0, _defineProperty2.default)(DataConverter, "object", function (items) {
  return Object.values(items);
});
(0, _defineProperty2.default)(DataConverter, "immutableList", function (items) {
  return items.toJS();
});
(0, _defineProperty2.default)(DataConverter, "immutableMap", function (items) {
  return items.valueSeq().toJS();
});