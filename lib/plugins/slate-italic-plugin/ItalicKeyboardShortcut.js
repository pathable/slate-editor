'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ItalicUtils = require('./ItalicUtils');

var ItalicKeyboardShortcut = function ItalicKeyboardShortcut(event, data, state) {
  if (data.isMod && !event.shiftKey && data.key === 'i') return (0, _ItalicUtils.italicMarkStrategy)(state);
  return;
};

exports.default = ItalicKeyboardShortcut;