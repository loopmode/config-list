"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _DefaultListRenderer = _interopRequireDefault(require("../DefaultListRenderer"));

var _DefaultSelectRenderer = _interopRequireDefault(require("../DefaultSelectRenderer"));

var _EditableList = _interopRequireDefault(require("../EditableList"));

var DefaultEditableList =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(DefaultEditableList, _PureComponent);

  function DefaultEditableList() {
    (0, _classCallCheck2.default)(this, DefaultEditableList);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DefaultEditableList).apply(this, arguments));
  }

  (0, _createClass2.default)(DefaultEditableList, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_EditableList.default, (0, _extends2.default)({
        className: 'DefaultEditableList',
        renderSelect: _DefaultSelectRenderer.default,
        renderList: _DefaultListRenderer.default
      }, this.props));
    }
  }]);
  return DefaultEditableList;
}(_react.PureComponent);

exports.default = DefaultEditableList;