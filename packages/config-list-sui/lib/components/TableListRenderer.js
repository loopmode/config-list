"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _shapes = require("../shapes");

var _defaults = require("../defaults");

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    .ui.table thead,\n    .ui.table tbody tr:not(.editor-row) {\n        td:last-child,\n        th:last-child {\n            text-align: right;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSegment = (0, _styledComponents.default)(_semanticUiReact.Segment)(_templateObject());

var TableListRenderer =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TableListRenderer, _PureComponent);

  function TableListRenderer() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, TableListRenderer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TableListRenderer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getSettings", (0, _memoizeOne.default)(function (defaults, settings) {
      return (0, _objectSpread2.default)({}, defaults, settings);
    }));
    return _this;
  }

  (0, _createClass2.default)(TableListRenderer, [{
    key: "render",
    value: function render() {
      var className = this.props.className;
      var _this$settings = this.settings,
          columns = _this$settings.columns,
          displayHeaders = _this$settings.displayHeaders;
      return _react.default.createElement(StyledSegment, {
        vertical: true,
        className: (0, _classnames.default)(className, 'TableListRenderer ListRenderer')
      }, _react.default.createElement(_semanticUiReact.Table, null, displayHeaders && _react.default.createElement("thead", null, _react.default.createElement("tr", null, columns.map(function (column) {
        return _react.default.createElement("th", {
          key: "".concat(column.field, "--").concat(column.label),
          children: column.label,
          className: "column-".concat(column.field)
        });
      }))), _react.default.createElement("tbody", null, this.props.children)));
    }
  }, {
    key: "settings",
    get: function get() {
      return this.getSettings(_defaults.defaultListSettings, this.props.settings);
    }
  }]);
  return TableListRenderer;
}(_react.PureComponent);

exports.default = TableListRenderer;
(0, _defineProperty2.default)(TableListRenderer, "propTypes", {
  settings: _shapes.listSettingsShape,
  //
  className: _propTypes.default.string,
  children: _propTypes.default.node
});