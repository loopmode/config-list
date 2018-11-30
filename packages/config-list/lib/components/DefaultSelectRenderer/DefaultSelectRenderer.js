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

var _numItems = _interopRequireDefault(require("../../utils/numItems"));

var _getValue = _interopRequireDefault(require("../../utils/getValue"));

var _getDisplayValue = _interopRequireWildcard(require("../../utils/getDisplayValue"));

var _DefaultSelectRenderer = _interopRequireDefault(require("./DefaultSelectRenderer.styled"));

var DefaultSelectRenderer =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(DefaultSelectRenderer, _PureComponent);

  function DefaultSelectRenderer() {
    (0, _classCallCheck2.default)(this, DefaultSelectRenderer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DefaultSelectRenderer).apply(this, arguments));
  }

  (0, _createClass2.default)(DefaultSelectRenderer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          textNoItems = _this$props.textNoItems,
          onSelect = _this$props.onSelect,
          itemConfig = _this$props.itemConfig,
          exclusive = _this$props.exclusive,
          items = _this$props.items,
          dropdownIcon = _this$props.dropdownIcon,
          selectedItems = _this$props.selectedItems,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["textNoItems", "onSelect", "itemConfig", "exclusive", "items", "dropdownIcon", "selectedItems"]);
      var identifier = itemConfig.identifier,
          _itemConfig$disabled = itemConfig.disabled,
          disabled = _itemConfig$disabled === void 0 ? this.defaultItemDisabled : _itemConfig$disabled,
          _itemConfig$icon = itemConfig.icon,
          icon = _itemConfig$icon === void 0 ? this.defaultItemIcon : _itemConfig$icon,
          _itemConfig$label = itemConfig.label,
          label = _itemConfig$label === void 0 ? this.defaultItemLabel : _itemConfig$label,
          _itemConfig$filter = itemConfig.filter,
          filter = _itemConfig$filter === void 0 ? this.defaultItemFilter : _itemConfig$filter,
          _itemConfig$selected = itemConfig.selected,
          selected = _itemConfig$selected === void 0 ? this.defaultItemSelected : _itemConfig$selected;
      var itemsToRender = items && items.filter(filter);

      if (exclusive && itemsToRender) {
        itemsToRender = itemsToRender.filter(function (item) {
          return !selected({
            item: item,
            selectedItems: selectedItems,
            identifier: identifier
          });
        });
      }

      var hasItems = (0, _numItems.default)(itemsToRender) > 0;

      if (!hasItems) {
        return _react.default.createElement(_DefaultSelectRenderer.default, {
          vertical: true
        }, (0, _getDisplayValue.default)(textNoItems, this.props));
      }

      return _react.default.createElement(_DefaultSelectRenderer.default, null, _react.default.createElement(_semanticUiReact.Segment, {
        vertical: true
      }, _react.default.createElement(_semanticUiReact.Dropdown, (0, _extends2.default)({
        icon: dropdownIcon,
        floating: true,
        labeled: true,
        button: true
      }, props), _react.default.createElement(_semanticUiReact.Dropdown.Menu, null, itemsToRender && itemsToRender.map(function (item) {
        var id = (0, _getValue.default)(item, identifier);
        var isSelected = selected({
          item: item,
          selectedItems: selectedItems,
          identifier: identifier
        });
        return _react.default.createElement(_semanticUiReact.Dropdown.Item, {
          key: id,
          onClick: function onClick() {
            return onSelect({
              item: item,
              id: id
            });
          },
          disabled: disabled && disabled({
            item: item,
            isSelected: isSelected
          }),
          icon: icon && icon({
            item: item,
            isSelected: isSelected
          }),
          text: label && label({
            item: item,
            isSelected: isSelected
          })
        });
      }), (!items || !hasItems) && _react.default.createElement(_semanticUiReact.Dropdown.Item, {
        disabled: true,
        text: (0, _getDisplayValue.default)(textNoItems, this.props)
      })))));
    }
  }, {
    key: "defaultItemFilter",
    value: function defaultItemFilter()
    /*item*/
    {
      return true;
    }
  }, {
    key: "defaultItemLabel",
    value: function defaultItemLabel(_ref) {
      var item = _ref.item;
      return (0, _getValue.default)(item, 'label');
    }
  }, {
    key: "defaultItemIcon",
    value: function defaultItemIcon(_ref2) {
      var isSelected = _ref2.isSelected;
      return isSelected ? 'check circle outline' : 'circle outline';
    }
  }, {
    key: "defaultItemDisabled",
    value: function defaultItemDisabled(_ref3) {
      var isSelected = _ref3.isSelected;
      return isSelected;
    }
  }, {
    key: "defaultItemSelected",
    value: function defaultItemSelected(_ref4) {
      var item = _ref4.item,
          selectedItems = _ref4.selectedItems,
          identifier = _ref4.identifier;

      if (!item || !selectedItems) {
        return false;
      }

      var itemID = (0, _getValue.default)(item, identifier);

      var hasTargetID = function hasTargetID(it) {
        return (0, _getValue.default)(it, identifier) === itemID;
      };

      if (selectedItems.find(hasTargetID)) {
        return true;
      }

      return false;
    }
  }]);
  return DefaultSelectRenderer;
}(_react.PureComponent);

exports.default = DefaultSelectRenderer;
(0, _defineProperty2.default)(DefaultSelectRenderer, "propTypes", {
  className: _propTypes.default.string,
  selectedItems: _propTypes.default.array,
  items: _propTypes.default.array,
  dropdownIcon: _propTypes.default.string,
  // only shows items in dropdown that are not already selected
  exclusive: _propTypes.default.bool,
  textNoItems: _getDisplayValue.displayValueShape,
  itemConfig: _propTypes.default.shape({
    filter: _propTypes.default.func,
    identifier: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]),
    disabled: _propTypes.default.func,
    icon: _propTypes.default.func,
    label: _propTypes.default.func,
    selected: _propTypes.default.func
  }),
  onSelect: _propTypes.default.func
});
(0, _defineProperty2.default)(DefaultSelectRenderer, "defaultProps", {
  onSelect: function onSelect() {},
  className: 'icon',
  dropdownIcon: 'add circle',
  textNoItems: '-'
});