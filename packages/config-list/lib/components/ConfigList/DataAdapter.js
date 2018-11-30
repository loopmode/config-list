"use strict";

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

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DataConverter = _interopRequireDefault(require("./DataConverter"));

var _shapes = require("../../utils/shapes");

var DataAdapter =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(DataAdapter, _PureComponent);

  function DataAdapter() {
    (0, _classCallCheck2.default)(this, DataAdapter);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DataAdapter).apply(this, arguments));
  }

  (0, _createClass2.default)(DataAdapter, [{
    key: "render",
    value: function render() {
      return this.props.children({
        items: this.createDataItems(this.props.items, this.props.itemSettings)
      });
    }
  }, {
    key: "createDataItems",
    value: function createDataItems(items, settings) {
      var convert = _DataConverter.default.getConverter(items);

      if (!convert) {
        return null;
      }

      return convert(items).map(function (item) {
        return {
          key: settings.getKey(item),
          id: settings.getID(item),
          label: settings.getLabel(item),
          editable: settings.isEditable(item),
          removable: settings.isRemovable(item),
          data: item
        };
      });
    }
  }]);
  return DataAdapter;
}(_react.PureComponent);

exports.default = DataAdapter;
(0, _defineProperty2.default)(DataAdapter, "propTypes", {
  children: _propTypes.default.func,
  items: _propTypes.default.array,
  itemSettings: _shapes.ItemSettingsShape
});