"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var ConfiguredList =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ConfiguredList, _PureComponent);

  function ConfiguredList() {
    (0, _classCallCheck2.default)(this, ConfiguredList);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ConfiguredList).apply(this, arguments));
  }

  (0, _createClass2.default)(ConfiguredList, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, "ConfiguredList");
    }
  }]);
  return ConfiguredList;
}(_react.PureComponent);

exports.default = ConfiguredList;