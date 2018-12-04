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

var _classnames = _interopRequireDefault(require("classnames"));

var _Fragment = _interopRequireDefault(require("./Fragment"));

var _shapes = require("../utils/shapes");

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
          settings = _this$props.settings,
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
        return settings.getLabel(item);
      } : _this$props$ItemValue;
      var editable = this.resolveBool(this.props.editable);
      var removable = this.resolveBool(this.props.removable);
      return _react.default.createElement("li", null, _react.default.createElement("span", {
        className: "item-label"
      }, _react.default.createElement(ItemValueRenderer, this.props)), editable && _react.default.createElement("button", {
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
      }), removable && !isRemoving && _react.default.createElement("button", {
        className: "btn-remove",
        onClick: function onClick(event) {
          return onRemove({
            item: item,
            event: event
          });
        },
        children: "\u267B"
      }), removable && isRemoving && _react.default.createElement(_Fragment.default, null, _react.default.createElement("button", {
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
  }, {
    key: "resolveBool",
    value: function resolveBool(value) {
      if (typeof value === 'function') {
        return value(this.props);
      }

      return value === true;
    }
  }]);
  return ItemRenderer;
}(_react.PureComponent);

exports.default = ItemRenderer;
(0, _defineProperty2.default)(ItemRenderer, "propTypes", {
  item: _propTypes.default.object,
  settings: _shapes.settingsShape,
  editable: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  removable: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
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