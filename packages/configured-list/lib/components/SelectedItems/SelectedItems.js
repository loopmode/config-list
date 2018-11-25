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

var _semanticUiReact = require("semantic-ui-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getValue = _interopRequireDefault(require("../../utils/getValue"));

var _bindHandlers = _interopRequireDefault(require("../../utils/bindHandlers"));

var FIELD_ACTIONS = '$actions';

var SelectedItems =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(SelectedItems, _PureComponent);

  function SelectedItems(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, SelectedItems);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SelectedItems).call(this, props, context));
    (0, _bindHandlers.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), 'renderActionButtons');
    return _this;
  }

  (0, _createClass2.default)(SelectedItems, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          columns = _this$props.columns,
          editable = _this$props.editable,
          removeable = _this$props.removeable,
          _this$props$renderCol = _this$props.renderColumnValue,
          renderColumnValue = _this$props$renderCol === void 0 ? this.renderColumnValue : _this$props$renderCol,
          _this$props$renderAct = _this$props.renderActionButtons,
          renderActionButtons = _this$props$renderAct === void 0 ? this.renderActionButtons : _this$props$renderAct,
          itemIdentifier = _this$props.itemIdentifier;

      if (!items || !columns) {
        return null;
      }

      return _react.default.createElement(_semanticUiReact.Table, null, _react.default.createElement("thead", null, _react.default.createElement("tr", null, columns.map(function (column) {
        return _react.default.createElement("th", {
          key: "".concat(column.field, "--").concat(column.label),
          children: column.label
        });
      }))), _react.default.createElement("tbody", null, items.map(function (item) {
        var id = (0, _getValue.default)(item, itemIdentifier);
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
              removeable: removeable
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
      })));
    }
  }, {
    key: "renderColumnValue",
    value: function renderColumnValue(_ref) {
      var item = _ref.item,
          column = _ref.column;
      return (0, _getValue.default)(item, column.field);
    }
  }, {
    key: "renderActionButtons",
    value: function renderActionButtons(_ref2) {
      var _this2 = this;

      var editable = _ref2.editable,
          removeable = _ref2.removeable,
          id = _ref2.id,
          item = _ref2.item;
      return _react.default.createElement("div", {
        className: "action-buttons"
      }, editable && _react.default.createElement(_semanticUiReact.Button, {
        icon: true,
        size: "mini",
        onClick: function onClick() {
          return _this2.props.onEdit({
            id: id,
            item: item
          });
        },
        children: _react.default.createElement(_semanticUiReact.Icon, {
          name: "setting"
        })
      }), removeable && _react.default.createElement(_semanticUiReact.Button, {
        icon: true,
        size: "mini",
        onClick: function onClick() {
          return _this2.props.onRemove({
            id: id,
            item: item
          });
        },
        children: _react.default.createElement(_semanticUiReact.Icon, {
          name: "delete"
        })
      }));
    }
  }]);
  return SelectedItems;
}(_react.PureComponent);

exports.default = SelectedItems;
(0, _defineProperty2.default)(SelectedItems, "propTypes", {
  //
  editable: _propTypes.default.bool,
  removeable: _propTypes.default.bool,
  //
  onRemove: _propTypes.default.func,
  onEdit: _propTypes.default.func,
  //
  items: _propTypes.default.array,
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({
    field: _propTypes.default.string,
    label: _propTypes.default.string
  })),
  //
  itemIdentifier: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),
  renderColumnValue: _propTypes.default.func,
  renderActionButtons: _propTypes.default.func
});
(0, _defineProperty2.default)(SelectedItems, "defaultProps", {
  columns: [{
    field: 'label',
    label: 'Name'
  }, {
    field: '$actions',
    label: 'Actions'
  }]
});