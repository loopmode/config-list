"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _EditableList = _interopRequireDefault(require("./EditableList.styled"));

var _DefaultListRenderer = _interopRequireDefault(require("../DefaultListRenderer"));

var _DefaultSelectRenderer = _interopRequireDefault(require("../DefaultSelectRenderer"));

var _DeleteModal = _interopRequireDefault(require("../DeleteModal"));

var _EditModal = _interopRequireDefault(require("../EditModal"));

var _getDisplayValue = _interopRequireWildcard(require("../../utils/getDisplayValue"));

var _bind = _interopRequireDefault(require("../../utils/bind"));

var _classnames = _interopRequireDefault(require("classnames"));

var _clone = _interopRequireDefault(require("../../utils/clone"));

var _getValue = _interopRequireDefault(require("../../utils/getValue"));

var EditableList =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(EditableList, _PureComponent);

  function EditableList(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, EditableList);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(EditableList).call(this, props, context));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "state", {
      editors: [],
      confirmation: null
    });
    (0, _bind.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));
    return _this;
  }

  (0, _createClass2.default)(EditableList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._isMounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMounted = false;
      window.removeEventListener('click', this.handleGlobalClick);
    }
  }, {
    key: "setState",
    value: function setState(nextState) {
      this._isMounted && (0, _get2.default)((0, _getPrototypeOf2.default)(EditableList.prototype), "setState", this).call(this, nextState);
    }
  }, {
    key: "getDropdownItemConfig",
    value: function getDropdownItemConfig() {
      return {
        identifier: this.props.dropdownItemIdentifier || this.props.itemIdentifier,
        label: this.props.dropdownItemLabel || this.props.itemLabel,
        icon: this.props.dropdownItemIcon,
        disabled: this.props.dropdownItemDisabled,
        filter: this.props.dropdownItemFilter,
        selected: this.props.itemSelected
      };
    }
  }, {
    key: "getListItemConfig",
    value: function getListItemConfig() {
      return {
        identifier: this.props.listItemIdentifier || this.props.itemIdentifier,
        label: this.props.listItemLabel || this.props.itemLabel,
        filter: this.props.listItemFilter || this.props.itemFilter,
        icon: this.props.listItemIcon,
        disabled: this.props.listItemDisabled,
        selected: this.props.itemSelected
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          selectedItems = _this$props.selectedItems,
          className = _this$props.className;
      return _react.default.createElement(_EditableList.default, {
        className: (0, _classnames.default)('EditableList', className)
      }, _react.default.createElement(_DefaultSelectRenderer.default, {
        text: this.props.dropdownText,
        items: items,
        selectedItems: selectedItems,
        exclusive: this.props.dropdownExclusive,
        itemConfig: this.getDropdownItemConfig(),
        textNoItems: this.props.textNoItems,
        className: this.props.dropdownClassName,
        onSelect: this.props.onAdd
      }), _react.default.createElement(_DefaultListRenderer.default, {
        items: selectedItems,
        itemIdentifier: this.props.listItemIdentifier || this.props.itemIdentifier,
        itemLabel: this.props.listItemLabel || this.props.itemLabel,
        confirmText: this.props.textDeleteModalConfirm,
        editable: this.props.editable,
        removable: this.props.removable,
        onEdit: this.handleEdit,
        onRemove: this.handleRemove,
        confirmRemove: this.state.confirmation && !this.state.confirmModal ? this.state.confirmation.id : undefined,
        editItems: this.state.editModal ? undefined : this.state.editors.map(function (it) {
          return it.id;
        }),
        itemEditor: this.props.itemEditor,
        onEditCancel: this.handleEditCancel,
        onEditConfirm: this.handleEditConfirm
      }), this.state.confirmation && this.props.confirmModal && _react.default.createElement(_DeleteModal.default, {
        size: this.props.confirmModalSize,
        item: this.state.confirmation.item,
        itemLabel: this.props.itemLabel,
        itemID: this.state.confirmation.id,
        titleText: this.props.textDeleteModalTitle,
        contentText: this.props.textDeleteModalCOntent,
        cancelText: this.props.textDeleteModalCancel,
        textNoSelection: this.props.textNoSelection,
        onConfirm: this.handleRemoveConfirm,
        onCancel: this.handleRemoveCancel
      }), this.state.editors.length > 0 && this.props.editModal && _react.default.createElement(_EditModal.default, {
        itemEditor: this.props.itemEditor,
        size: this.props.editModalSize,
        item: this.state.editors[0],
        itemLabel: this.props.itemLabel,
        titleText: this.props.textEditModal,
        contentText: this.props.textEditModalTitle,
        cancelText: this.props.textEditModalCancel,
        confirmText: this.props.textEditModalConfirm,
        onConfirm: this.handleEditConfirm,
        onCancel: this.handleEditCancel
      }));
    } //-----------------------------------------------------
    //
    // handle edit
    //
    //-----------------------------------------------------

  }, {
    key: "handleEdit",
    value: function handleEdit(_ref) {
      var item = _ref.item;
      this.setState({
        editors: (0, _toConsumableArray2.default)(this.state.editors).concat([(0, _clone.default)(item)])
      });
    }
  }, {
    key: "handleEditCancel",
    value: function handleEditCancel(_ref2) {
      var item = _ref2.item;
      var itemIdentifier = this.props.listItemIdentifier || this.props.itemIdentifier;
      this.setState({
        editors: this.state.editors.filter(function (it) {
          return (0, _getValue.default)(it, itemIdentifier) !== (0, _getValue.default)(item, itemIdentifier);
        })
      });
    }
  }, {
    key: "handleEditConfirm",
    value: function handleEditConfirm(_ref3) {
      var item = _ref3.item,
          data = _ref3.data;
      var itemIdentifier = this.props.listItemIdentifier || this.props.itemIdentifier;
      this.setState({
        editors: this.state.editors.filter(function (it) {
          return (0, _getValue.default)(it, itemIdentifier) !== (0, _getValue.default)(item, itemIdentifier);
        })
      });
      this.props.onEdit({
        data: data,
        item: item
      });
    } //-----------------------------------------------------
    //
    // handle remove
    //
    //-----------------------------------------------------

  }, {
    key: "handleRemove",
    value: function handleRemove(_ref4) {
      var id = _ref4.id,
          item = _ref4.item,
          event = _ref4.event;

      // no confirmation - just remove it
      if (!this.props.confirmRemove) {
        this.handleRemoveConfirm({
          id: id,
          item: item
        });
        return;
      } // modal confirm dialog


      if (this.props.confirmModal) {
        this.setState({
          confirmation: {
            id: id,
            item: item
          }
        });
        return;
      } // inline-confirm button


      if (!this.state.confirmation) {
        // await confirmation or reset
        this.setState({
          confirmation: {
            id: id,
            item: item,
            button: event.target
          }
        });
        window.addEventListener('click', this.handleGlobalClick);
      } else if (this.state.confirmation.id === id) {
        // same button clicked, confirm remove
        this.handleRemoveConfirm({
          id: id,
          item: item
        });
        window.removeEventListener('click', this.handleGlobalClick);
      }
    }
  }, {
    key: "handleRemoveCancel",
    value: function handleRemoveCancel()
    /*{ id, item }*/
    {
      this.setState({
        confirmation: undefined
      });
    }
  }, {
    key: "handleRemoveConfirm",
    value: function handleRemoveConfirm(_ref5) {
      var id = _ref5.id,
          item = _ref5.item;
      this.setState({
        confirmation: undefined
      });
      this.props.onRemove({
        id: id,
        item: item
      });
    }
  }, {
    key: "handleGlobalClick",
    value: function handleGlobalClick(event) {
      if (!this.state.confirmation || !this.state.confirmation.button) {
        return;
      } // reset confirmation when clicked NOT on the same pending remove button


      if (event.target !== this.state.confirmation.button && !this.state.confirmation.button.contains(event.target)) {
        this.setState({
          confirmation: undefined
        });
      }
    }
  }]);
  return EditableList;
}(_react.PureComponent);

exports.default = EditableList;
(0, _defineProperty2.default)(EditableList, "propTypes", {
  className: _propTypes.default.string,
  // primary options
  items: _propTypes.default.array,
  selectedItems: _propTypes.default.array,
  editable: _propTypes.default.bool,
  removable: _propTypes.default.bool,
  // callbacks
  onAdd: _propTypes.default.func,
  onEdit: _propTypes.default.func,
  onRemove: _propTypes.default.func,
  // removal confirmation
  confirmRemove: _propTypes.default.bool,
  confirmModal: _propTypes.default.bool,
  confirmModalSize: _propTypes.default.string,
  itemEditor: _propTypes.default.oneOfType([_propTypes.default.func]),
  editModal: _propTypes.default.bool,
  editModalSize: _propTypes.default.string,
  // dropdown+list
  itemIdentifier: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),
  itemFilter: _propTypes.default.func,
  itemLabel: _propTypes.default.func,
  itemSelected: _propTypes.default.func,
  // dropdown options
  dropdownItemIdentifier: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),
  dropdownExclusive: _propTypes.default.bool,
  dropdownText: _propTypes.default.string,
  dropdownClassName: _propTypes.default.string,
  dropdownItemLabel: _propTypes.default.func,
  dropdownItemIcon: _propTypes.default.func,
  dropdownItemFilter: _propTypes.default.func,
  dropdownItemDisabled: _propTypes.default.func,
  // list options
  listItemIdentifier: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),
  listItemLabel: _propTypes.default.func,
  listItemDisabled: _propTypes.default.func,
  listClassName: _propTypes.default.string,
  listItemIcon: _propTypes.default.func,
  listItemFilter: _propTypes.default.func,
  // label renderer
  // text messages
  textNoItems: _getDisplayValue.displayValueShape,
  textNoSelection: _getDisplayValue.displayValueShape,
  textDeleteModalTitle: _getDisplayValue.displayValueShape,
  textDeleteModalCOntent: _getDisplayValue.displayValueShape,
  textDeleteModalCancel: _getDisplayValue.displayValueShape,
  textDeleteModalConfirm: _getDisplayValue.displayValueShape,
  textEditModal: _getDisplayValue.displayValueShape,
  textEditModalTitle: _getDisplayValue.displayValueShape,
  textEditModalCancel: _getDisplayValue.displayValueShape,
  textEditModalConfirm: _getDisplayValue.displayValueShape
});
(0, _defineProperty2.default)(EditableList, "defaultProps", {
  itemIdentifier: 'id',
  dropdownText: 'Select an item',
  textNoItems: 'No items to select',
  textNoSelection: 'No items selected'
});