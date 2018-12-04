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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bind = _interopRequireDefault(require("../utils/bind"));

var _shapes = require("../utils/shapes");

var _iterate = require("../utils/iterate");

var SelectRenderer =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(SelectRenderer, _PureComponent);

  function SelectRenderer(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, SelectRenderer);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SelectRenderer).call(this, props, context));
    (0, _bind.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(SelectRenderer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          availableItems = _this$props.availableItems,
          settings = _this$props.settings;
      return _react.default.createElement("select", {
        value: "default",
        onChange: this.handleSelect
      }, _react.default.createElement("option", {
        value: "default",
        disabled: true,
        children: 'Add item'
      }), (0, _iterate.map)((0, _iterate.filter)(availableItems, settings.filter), function (item) {
        return _react.default.createElement("option", {
          key: settings.key(item),
          value: settings.value(item),
          children: settings.label(item)
        });
      }));
    }
  }, {
    key: "handleSelect",
    value: function handleSelect(event) {
      var _this$props2 = this.props,
          availableItems = _this$props2.availableItems,
          settings = _this$props2.settings;
      var value = event.target.options[event.target.options.selectedIndex].value;
      var item = availableItems.find(function (item) {
        return settings.value(item) === value;
      });
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
  availableItems: _propTypes.default.array,
  onAddItem: _propTypes.default.func,
  settings: _shapes.settingsShape
});