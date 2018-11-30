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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _asyncState = _interopRequireDefault(require("@loopmode/async-state"));

var AsyncState =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(AsyncState, _Component);

  function AsyncState() {
    (0, _classCallCheck2.default)(this, AsyncState);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(AsyncState).apply(this, arguments));
  }

  (0, _createClass2.default)(AsyncState, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_asyncState.default, (0, _extends2.default)({
        errorClass: "negative",
        successClass: "positive",
        successDuration: 1000,
        errorDuration: 1000
      }, this.props));
    }
  }]);
  return AsyncState;
}(_react.Component);

exports.default = AsyncState;
(0, _defineProperty2.default)(AsyncState, "propTypes", {
  pendingProp: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)])
});
(0, _defineProperty2.default)(AsyncState, "defaultProps", {
  pendingProp: ['disabled', 'loading']
});