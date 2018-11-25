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

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _ConfiguredList = _interopRequireDefault(require("./ConfiguredList.styled"));

var _SelectedItems = _interopRequireDefault(require("../SelectedItems"));

var _DropdownSelect = _interopRequireDefault(require("../DropdownSelect"));

var _DeleteModal = _interopRequireDefault(require("../DeleteModal"));

var _getDisplayValue = _interopRequireWildcard(require("../../utils/getDisplayValue"));

var _bind = _interopRequireDefault(require("../../utils/bind"));

var ConfiguredList =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(ConfiguredList, _PureComponent);

  function ConfiguredList(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, ConfiguredList);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ConfiguredList).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "offsetSliderSettings", {
      min: 0,
      max: 100,
      step: 1
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      confirmRemove: undefined
    });
    (0, _bind.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(ConfiguredList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
    }
  }, {
    key: "setState",
    value: function setState(nextState) {
      this._isMounted && (0, _get2.default)((0, _getPrototypeOf2.default)(ConfiguredList.prototype), "setState", this).call(this, nextState);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          nothingSelectableText = _this$props.nothingSelectableText,
          nothingSelectedText = _this$props.nothingSelectedText,
          items = _this$props.items,
          selectedItems = _this$props.selectedItems,
          className = _this$props.className;
      var hasSelectableItems = items && items.length > 0;
      var hasSelectedItems = selectedItems && selectedItems.length > 0;
      return _react.default.createElement(_ConfiguredList.default, {
        className: "ConfiguredList ".concat(className || '')
      }, hasSelectableItems ? _react.default.createElement(_semanticUiReact.Form.Field, null, _react.default.createElement(_DropdownSelect.default, {
        text: this.props.dropdownText,
        items: items,
        selectedItems: selectedItems,
        exclusive: this.props.dropdownExclusive,
        itemIdentifier: this.props.dropdownItemIdentifier || this.props.itemIdentifier,
        itemIcon: this.props.dropdownItemIcon,
        itemDisabled: this.props.dropdownItemDisabled,
        itemLabel: this.props.itemLabel,
        itemFilter: this.props.dropdownItemFilter,
        itemSelected: this.props.dropdownItemSelected,
        nothingSelectableText: this.props.nothingSelectableText,
        className: this.props.dropdownClassName,
        onSelectItem: this.props.onAdd
      })) : _react.default.createElement(_semanticUiReact.Form.Field, null, (0, _getDisplayValue.default)(nothingSelectableText, this.props)), hasSelectedItems ? _react.default.createElement(_semanticUiReact.Form.Field, null, _react.default.createElement(_SelectedItems.default, {
        items: selectedItems,
        itemIdentifier: this.props.listItemIdentifier || this.props.itemIdentifier,
        editable: this.props.editable,
        removeable: this.props.removeable,
        onEdit: this.props.onEdit,
        onRemove: this.handleRemove
      })) : _react.default.createElement(_semanticUiReact.Form.Field, null, (0, _getDisplayValue.default)(nothingSelectedText, this.props)), this.state.confirmRemove && _react.default.createElement(_DeleteModal.default, {
        item: this.state.confirmRemove.item,
        itemLabel: this.props.itemLabel,
        itemID: this.state.confirmRemove.id,
        titleText: this.props.confirmDeleteTitleText,
        contentText: this.props.confirmDeleteContentText,
        cancelText: this.props.confirmDeleteCancelText,
        confirmText: this.props.confirmDeleteConfirmText,
        onConfirm: this.handleRemoveConfirm,
        onCancel: this.handleRemoveCancel
      }));
    }
  }, {
    key: "handleRemove",
    value: function handleRemove(_ref) {
      var id = _ref.id,
          item = _ref.item;

      if (this.props.confirmRemove) {
        this.setState({
          confirmRemove: {
            id: id,
            item: item
          }
        });
      } else {
        this.handleRemoveConfirm({
          id: id,
          item: item
        });
      }
    }
  }, {
    key: "handleRemoveCancel",
    value: function handleRemoveCancel()
    /*{ id, item }*/
    {
      this.setState({
        confirmRemove: undefined
      });
    }
  }, {
    key: "handleRemoveConfirm",
    value: function handleRemoveConfirm(_ref2) {
      var id = _ref2.id,
          item = _ref2.item;
      this.props.onRemove({
        id: id,
        item: item
      });
      this.setState({
        confirmRemove: undefined
      });
    }
  }]);
  return ConfiguredList;
}(_react.PureComponent);

exports.default = ConfiguredList;
(0, _defineProperty2.default)(ConfiguredList, "propTypes", {
  items: _propTypes.default.array,
  selectedItems: _propTypes.default.array,
  className: _propTypes.default.string,
  editable: _propTypes.default.bool,
  removeable: _propTypes.default.bool,
  onAdd: _propTypes.default.func,
  onEdit: _propTypes.default.func,
  onRemove: _propTypes.default.func,
  itemLabel: _propTypes.default.func,
  confirmRemove: _propTypes.default.bool,
  dropdownExclusive: _propTypes.default.bool,
  dropdownText: _propTypes.default.string,
  dropdownClassName: _propTypes.default.string,
  dropdownItemIcon: _propTypes.default.func,
  dropdownItemFilter: _propTypes.default.func,
  dropdownItemDisabled: _propTypes.default.func,
  dropdownItemSelected: _propTypes.default.func,
  nothingSelectableText: _getDisplayValue.displayValueShape,
  nothingSelectedText: _getDisplayValue.displayValueShape,
  confirmDeleteTitleText: _getDisplayValue.displayValueShape,
  confirmDeleteContentText: _getDisplayValue.displayValueShape,
  confirmDeleteCancelText: _getDisplayValue.displayValueShape,
  confirmDeleteConfirmText: _getDisplayValue.displayValueShape,
  itemIdentifier: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),
  dropdownItemIdentifier: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),
  listItemIdentifier: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string])
});
(0, _defineProperty2.default)(ConfiguredList, "defaultProps", {
  itemIdentifier: 'id',
  dropdownText: 'Select an item',
  nothingSelectableText: 'No items to select',
  nothingSelectedText: 'No items selected'
});