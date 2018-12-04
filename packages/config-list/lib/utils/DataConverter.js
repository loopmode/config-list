"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var DataConverter =
/*#__PURE__*/
function () {
  function DataConverter() {
    (0, _classCallCheck2.default)(this, DataConverter);
  }

  (0, _createClass2.default)(DataConverter, null, [{
    key: "fromArray",
    value: function fromArray(items) {
      return items;
    }
  }, {
    key: "fromObject",
    value: function fromObject(items) {
      return Object.values(items);
    }
  }, {
    key: "fromImmutableList",
    value: function fromImmutableList(items) {
      return items.toJS();
    }
  }, {
    key: "fromImmutableMap",
    value: function fromImmutableMap(items) {
      return items.valueSeq().toJS();
    }
  }, {
    key: "getConverter",
    value: function getConverter(items) {
      if (!items) {
        return null;
      }

      if (Object(items) !== items) {
        // no primitive types
        return null;
      }

      if (Array.isArray(items)) {
        return DataConverter.fromArray;
      }

      if (items.toJS) {
        var str = items.toString();

        if (str.substr(0, 3) === 'Map') {
          return DataConverter.fromImmutableMap;
        }

        if (str.substr(0, 4) === 'List') {
          return DataConverter.fromImmutableList;
        }
      }

      return DataConverter.fromObject;
    }
  }, {
    key: "convertItems",
    value: function convertItems(items) {
      var convert = DataConverter.getConverter(items);
      return convert && convert(items);
    }
  }]);
  return DataConverter;
}();

exports.default = DataConverter;