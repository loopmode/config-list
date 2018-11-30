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

var SelectRenderer =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(SelectRenderer, _PureComponent);

  function SelectRenderer() {
    (0, _classCallCheck2.default)(this, SelectRenderer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SelectRenderer).apply(this, arguments));
  }

  (0, _createClass2.default)(SelectRenderer, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement("select", {
        value: "default",
        onChange: function onChange(event) {
          return _this.handleSelect(event);
        },
        style: {
          width: '100%'
        }
      }, _react.default.createElement("option", {
        value: "default",
        disabled: true,
        children: 'Add item'
      }), this.props.items.map(function (item) {
        return _react.default.createElement("option", {
          key: item.key,
          value: item.id,
          children: item.label
        });
      }));
    }
  }, {
    key: "handleSelect",
    value: function handleSelect(event) {
      var item = this.props.items[event.target.selectedIndex - 1];
      this.props.onAddItem({
        event: event,
        item: item
      });
    }
  }]);
  return SelectRenderer;
}(_react.PureComponent);

exports.default = SelectRenderer;
(0, _defineProperty2.default)(SelectRenderer, "propTypes", {
  items: _propTypes.default.array,
  onAddItem: _propTypes.default.func
});