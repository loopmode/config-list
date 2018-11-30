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

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    .ui.table thead,\n    .ui.table tbody {\n        td:last-child,\n        th:last-child {\n            text-align: right;\n        }\n    }\n"]);

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
    (0, _classCallCheck2.default)(this, TableListRenderer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TableListRenderer).apply(this, arguments));
  }

  (0, _createClass2.default)(TableListRenderer, [{
    key: "render",
    value: function render() {
      var className = this.props.className;
      var columns = this.props.parentProps.columns;
      return _react.default.createElement(StyledSegment, {
        vertical: true,
        className: (0, _classnames.default)(className, 'TableListRenderer ListRenderer')
      }, _react.default.createElement(_semanticUiReact.Table, null, _react.default.createElement("thead", null, _react.default.createElement("tr", null, columns.map(function (column) {
        return _react.default.createElement("th", {
          key: "".concat(column.field, "--").concat(column.label),
          children: column.label,
          className: "column-".concat(column.field)
        });
      }), _react.default.createElement("th", {
        children: 'Actions',
        className: "column-actions"
      }))), _react.default.createElement("tbody", null, this.props.children)));
    }
  }]);
  return TableListRenderer;
}(_react.PureComponent);

exports.default = TableListRenderer;
(0, _defineProperty2.default)(TableListRenderer, "propTypes", {
  //
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  //
  items: _propTypes.default.array,
  parentProps: _propTypes.default.shape({
    columns: _propTypes.default.arrayOf(_propTypes.default.shape({
      field: _propTypes.default.string,
      label: _propTypes.default.string
    }))
  })
});