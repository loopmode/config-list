"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    > ul {\n        padding: 0;\n        width: 100%;\n    }\n    > ul > li {\n        display: flex;\n        flex-wrap: wrap;\n        .item-label {\n            flex: 1;\n        }\n        > button {\n            &.active {\n                color: deepskyblue;\n            }\n            &.btn-remove-confirm {\n                color: red;\n            }\n            & + button {\n                margin-left: 5px;\n            }\n            // target the editor without making assumptions about its tag or class\n            & + *:last-child:not(button) {\n                margin-top: 5px;\n                flex-basis: 100%;\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = _styledComponents.default.div(_templateObject());

exports.default = _default;