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

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bind = _interopRequireDefault(require("@loopmode/config-list/lib/utils/bind"));

var _semanticUiReact = require("semantic-ui-react");

var _ModalDialog = _interopRequireDefault(require("./ModalDialog"));

/* eslint-disable react/prop-types */
var RemoveButton = function RemoveButton(_ref) {
  var onClick = _ref.onClick;
  return _react.default.createElement(_semanticUiReact.Button, {
    className: "btn-remove",
    icon: true,
    size: "mini",
    onClick: onClick,
    children: _react.default.createElement(_semanticUiReact.Icon, {
      name: 'minus circle'
    })
  });
};

var CancelButton = function CancelButton(_ref2) {
  var onClick = _ref2.onClick;
  return _react.default.createElement(_semanticUiReact.Button, {
    className: "btn-remove-cancel",
    icon: true,
    size: "mini",
    children: _react.default.createElement(_semanticUiReact.Icon, {
      name: 'cancel'
    }),
    onClick: onClick
  });
};

var ConfirmButton = function ConfirmButton(_ref3) {
  var onClick = _ref3.onClick;
  return _react.default.createElement(_semanticUiReact.Button, {
    className: "btn-remove-confirm",
    icon: true,
    size: "mini",
    color: 'red',
    onClick: onClick,
    children: _react.default.createElement(_semanticUiReact.Icon, {
      name: 'check'
    })
  });
};

var ConfirmModal = function ConfirmModal(_ref4) {
  var onConfirm = _ref4.onConfirm,
      onCancel = _ref4.onCancel,
      _ref4$title = _ref4.title,
      title = _ref4$title === void 0 ? 'Remove item' : _ref4$title,
      _ref4$content = _ref4.content,
      content = _ref4$content === void 0 ? 'Do you really want to remove this item?' : _ref4$content,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["onConfirm", "onCancel", "title", "content"]);
  return _react.default.createElement(_ModalDialog.default, (0, _extends2.default)({
    title: title,
    children: content,
    onConfirm: onConfirm,
    onCancel: onCancel
  }, props));
};
/* eslint-enable react/prop-types */


var ItemRemoveButtons =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ItemRemoveButtons, _PureComponent);

  function ItemRemoveButtons(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, ItemRemoveButtons);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ItemRemoveButtons).call(this, props, context));
    (0, _bind.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(ItemRemoveButtons, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          removable = _this$props.removable,
          isRemoving = _this$props.isRemoving,
          modalConfirm = _this$props.modalConfirm;

      if (!removable) {
        return null;
      }

      if (!isRemoving) {
        return _react.default.createElement(RemoveButton, {
          onClick: this.handleRemoveClick
        });
      }

      if (modalConfirm) {
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(RemoveButton, {
          onClick: this.handleRemoveClick
        }), _react.default.createElement(ConfirmModal, (0, _extends2.default)({
          item: this.props.item,
          onConfirm: this.handleConfirmClick,
          onCancel: this.handleCancelClick
        }, modalConfirm)));
      }

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(CancelButton, {
        onClick: this.handleCancelClick
      }), _react.default.createElement(ConfirmButton, {
        onClick: this.handleConfirmClick
      }));
    }
  }, {
    key: "handleRemoveClick",
    value: function handleRemoveClick(event) {
      var item = this.props.item;
      this.props.onRemove({
        item: item,
        event: event
      });
    }
  }, {
    key: "handleCancelClick",
    value: function handleCancelClick(event) {
      var item = this.props.item;
      this.props.onRemoveCancel({
        item: item,
        event: event
      });
    }
  }, {
    key: "handleConfirmClick",
    value: function handleConfirmClick(event) {
      var item = this.props.item;
      this.props.onRemoveConfirm({
        item: item,
        event: event
      });
    }
  }]);
  return ItemRemoveButtons;
}(_react.PureComponent);

exports.default = ItemRemoveButtons;
(0, _defineProperty2.default)(ItemRemoveButtons, "propTypes", {
  item: _propTypes.default.object,
  removable: _propTypes.default.bool,
  isRemoving: _propTypes.default.bool,
  onRemove: _propTypes.default.func,
  onRemoveCancel: _propTypes.default.func,
  onRemoveConfirm: _propTypes.default.func,
  modalConfirm: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.object])
});