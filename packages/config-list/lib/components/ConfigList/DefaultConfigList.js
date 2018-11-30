"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.defaultItemSettings = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shapes = require("./shapes");

var _DefaultSelectRenderer = _interopRequireDefault(require("./DefaultSelectRenderer"));

var _DefaultListRenderer = _interopRequireDefault(require("./DefaultListRenderer"));

var _DefaultItemRenderer = _interopRequireDefault(require("./DefaultItemRenderer"));

var _ConfigList = _interopRequireDefault(require("./ConfigList"));

var defaultItemSettings = {
  getLabel: function getLabel(item) {
    return item.label;
  },
  getID: function getID(item) {
    return item.id;
  },
  getKey: function getKey(item) {
    return item.id;
  },
  isEditable: function isEditable() {
    return true;
  },
  isRemovable: function isRemovable() {
    return true;
  }
};
exports.defaultItemSettings = defaultItemSettings;

var DefaultConfigList =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(DefaultConfigList, _PureComponent);

  function DefaultConfigList() {
    (0, _classCallCheck2.default)(this, DefaultConfigList);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DefaultConfigList).apply(this, arguments));
  }

  (0, _createClass2.default)(DefaultConfigList, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_ConfigList.default, this.props);
    }
  }]);
  return DefaultConfigList;
}(_react.PureComponent);

exports.default = DefaultConfigList;
(0, _defineProperty2.default)(DefaultConfigList, "propTypes", {
  SelectRenderer: _propTypes.default.func,
  ListRenderer: _propTypes.default.func,
  ItemRenderer: _propTypes.default.func,
  itemSettings: _shapes.ItemSettingsShape
});
(0, _defineProperty2.default)(DefaultConfigList, "defaultProps", {
  SelectRenderer: _DefaultSelectRenderer.default,
  ListRenderer: _DefaultListRenderer.default,
  ItemRenderer: _DefaultItemRenderer.default,
  itemSettings: defaultItemSettings
});