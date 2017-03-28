'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  padding: ', ';\n  background-color: ', ';\n  border-radius: 3px;\n  border: none;\n  font-size: 1.2rem;\n  font-family: ', ';\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &:focus {\n    outline: none;\n  }\n'], ['\n  padding: ', ';\n  background-color: ', ';\n  border-radius: 3px;\n  border: none;\n  font-size: 1.2rem;\n  font-family: ', ';\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  &:focus {\n    outline: none;\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styles = require('../assets/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents2.default.button(_templateObject, function (props) {
  return props.accent ? '0.65rem 1rem 0.35rem 1rem' : '0.5rem 1rem';
}, function (props) {
  return props.inverted ? _styles.colors.secondary : _styles.colors.primary;
}, function (props) {
  return props.accent ? _styles.fonts.accent : _styles.fonts.system;
});

exports.default = Button;