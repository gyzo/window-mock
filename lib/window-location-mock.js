define([], function () {
  'use strict';

  var exports = {};
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var WindowLocationMock = function WindowLocationMock() {
    _classCallCheck(this, WindowLocationMock);

    this._test = 'Location';
    this.hash = '';
    this.href = '';
    this.pathname = '';
    this.origin = '';
  };

  exports.default = WindowLocationMock;
  return exports.default;
});