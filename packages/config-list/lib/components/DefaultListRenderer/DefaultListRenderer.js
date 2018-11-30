"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FIELD_ACTIONS = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getDisplayValue = _interopRequireWildcard(require("../../utils/getDisplayValue"));

var _getValue = _interopRequireDefault(require("../../utils/getValue"));

var _bind = _interopRequireDefault(require("../../utils/bind"));

var _numItems = _interopRequireDefault(require("../../utils/numItems"));

var FIELD_ACTIONS = '$actions';
exports.FIELD_ACTIONS = FIELD_ACTIONS;

var DefaultListRenderer =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(DefaultListRenderer, _PureComponent);

  function DefaultListRenderer(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, DefaultListRenderer);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DefaultListRenderer).call(this, props, context));
    (0, _bind.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), /render[A-Z]/);
    return _this;
  }

  (0, _createClass2.default)(DefaultListRenderer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          items = _this$props.items,
          editItems = _this$props.editItems,
          columns = _this$props.columns,
          itemIdentifier = _this$props.itemIdentifier,
          _this$props$renderCol = _this$props.renderColumnValue,
          renderColumnValue = _this$props$renderCol === void 0 ? this.renderColumnValue : _this$props$renderCol,
          _this$props$renderAct = _this$props.renderActionButtons,
          renderActionButtons = _this$props$renderAct === void 0 ? this.renderActionButtons : _this$props$renderAct,
          _this$props$renderIte = _this$props.renderItemRow,
          renderItemRow = _this$props$renderIte === void 0 ? this.renderItemRow : _this$props$renderIte,
          _this$props$renderEdi = _this$props.renderEditorRow,
          renderEditorRow = _this$props$renderEdi === void 0 ? this.renderEditorRow : _this$props$renderEdi;
      var hasItems = (0, _numItems.default)(items) > 0 && (0, _numItems.default)(columns) > 0;

      if (!hasItems) {
        return _react.default.createElement(_semanticUiReact.Segment, {
          vertical: true
        }, (0, _getDisplayValue.default)(this.props.textNoSelection, this.props));
      }

      return _react.default.createElement("div", {
        className: "DefaultListRenderer ListRenderer"
      }, _react.default.createElement(_semanticUiReact.Segment, {
        vertical: true
      }, _react.default.createElement(_semanticUiReact.Table, null, _react.default.createElement("thead", null, _react.default.createElement("tr", null, columns.map(function (column) {
        return _react.default.createElement("th", {
          key: "".concat(column.field, "--").concat(column.label),
          children: column.label
        });
      }))), _react.default.createElement("tbody", null, items.map(function (item) {
        var id = (0, _getValue.default)(item, itemIdentifier);

        if (editItems && editItems.includes(id)) {
          return renderEditorRow((0, _objectSpread2.default)({
            id: id,
            item: item,
            renderColumnValue: renderColumnValue,
            renderActionButtons: renderActionButtons
          }, _this2.props));
        }

        return renderItemRow((0, _objectSpread2.default)({
          id: id,
          item: item,
          renderColumnValue: renderColumnValue,
          renderActionButtons: renderActionButtons
        }, _this2.props));
      })))));
    }
  }, {
    key: "renderItemRow",
    value: function renderItemRow(_ref) {
      var id = _ref.id,
          item = _ref.item,
          columns = _ref.columns,
          renderActionButtons = _ref.renderActionButtons,
          renderColumnValue = _ref.renderColumnValue,
          editable = _ref.editable,
          removable = _ref.removable,
          confirmRemove = _ref.confirmRemove;
      return _react.default.createElement("tr", {
        key: id
      }, columns.map(function (column) {
        var key = "".concat(id, "--").concat(column.field);

        if (column.field === FIELD_ACTIONS) {
          return _react.default.createElement("td", {
            key: key
          }, renderActionButtons({
            item: item,
            id: id,
            editable: editable,
            removable: removable,
            confirm: confirmRemove
          }));
        } else {
          return _react.default.createElement("td", {
            key: key
          }, renderColumnValue({
            column: column,
            item: item,
            id: id
          }));
        }
      }));
    }
  }, {
    key: "renderEditorRow",
    value: function renderEditorRow(_ref2) {
      var id = _ref2.id,
          item = _ref2.item,
          columns = _ref2.columns,
          Editor = _ref2.itemEditor,
          onEditConfirm = _ref2.onEditConfirm;
      return _react.default.createElement("tr", {
        key: id
      }, _react.default.createElement("td", {
        colSpan: columns.length
      }, Editor ? _react.default.createElement(Editor, {
        item: item,
        id: id,
        onSubmit: onEditConfirm
      }) : null));
    }
  }, {
    key: "renderColumnValue",
    value: function renderColumnValue(_ref3) {
      var item = _ref3.item,
          column = _ref3.column;
      var value = (0, _getValue.default)(item, column.field);
      return this.props.itemLabel({
        item: item,
        column: column,
        value: value
      });
    }
  }, {
    key: "renderActionButtons",
    value: function renderActionButtons(_ref4) {
      var _this3 = this;

      var editable = _ref4.editable,
          removable = _ref4.removable,
          id = _ref4.id,
          item = _ref4.item,
          confirm = _ref4.confirm;
      return _react.default.createElement("div", {
        className: "action-buttons"
      }, editable && this.renderEditButton({
        id: id,
        item: item,
        onClick: function onClick(event) {
          return _this3.props.onEdit({
            id: id,
            item: item,
            event: event
          });
        }
      }), removable && this.renderRemoveButton({
        id: id,
        item: item,
        confirm: confirm,
        onClick: function onClick(event) {
          return _this3.props.onRemove({
            id: id,
            item: item,
            event: event
          });
        }
      }));
    }
  }, {
    key: "renderEditButton",
    value: function renderEditButton(_ref5) {
      var onClick = _ref5.onClick;
      return _react.default.createElement(_semanticUiReact.Button, {
        icon: true,
        size: "mini",
        onClick: onClick,
        children: _react.default.createElement(_semanticUiReact.Icon, {
          name: "setting"
        })
      });
    }
  }, {
    key: "renderRemoveButton",
    value: function renderRemoveButton(_ref6) {
      var id = _ref6.id,
          confirm = _ref6.confirm,
          onClick = _ref6.onClick;
      return _react.default.createElement(_semanticUiReact.Button, {
        icon: true,
        size: "mini",
        color: confirm === id ? 'red' : undefined,
        onClick: onClick,
        children: _react.default.createElement(_semanticUiReact.Icon, {
          name: confirm === id ? 'check' : 'delete'
        })
      });
    }
  }]);
  return DefaultListRenderer;
}(_react.PureComponent);

exports.default = DefaultListRenderer;
(0, _defineProperty2.default)(DefaultListRenderer, "propTypes", {
  //
  editable: _propTypes.default.bool,
  removable: _propTypes.default.bool,
  // The ID of an item that needs removal confirmation
  confirmRemove: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  //
  onRemove: _propTypes.default.func,
  onEdit: _propTypes.default.func,
  onEditCancel: _propTypes.default.func,
  onEditConfirm: _propTypes.default.func,
  //
  editItems: _propTypes.default.array,
  items: _propTypes.default.array,
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({
    field: _propTypes.default.string,
    label: _propTypes.default.string
  })),
  //
  textNoSelection: _propTypes.default.func,
  itemEditor: _propTypes.default.func,
  itemLabel: _propTypes.default.func,
  itemIdentifier: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),
  renderEditorRow: _propTypes.default.func,
  renderItemRow: _propTypes.default.func,
  renderColumnValue: _propTypes.default.func,
  renderActionButtons: _propTypes.default.func,
  renderEditButton: _propTypes.default.func,
  renderRemoveButton: _propTypes.default.func
});
(0, _defineProperty2.default)(DefaultListRenderer, "defaultProps", {
  columns: [{
    field: 'label',
    label: 'Name'
  }, {
    field: FIELD_ACTIONS,
    label: 'Actions'
  }],
  itemLabel: function itemLabel(_ref7) {
    var value = _ref7.value;
    return value;
  }
});