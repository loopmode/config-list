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

var _semanticUiReact = require("semantic-ui-react");

var _reactImmutableProptypes = _interopRequireDefault(require("react-immutable-proptypes"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Assigneditems =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Assigneditems, _PureComponent);

  function Assigneditems() {
    (0, _classCallCheck2.default)(this, Assigneditems);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Assigneditems).apply(this, arguments));
  }

  (0, _createClass2.default)(Assigneditems, [{
    key: "render",
    value: function render() {
      var _this = this;

      var items = this.props.items;

      if (!items) {
        return null;
      }

      return _react.default.createElement(_semanticUiReact.Table, null, _react.default.createElement("thead", null, _react.default.createElement("tr", null, _react.default.createElement("th", null, "name"), _react.default.createElement("th", null, "actions"))), _react.default.createElement("tbody", null, items.keySeq().map(function (id) {
        return _react.default.createElement("tr", {
          key: id
        }, _react.default.createElement("td", null, items.getIn([id, 'targetName'])), _react.default.createElement("td", null, _react.default.createElement(_semanticUiReact.Button, {
          icon: true,
          size: "mini",
          onClick: function onClick() {
            return _this.props.onEdit(items.get(id));
          },
          children: _react.default.createElement(_semanticUiReact.Icon, {
            name: "setting"
          })
        }), _react.default.createElement(_semanticUiReact.Button, {
          icon: true,
          size: "mini",
          onClick: function onClick() {
            return _this.props.onRemove(items.get(id));
          },
          children: _react.default.createElement(_semanticUiReact.Icon, {
            name: "delete"
          })
        })));
      })));
    }
  }]);
  return Assigneditems;
}(_react.PureComponent);

exports.default = Assigneditems;
(0, _defineProperty2.default)(Assigneditems, "propTypes", {
  items: _reactImmutableProptypes.default.map,
  onRemove: _propTypes.default.func,
  onEdit: _propTypes.default.func
});