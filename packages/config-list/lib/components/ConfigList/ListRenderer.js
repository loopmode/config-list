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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ListRenderer =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ListRenderer, _PureComponent);

  function ListRenderer() {
    (0, _classCallCheck2.default)(this, ListRenderer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ListRenderer).apply(this, arguments));
  }

  (0, _createClass2.default)(ListRenderer, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("ul", {
        style: {
          padding: 0,
          width: '100%'
        }
      }, this.props.children);
    }
  }]);
  return ListRenderer;
}(_react.PureComponent);

exports.default = ListRenderer;
(0, _defineProperty2.default)(ListRenderer, "propTypes", {
  children: _propTypes.default.node
});