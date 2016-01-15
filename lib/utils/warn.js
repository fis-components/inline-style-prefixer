// only throw warnings if devmode is enabled
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function () {
  if ("production" !== 'production') {
    console.warn.apply(console, arguments);
  }
};

module.exports = exports['default'];