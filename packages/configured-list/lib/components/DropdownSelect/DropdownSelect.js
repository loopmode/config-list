"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _getValue = _interopRequireDefault(require("../../utils/getValue"));

var _getDisplayValue = _interopRequireWildcard(require("../../utils/getDisplayValue"));

var _DropdownSelect = _interopRequireDefault(require("./DropdownSelect.styled"));

var DropdownSelect =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(DropdownSelect, _PureComponent);

  function DropdownSelect() {
    (0, _classCallCheck2.default)(this, DropdownSelect);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DropdownSelect).apply(this, arguments));
  }

  (0, _createClass2.default)(DropdownSelect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          nothingSelectableText = _this$props.nothingSelectableText,
          onSelectItem = _this$props.onSelectItem,
          itemIdentifier = _this$props.itemIdentifier,
          _this$props$itemIcon = _this$props.itemIcon,
          itemIcon = _this$props$itemIcon === void 0 ? this.itemIcon : _this$props$itemIcon,
          _this$props$itemLabel = _this$props.itemLabel,
          itemLabel = _this$props$itemLabel === void 0 ? this.itemLabel : _this$props$itemLabel,
          _this$props$itemFilte = _this$props.itemFilter,
          itemFilter = _this$props$itemFilte === void 0 ? this.itemFilter : _this$props$itemFilte,
          _this$props$itemSelec = _this$props.itemSelected,
          itemSelected = _this$props$itemSelec === void 0 ? this.itemSelected : _this$props$itemSelec,
          exclusive = _this$props.exclusive,
          items = _this$props.items,
          dropdownIcon = _this$props.dropdownIcon,
          selectedItems = _this$props.selectedItems,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["nothingSelectableText", "onSelectItem", "itemIdentifier", "itemIcon", "itemLabel", "itemFilter", "itemSelected", "exclusive", "items", "dropdownIcon", "selectedItems"]);
      var itemsToRender = items && items.filter(itemFilter);

      if (exclusive && itemsToRender) {
        itemsToRender = itemsToRender.filter(function (item) {
          return !itemSelected(item, selectedItems, itemIdentifier);
        });
      }

      return _react.default.createElement(_DropdownSelect.default, (0, _extends2.default)({
        icon: dropdownIcon,
        floating: true,
        labeled: true,
        button: true
      }, props), _react.default.createElement(_semanticUiReact.Dropdown.Menu, null, itemsToRender && itemsToRender.map(function (item) {
        var id = (0, _getValue.default)(item, itemIdentifier);
        var isSelected = itemSelected(item, selectedItems, itemIdentifier);
        return _react.default.createElement(_semanticUiReact.Dropdown.Item, {
          key: id,
          onClick: function onClick() {
            return onSelectItem({
              item: item,
              id: id
            });
          },
          disabled: isSelected,
          icon: itemIcon && itemIcon(item, isSelected),
          text: itemLabel && itemLabel(item, isSelected)
        });
      }), (!items || !this.hasItems(itemsToRender)) && _react.default.createElement(_semanticUiReact.Dropdown.Item, {
        disabled: true,
        text: (0, _getDisplayValue.default)(nothingSelectableText, this.props)
      })));
    }
  }, {
    key: "hasItems",
    value: function hasItems(items) {
      if (!items) {
        return false;
      }

      if (items.toJS) {
        return items.size > 0;
      }

      return items.length > 0;
    }
  }, {
    key: "itemFilter",
    value: function itemFilter()
    /*item*/
    {
      return true;
    }
  }, {
    key: "itemLabel",
    value: function itemLabel(item
    /*, isSelected*/
    ) {
      return (0, _getValue.default)(item, 'label') || (0, _getValue.default)(item, 'name');
    }
  }, {
    key: "itemIcon",
    value: function itemIcon(item, isSelected) {
      return isSelected ? 'check circle outline' : 'circle outline';
    }
  }, {
    key: "itemSelected",
    value: function itemSelected(item, selectedItems, itemIdentifier) {
      if (!item || !selectedItems) {
        return false;
      }

      var itemID = (0, _getValue.default)(item, itemIdentifier);

      var hasTargetID = function hasTargetID(it) {
        return (0, _getValue.default)(it, itemIdentifier) === itemID;
      };

      if (selectedItems.find(hasTargetID)) {
        return true;
      }

      return false;
    }
  }]);
  return DropdownSelect;
}(_react.PureComponent);

exports.default = DropdownSelect;
(0, _defineProperty2.default)(DropdownSelect, "propTypes", {
  className: _propTypes.default.string,
  selectedItems: _propTypes.default.array,
  items: _propTypes.default.array,
  dropdownIcon: _propTypes.default.string,
  // only shows items in dropdown that are not already selected
  exclusive: _propTypes.default.bool,
  nothingSelectableText: _getDisplayValue.displayValueShape,
  itemFilter: _propTypes.default.func,
  itemIdentifier: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),
  onSelectItem: _propTypes.default.func,
  itemLabel: _propTypes.default.func,
  itemSelected: _propTypes.default.func
});
(0, _defineProperty2.default)(DropdownSelect, "defaultProps", {
  onSelectItem: function onSelectItem() {},
  className: 'icon',
  dropdownIcon: 'add circle',
  nothingSelectableText: '-'
});