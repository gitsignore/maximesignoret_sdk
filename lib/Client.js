'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('babel-polyfill');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var queryParams = function queryParams(params) {
  return '?' + Object.keys(params).map(function (k) {
    return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
  }).join('&');
};

exports.default = function () {
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

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();