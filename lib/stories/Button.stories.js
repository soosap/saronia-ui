'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _Button = require('../components/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('Button', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(_storybookAddonKnobs.withKnobs);

stories.add('default', function () {
  return _react2.default.createElement(
    _Button2.default,
    { onClick: (0, _storybook.action)('clicked') },
    (0, _storybookAddonKnobs.text)('Display', 'Register')
  );
}).add('accent', function () {
  return _react2.default.createElement(
    _Button2.default,
    { accent: true, onClick: (0, _storybook.action)('clicked') },
    (0, _storybookAddonKnobs.text)('Display', 'Subscribe')
  );
});