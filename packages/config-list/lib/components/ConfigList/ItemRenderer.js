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

var _shapes = require("../../utils/shapes");

var _Fragment = _interopRequireDefault(require("./Fragment"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    display: flex;\n    flex-wrap: wrap;\n    .item-label {\n        flex: 1;\n    }\n    > button {\n        &.active {\n            color: deepskyblue;\n        }\n        &.btn-remove-confirm {\n            color: red;\n        }\n        & + button {\n            margin-left: 5px;\n        }\n        // target the editor without making assumptions about its tag or class\n        & + *:last-child:not(button) {\n            margin-top: 5px;\n            flex-basis: 100%;\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledListItem = _styledComponents.default.li(_templateObject());

var ItemRenderer =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ItemRenderer, _PureComponent);

  function ItemRenderer() {
    (0, _classCallCheck2.default)(this, ItemRenderer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ItemRenderer).apply(this, arguments));
  }

  (0, _createClass2.default)(ItemRenderer, [{
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
          editor = _this$props.editor,
          _this$props$ItemValue = _this$props.ItemValueRenderer,
          ItemValueRenderer = _this$props$ItemValue === void 0 ? function (_ref) {
        var item = _ref.item;
        return item.label;
      } : _this$props$ItemValue;
      return _react.default.createElement(StyledListItem, null, _react.default.createElement("span", {
        className: "item-label"
      }, _react.default.createElement(ItemValueRenderer, this.props)), item.editable && _react.default.createElement("button", {
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
        children: "\u267B"
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
  return ItemRenderer;
}(_react.PureComponent);

exports.default = ItemRenderer;
(0, _defineProperty2.default)(ItemRenderer, "propTypes", {
  item: _shapes.DataItemShape,
  ItemValueRenderer: _propTypes.default.func,
  isRemoving: _propTypes.default.bool,
  isEditing: _propTypes.default.bool,
  onEdit: _propTypes.default.func,
  onEditCancel: _propTypes.default.func,
  onRemove: _propTypes.default.func,
  onRemoveCancel: _propTypes.default.func,
  onRemoveConfirm: _propTypes.default.func,
  editor: _propTypes.default.element
});