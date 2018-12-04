"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _bind = _interopRequireDefault(require("@loopmode/config-list/lib/utils/bind"));

var _shapes = require("@loopmode/config-list/lib/utils/shapes");

var _ItemEditButtons = _interopRequireDefault(require("./ItemEditButtons"));

var _ItemRemoveButtons = _interopRequireDefault(require("./ItemRemoveButtons"));

var _ModalDialog = _interopRequireDefault(require("./ModalDialog"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    td {\n        padding-top: 0 !important;\n        border-top: 0 !important;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var EditorRow = _styledComponents.default.tr(_templateObject());

var Fragment = _react.default.Fragment || 'div';

var TableItemRenderer =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(TableItemRenderer, _PureComponent);

  function TableItemRenderer(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, TableItemRenderer);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TableItemRenderer).call(this, props, context));
    (0, _bind.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(TableItemRenderer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          item = _this$props.item,
          settings = _this$props.settings,
          _this$props$ItemValue = _this$props.ItemValueRenderer,
          ItemValueRenderer = _this$props$ItemValue === void 0 ? function (_ref) {
        var item = _ref.item;
        return settings.label(item);
      } : _this$props$ItemValue;
      var _this$props$parentPro = this.props.parentProps,
          columns = _this$props$parentPro.columns,
          modalConfirm = _this$props$parentPro.modalConfirm,
          modalEdit = _this$props$parentPro.modalEdit;
      var editable = this.resolveBool(this.props.editable);
      var removable = this.resolveBool(this.props.removable);
      return _react.default.createElement(Fragment, null, _react.default.createElement("tr", {
        className: "item-row"
      }, columns.map(function (column) {
        return _react.default.createElement("td", {
          key: "".concat(settings.key(item), "--").concat(column.field),
          className: "column-".concat(column.field)
        }, _react.default.createElement(ItemValueRenderer, _this2.props));
      }), _react.default.createElement("td", {
        className: "column-actions"
      }, (editable || removable) && _react.default.createElement("div", {
        className: "action-buttons"
      }, _react.default.createElement(_ItemEditButtons.default, {
        item: this.props.item,
        editable: editable,
        isEditing: this.props.isEditing,
        onEdit: this.props.onEdit,
        onEditCancel: this.props.onEditCancel
      }), _react.default.createElement(_ItemRemoveButtons.default, {
        item: this.props.item,
        removable: removable,
        isRemoving: this.props.isRemoving,
        onRemove: this.props.onRemove,
        onRemoveCancel: this.props.onRemoveCancel,
        onRemoveConfirm: this.props.onRemoveConfirm,
        modalConfirm: modalConfirm
      })))), this.props.isEditing && _react.default.createElement(EditorRow, {
        className: (0, _classnames.default)('editor-row', {
          hidden: modalEdit
        })
      }, _react.default.createElement("td", {
        colSpan: columns.length + 1
      }, modalEdit ? _react.default.createElement(_ModalDialog.default, (0, _extends2.default)({
        withChildData: true,
        children: this.props.editor,
        item: this.props.item,
        title: modalEdit.title || 'Edit item',
        onConfirm: this.props.onEditConfirm,
        onCancel: this.props.onEditCancel
      }, modalEdit)) : this.props.editor)));
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
  return TableItemRenderer;
}(_react.PureComponent);

exports.default = TableItemRenderer;
(0, _defineProperty2.default)(TableItemRenderer, "propTypes", {
  item: _propTypes.default.object,
  editable: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  removable: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.bool]),
  ItemValueRenderer: _propTypes.default.func,
  settings: _shapes.settingsShape,
  editor: _propTypes.default.element,
  isEditing: _propTypes.default.bool,
  isRemoving: _propTypes.default.bool,
  onEdit: _propTypes.default.func,
  onEditCancel: _propTypes.default.func,
  onEditConfirm: _propTypes.default.func,
  onRemove: _propTypes.default.func,
  onRemoveCancel: _propTypes.default.func,
  onRemoveConfirm: _propTypes.default.func,
  parentProps: _propTypes.default.shape({
    columns: _propTypes.default.array,
    modalConfirm: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.object]),
    modalEdit: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.object])
  })
});
(0, _defineProperty2.default)(TableItemRenderer, "defaultProps", {
  editor: _react.default.createElement("div", null, "No ", _react.default.createElement("code", null, "ItemEditor"), " provided")
});