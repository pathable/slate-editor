'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require('../../components/button');

var _ListUtils = require('./ListUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UnorderedListButton = function UnorderedListButton(_ref) {
  var state = _ref.state,
      onChange = _ref.onChange,
      className = _ref.className,
      style = _ref.style;
  return _react2.default.createElement(
    _button.Button,
    {
      style: style,
      onClick: function onClick(e) {
        return onChange((0, _ListUtils.unorderedListStrategy)(state));
      },
      className: (0, _classnames2.default)('slate-list-plugin--button', { active: (0, _ListUtils.isUnorderedList)(state) }, className)
    },
    _react2.default.createElement(_reactFontawesome2.default, { name: 'list-ul' })
  );
};

exports.default = UnorderedListButton;