define(['./window-application-cache-mock', './window-navigator-mock', './window-location-mock', './window-local-storage-mock', './window-session-storage-mock', './window-document-mock'], function (_windowApplicationCacheMock, _windowNavigatorMock, _windowLocationMock, _windowLocalStorageMock, _windowSessionStorageMock, _windowDocumentMock) {
  'use strict';

  var exports = {};
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _windowApplicationCacheMock2 = _interopRequireDefault(_windowApplicationCacheMock);

  var _windowNavigatorMock2 = _interopRequireDefault(_windowNavigatorMock);

  var _windowLocationMock2 = _interopRequireDefault(_windowLocationMock);

  var _windowLocalStorageMock2 = _interopRequireDefault(_windowLocalStorageMock);

  var _windowSessionStorageMock2 = _interopRequireDefault(_windowSessionStorageMock);

  var _windowDocumentMock2 = _interopRequireDefault(_windowDocumentMock);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var WindowMock = function () {
    function WindowMock() {
      _classCallCheck(this, WindowMock);

      this._test = 'Window';
      this.applicationCache = new _windowApplicationCacheMock2.default();
      this.navigator = new _windowNavigatorMock2.default();
      this.location = new _windowLocationMock2.default();
      this.localStorage = new _windowLocalStorageMock2.default();
      this.sessionStorage = new _windowSessionStorageMock2.default();
      this.document = new _windowDocumentMock2.default();
    }

    _createClass(WindowMock, [{
      key: 'setTimeout',
      value: function setTimeout(f) {
        f();
      }
    }, {
      key: 'requestAnimationFrame',
      value: function requestAnimationFrame(f) {
        f();
      }
    }, {
      key: 'btoa',
      value: function btoa(s) {
        return s;
      }
    }]);

    return WindowMock;
  }();

  exports.default = WindowMock;
  return exports.default;
});