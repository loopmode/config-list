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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ConfigList = _interopRequireDefault(require("config-list/lib/components/ConfigList"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TableListRenderer = _interopRequireDefault(require("./TableListRenderer"));

var _TableItemRenderer = _interopRequireDefault(require("./TableItemRenderer"));

var _SelectRenderer = _interopRequireDefault(require("./SelectRenderer"));

var TableConfigList =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TableConfigList, _PureComponent);

  function TableConfigList() {
    (0, _classCallCheck2.default)(this, TableConfigList);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TableConfigList).apply(this, arguments));
  }

  (0, _createClass2.default)(TableConfigList, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_ConfigList.default, (0, _extends2.default)({}, this.props, {
        className: (0, _classnames.default)('TableConfigList', this.props.className)
      }));
    }
  }]);
  return TableConfigList;
}(_react.PureComponent);

exports.default = TableConfigList;
(0, _defineProperty2.default)(TableConfigList, "propTypes", {
  className: _propTypes.default.string,
  SelectRenderer: _propTypes.default.func,
  ListRenderer: _propTypes.default.func,
  ItemRenderer: _propTypes.default.func,
  ItemEditor: _propTypes.default.func,
  columns: _propTypes.default.array
});
(0, _defineProperty2.default)(TableConfigList, "defaultProps", {
  SelectRenderer: _SelectRenderer.default,
  ListRenderer: _TableListRenderer.default,
  ItemRenderer: _TableItemRenderer.default,
  columns: [{
    field: 'label',
    label: 'Name'
  }]
});