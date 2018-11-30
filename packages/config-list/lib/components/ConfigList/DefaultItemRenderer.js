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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shapes = require("./shapes");

var _Fragment = _interopRequireDefault(require("./Fragment"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    display: flex;\n    flex-wrap: wrap;\n    .item-label {\n        flex: 1;\n    }\n    button.active {\n        color: deepskyblue;\n    }\n    button.remove-confirm {\n        color: red;\n    }\n    .item-editor-container {\n        flex-basis: 100%;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledListItem = _styledComponents.default.li(_templateObject());

var DefaultItemRenderer =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(DefaultItemRenderer, _PureComponent);

  function DefaultItemRenderer() {
    (0, _classCallCheck2.default)(this, DefaultItemRenderer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DefaultItemRenderer).apply(this, arguments));
  }

  (0, _createClass2.default)(DefaultItemRenderer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          item = _this$props.item,
          onEdit = _this$props.onEdit,
          onEditCancel = _this$props.onEditCancel,
          onRemove = _this$props.onRemove,
          onRemoveCancel = _this$props.onRemoveCancel,
          onRemoveConfirm = _this$props.onRemoveConfirm,
          isRemoving = _this$props.isRemoving,
          isEditing = _this$props.isEditing,
          editor = _this$props.editor;
      return _react.default.createElement(StyledListItem, null, _react.default.createElement("span", {
        className: "item-label"
      }, item.label), item.editable && _react.default.createElement("button", {
        className: (0, _classnames.default)('btn-edit', {
          active: isEditing
        }),
        onClick: function onClick(event) {
          if (isEditing) {
            onEditCancel({
              item: item,
              event: event
            });
          } else {
            onEdit({
              item: item,
              event: event
            });
          }
        },
        children: "\u270E"
      }), item.removable && !isRemoving && _react.default.createElement("button", {
        className: "btn-remove",
        onClick: function onClick(event) {
          return onRemove({
            item: item,
            event: event
          });
        },
        children: "\uD83D\uDDD9"
      }), item.removable && isRemoving && _react.default.createElement(_Fragment.default, null, _react.default.createElement("button", {
        className: "btn-remove-cancel",
        onClick: function onClick(event) {
          return onRemoveCancel({
            item: item,
            event: event
          });
        },
        children: "\u2715"
      }), _react.default.createElement("button", {
        className: "btn-remove-confirm",
        onClick: function onClick(event) {
          return onRemoveConfirm({
            item: item,
            event: event
          });
        },
        children: "\u2714"
      })), editor);
    }
  }]);
  return DefaultItemRenderer;
}(_react.PureComponent);

exports.default = DefaultItemRenderer;
(0, _defineProperty2.default)(DefaultItemRenderer, "propTypes", {
  item: _shapes.DataItemShape,
  isRemoving: _propTypes.default.bool,
  isEditing: _propTypes.default.bool,
  onEdit: _propTypes.default.func,
  onEditCancel: _propTypes.default.func,
  onRemove: _propTypes.default.func,
  onRemoveCancel: _propTypes.default.func,
  onRemoveConfirm: _propTypes.default.func,
  editor: _propTypes.default.element
});