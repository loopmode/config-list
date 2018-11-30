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

var _semanticUiReact = require("semantic-ui-react");

var _bind = _interopRequireDefault(require("config-list/lib/utils/bind"));

var ItemEditButtons =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ItemEditButtons, _PureComponent);

  function ItemEditButtons(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, ItemEditButtons);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ItemEditButtons).call(this, props, context));
    (0, _bind.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(ItemEditButtons, [{
    key: "render",
    value: function render() {
      var editable = this.props.editable;

      if (!editable) {
        return null;
      }

      return this.renderEditButton();
    }
  }, {
    key: "renderEditButton",
    value: function renderEditButton() {
      var isEditing = this.props.isEditing;
      return _react.default.createElement(_semanticUiReact.Button, {
        className: "btn-edit",
        icon: true,
        size: "mini",
        active: isEditing,
        children: _react.default.createElement(_semanticUiReact.Icon, {
          name: "setting"
        }),
        onClick: this.handleEditClick
      });
    }
  }, {
    key: "handleEditClick",
    value: function handleEditClick(event) {
      var _this$props = this.props,
          isEditing = _this$props.isEditing,
          item = _this$props.item;

      if (isEditing) {
        this.props.onEditCancel({
          item: item,
          event: event
        });
      } else {
        this.props.onEdit({
          item: item,
          event: event
        });
      }
    }
  }]);
  return ItemEditButtons;
}(_react.PureComponent);

exports.default = ItemEditButtons;
(0, _defineProperty2.default)(ItemEditButtons, "propTypes", {
  item: _propTypes.default.object,
  editable: _propTypes.default.bool,
  editor: _propTypes.default.element,
  isEditing: _propTypes.default.bool,
  isRemoving: _propTypes.default.bool,
  onEdit: _propTypes.default.func,
  onEditCancel: _propTypes.default.func,
  onRemove: _propTypes.default.func,
  onRemoveCancel: _propTypes.default.func,
  onRemoveConfirm: _propTypes.default.func,
  parentProps: _propTypes.default.shape({
    columns: _propTypes.default.array,
    modalConfirm: _propTypes.default.bool
  })
});