"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n    > .ui.segment:first-child {\n        padding-top: 0;\n    }\n    > .ui.segment:last-child {\n        padding-bottom: 0;\n    }\n    table.ui {\n        thead,\n        tbody {\n            td,\n            th {\n                &:last-child {\n                    text-align: right;\n                }\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _default = _styledComponents.default.div(_templateObject());

exports.default = _default;