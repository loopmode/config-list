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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _semanticUiReact = require("semantic-ui-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _shapes = require("@loopmode/config-list/lib/utils/shapes");

var _iterate = require("@loopmode/config-list/lib/utils/iterate");

var _count = _interopRequireDefault(require("@loopmode/config-list/lib/utils/count"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    &:first-child {\n        padding-top: 0 !important;\n    }\n    .ui.dropdown {\n        width: 100%;\n    }\n    .ui.icon.button {\n        padding: 7px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StyledSegment = (0, _styledComponents.default)(_semanticUiReact.Segment)(_templateObject());

var SelectRenderer =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(SelectRenderer, _PureComponent);

  function SelectRenderer() {
    (0, _classCallCheck2.default)(this, SelectRenderer);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SelectRenderer).apply(this, arguments));
  }

  (0, _createClass2.default)(SelectRenderer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onAddItem = _this$props.onAddItem,
          dropdownIcon = _this$props.dropdownIcon,
          availableItems = _this$props.availableItems,
          dropdownText = _this$props.dropdownText,
          settings = _this$props.settings;
      var selectableItems = (0, _iterate.filter)(availableItems, settings.filter);
      var hasSelectableItems = (0, _count.default)(selectableItems) > 0;
      return _react.default.createElement(StyledSegment, {
        vertical: true,
        className: "SelectRenderer"
      }, _react.default.createElement(_semanticUiReact.Dropdown, {
        className: "icon",
        icon: dropdownIcon,
        floating: true,
        labeled: true,
        button: true,
        text: dropdownText
      }, _react.default.createElement(_semanticUiReact.Dropdown.Menu, null, !hasSelectableItems && _react.default.createElement(_semanticUiReact.Dropdown.Item, {
        disabled: true,
        text: 'No selectable items available'
      }), hasSelectableItems && (0, _iterate.map)(selectableItems, function (item) {
        return _react.default.createElement(_semanticUiReact.Dropdown.Item, {
          key: settings.key(item),
          text: settings.label(item),
          onClick: function onClick() {
            return onAddItem({
              item: item
            });
          }
        });
      }))));
    }
  }]);
  return SelectRenderer;
}(_react.PureComponent);

exports.default = SelectRenderer;
(0, _defineProperty2.default)(SelectRenderer, "propTypes", {
  className: _propTypes.default.string,
  configuredItems: _shapes.itemsShape,
  availableItems: _shapes.itemsShape,
  dropdownText: _propTypes.default.string,
  dropdownIcon: _propTypes.default.string,
  // only shows items in dropdown that are not already selected
  exclusive: _propTypes.default.bool,
  settings: _shapes.settingsShape,
  onAddItem: _propTypes.default.func
});
(0, _defineProperty2.default)(SelectRenderer, "defaultProps", {
  onAddItem: function onAddItem() {},
  className: 'icon',
  dropdownIcon: 'add circle',
  dropdownText: 'select item'
});