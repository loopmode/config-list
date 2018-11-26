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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _AsyncState = _interopRequireDefault(require("../AsyncState"));

var _getValue = _interopRequireDefault(require("../../utils/getValue"));

var _getDisplayValue = _interopRequireWildcard(require("../../utils/getDisplayValue"));

var _bind = _interopRequireDefault(require("../../utils/bind"));

var DeleteModal =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(DeleteModal, _PureComponent);

  function DeleteModal(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, DeleteModal);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DeleteModal).call(this, props, context));
    (0, _bind.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(DeleteModal, [{
    key: "render",
    value: function render() {
      var titleText = (0, _getDisplayValue.default)(this.props.titleText, this.props);
      var contentText = (0, _getDisplayValue.default)(this.props.contentText, this.props);
      return _react.default.createElement(_semanticUiReact.Modal, {
        open: true,
        size: "tiny",
        onClose: this.props.onCancel
      }, titleText && _react.default.createElement(_semanticUiReact.Modal.Header, null, titleText), contentText && _react.default.createElement(_semanticUiReact.Modal.Content, null, contentText), _react.default.createElement(_semanticUiReact.Modal.Actions, null, _react.default.createElement(_semanticUiReact.Button, {
        onClick: this.handleCancel
      }, (0, _getDisplayValue.default)(this.props.cancelText, this.props)), _react.default.createElement(_AsyncState.default, null, _react.default.createElement(_semanticUiReact.Button, {
        negative: true,
        onClick: this.handleConfirm
      }, (0, _getDisplayValue.default)(this.props.confirmText, this.props)))));
    }
  }, {
    key: "handleCancel",
    value: function handleCancel() {
      return this.props.onCancel({
        item: this.props.item,
        id: this.props.itemID
      });
    }
  }, {
    key: "handleConfirm",
    value: function handleConfirm() {
      return this.props.onConfirm({
        item: this.props.item,
        id: this.props.itemID
      });
    }
  }]);
  return DeleteModal;
}(_react.PureComponent);

exports.default = DeleteModal;
(0, _defineProperty2.default)(DeleteModal, "propTypes", {
  item: _propTypes.default.object,
  itemID: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  onConfirm: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  titleText: _getDisplayValue.displayValueShape,
  contentText: _getDisplayValue.displayValueShape,
  confirmText: _getDisplayValue.displayValueShape,
  cancelText: _getDisplayValue.displayValueShape,
  itemLabel: _propTypes.default.func
});
(0, _defineProperty2.default)(DeleteModal, "defaultProps", {
  titleText: 'Remove item',
  contentText: function contentText(_ref) {
    var item = _ref.item;
    return "Do you want to remove \"".concat((0, _getValue.default)(item, 'label') || (0, _getValue.default)(item, 'name'), "\"?");
  },
  cancelText: 'Cancel',
  confirmText: 'Remove'
});