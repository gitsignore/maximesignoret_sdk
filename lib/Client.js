'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

require('babel-polyfill');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var queryParams = function queryParams(params) {
  return '?' + Object.keys(params).map(function (k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
  }).join('&');
};

var request = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref2) {
    var url = _ref2.url,
        port = _ref2.port,
        entrypoint = _ref2.entrypoint,
        path = _ref2.path,
        _ref2$method = _ref2.method,
        method = _ref2$method === undefined ? 'GET' : _ref2$method,
        body = _ref2.body,
        _ref2$queryParams = _ref2.queryParams,
        queryParams = _ref2$queryParams === undefined ? null : _ref2$queryParams,
        _ref2$userToken = _ref2.userToken,
        userToken = _ref2$userToken === undefined ? null : _ref2$userToken,
        _ref2$contentType = _ref2.contentType,
        contentType = _ref2$contentType === undefined ? 'application/json' : _ref2$contentType;
    var fullUrl, headers, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fullUrl = url + ':' + port + entrypoint + path;
            headers = {
              Authorization: userToken
            };


            if (contentType && contentType !== '') {
              headers['Content-Type'] = contentType;
            }

            if (queryParams) {
              fullUrl += queryParams(queryParams);
            }

            body = body && contentType !== '' ? JSON.stringify(body) : body;

            _context.prev = 5;
            _context.next = 8;
            return fetch(fullUrl, {
              method: method,
              body: body,
              headers: headers
            });

          case 8:
            response = _context.sent;
            return _context.abrupt('return', response.json());

          case 12:
            _context.prev = 12;
            _context.t0 = _context['catch'](5);

            console.log('Fetch Error :-S', _context.t0);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined, [[5, 12]]);
  }));

  return function request(_x) {
    return _ref.apply(this, arguments);
  };
}();

var Client = {
  GET: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return request(_extends({
                path: path,
                method: 'GET'
              }, params));

            case 2:
              return _context2.abrupt('return', _context2.sent);

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function GET() {
      return _ref3.apply(this, arguments);
    };
  }(),

  POST: function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return request(_extends({
                path: path,
                method: 'POST',
                body: _extends({}, body)
              }, params));

            case 2:
              return _context3.abrupt('return', _context3.sent);

            case 3:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function POST() {
      return _ref4.apply(this, arguments);
    };
  }(),

  PUT: function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return request(_extends({
                path: path,
                method: 'PUT',
                body: _extends({}, body)
              }, params));

            case 2:
              return _context4.abrupt('return', _context4.sent);

            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function PUT() {
      return _ref5.apply(this, arguments);
    };
  }(),

  DELETE: function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return request(_extends({
                path: path,
                method: 'DELETE'
              }, params));

            case 2:
              return _context5.abrupt('return', _context5.sent);

            case 3:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function DELETE() {
      return _ref6.apply(this, arguments);
    };
  }()
};

exports.default = Client;