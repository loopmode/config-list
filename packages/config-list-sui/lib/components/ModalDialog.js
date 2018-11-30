"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _semanticUiReact = require("semantic-ui-react");

var _AsyncState = _interopRequireDefault(require("./AsyncState"));

var _bind = _interopRequireDefault(require("@loopmode/config-list/lib/utils/bind"));

var ModalDialog =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ModalDialog, _PureComponent);
  (0, _createClass2.default)(ModalDialog, [{
    key: "registerChildData",
    value: function registerChildData(getChildData) {
      this.getChildData = getChildData;
    }
  }]);

  function ModalDialog(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, ModalDialog);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ModalDialog).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "getChildData", null);
    (0, _bind.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), /register/, /handle/);
    return _this;
  }

  (0, _createClass2.default)(ModalDialog, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          withChildData = _this$props.withChildData,
          item = _this$props.item,
          onConfirm = _this$props.onConfirm,
          onCancel = _this$props.onCancel,
          title = _this$props.title,
          children = _this$props.children,
          cancelProps = _this$props.cancelProps,
          confirmProps = _this$props.confirmProps,
          modalProps = (0, _objectWithoutProperties2.default)(_this$props, ["withChildData", "item", "onConfirm", "onCancel", "title", "children", "cancelProps", "confirmProps"]);
      return _react.default.createElement(_semanticUiReact.Modal, (0, _objectSpread2.default)({
        open: true
      }, modalProps), _react.default.createElement(_semanticUiReact.Modal.Header, null, title), _react.default.createElement(_semanticUiReact.Modal.Content, null, _react.default.createElement(_semanticUiReact.Modal.Description, null, this.renderContent(children))), _react.default.createElement(_semanticUiReact.Modal.Actions, null, _react.default.createElement(_AsyncState.default, null, _react.default.createElement(_semanticUiReact.Button, (0, _extends2.default)({
        children: 'Cancel',
        onClick: this.handleCancel
      }, cancelProps))), _react.default.createElement(_AsyncState.default, null, _react.default.createElement(_semanticUiReact.Button, (0, _extends2.default)({
        children: 'Confirm',
        onClick: this.handleConfirm
      }, confirmProps)))));
    }
  }, {
    key: "renderContent",
    value: function renderContent(children) {
      var childProps = {};

      if (this.props.withChildData) {
        childProps.modalParent = {
          registerChildData: this.registerChildData
        };
      }

      if (typeof children === 'function') {
        return children(childProps);
      } else {
        return _react.default.Children.map(children, function (child) {
          return _react.default.cloneElement(child, childProps);
        });
      }
    }
  }, {
    key: "getParams",
    value: function getParams(event) {
      var _this$props2 = this.props,
          item = _this$props2.item,
          withChildData = _this$props2.withChildData;
      var params = {
        event: event,
        item: item
      };

      if (withChildData) {
        if (this.getChildData) {
          Object.assign(params, this.getChildData());
        } else {
          console.warn('Expected a registered child but found none.', 'The child of this modal dialog should call this.props.parentModal.registerChildData(this, this.getData).');
        }
      }

      return params;
    }
  }, {
    key: "handleCancel",
    value: function handleCancel(event) {
      this.props.onCancel(this.getParams(event));
    }
  }, {
    key: "handleConfirm",
    value: function handleConfirm(event) {
      this.props.onConfirm(this.getParams(event));
    }
  }]);
  return ModalDialog;
}(_react.PureComponent);

exports.default = ModalDialog;
(0, _defineProperty2.default)(ModalDialog, "propTypes", {
  item: _propTypes.default.object,
  title: _propTypes.default.node,
  cancelProps: _propTypes.default.object,
  confirmProps: _propTypes.default.object,
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),
  onConfirm: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  withChildData: _propTypes.default.bool
});