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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _AsyncState = _interopRequireDefault(require("../AsyncState"));

var _getDisplayValue = _interopRequireWildcard(require("../../utils/getDisplayValue"));

var _bind = _interopRequireDefault(require("../../utils/bind"));

// import getValue from '../../utils/getValue';
var EditModal =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(EditModal, _PureComponent);

  function EditModal(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, EditModal);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(EditModal).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      data: null
    });
    _this.state.data = props.item;
    (0, _bind.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(EditModal, [{
    key: "render",
    value: function render() {
      var titleText = (0, _getDisplayValue.default)(this.props.titleText, this.props);
      var contentText = (0, _getDisplayValue.default)(this.props.contentText, this.props);
      var Editor = this.props.itemEditor;
      return _react.default.createElement(_semanticUiReact.Modal, {
        open: true,
        size: this.props.size,
        onClose: this.props.onCancel
      }, titleText && _react.default.createElement(_semanticUiReact.Modal.Header, null, titleText), _react.default.createElement(_semanticUiReact.Modal.Content, null, contentText && _react.default.createElement("p", null, contentText), _react.default.createElement(Editor, {
        item: this.state.data,
        onChange: this.handleChange,
        onSubmit: this.handleConfirm
      })), _react.default.createElement(_semanticUiReact.Modal.Actions, null, _react.default.createElement(_semanticUiReact.Button, {
        onClick: this.handleCancel
      }, (0, _getDisplayValue.default)(this.props.cancelText, this.props)), _react.default.createElement(_AsyncState.default, null, _react.default.createElement(_semanticUiReact.Button, {
        positive: true,
        onClick: this.handleConfirm
      }, (0, _getDisplayValue.default)(this.props.confirmText, this.props)))));
    }
  }, {
    key: "handleChange",
    value: function handleChange(change) {
      this.setState({
        data: (0, _objectSpread2.default)({}, this.state.data, change)
      });
    }
  }, {
    key: "handleCancel",
    value: function handleCancel() {
      return this.props.onCancel({
        item: this.props.item,
        data: this.state.data
      });
    }
  }, {
    key: "handleConfirm",
    value: function handleConfirm() {
      return this.props.onConfirm({
        item: this.props.item,
        data: this.state.data
      });
    }
  }]);
  return EditModal;
}(_react.PureComponent);

exports.default = EditModal;
(0, _defineProperty2.default)(EditModal, "propTypes", {
  itemEditor: _propTypes.default.func,
  size: _propTypes.default.string,
  item: _propTypes.default.object,
  onConfirm: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  titleText: _getDisplayValue.displayValueShape,
  contentText: _getDisplayValue.displayValueShape,
  confirmText: _getDisplayValue.displayValueShape,
  cancelText: _getDisplayValue.displayValueShape,
  itemLabel: _propTypes.default.func
});
(0, _defineProperty2.default)(EditModal, "defaultProps", {
  titleText: 'Edit item',
  contentText: null,
  cancelText: 'Cancel',
  confirmText: 'Save',
  size: 'mini'
});