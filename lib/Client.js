'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('babel-polyfill');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Client = function () {
    function Client(_ref) {
        var url = _ref.url,
            port = _ref.port,
            entrypoint = _ref.entrypoint,
            staticFiles = _ref.staticFiles;

        _classCallCheck(this, Client);

        this.url = url;
        this.port = port;
        this.entrypoint = entrypoint;
        this.staticFiles = staticFiles;
    }

    _createClass(Client, [{
        key: 'request',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref3) {
                var path = _ref3.path,
                    _ref3$method = _ref3.method,
                    method = _ref3$method === undefined ? 'GET' : _ref3$method,
                    body = _ref3.body,
                    _ref3$queryParams = _ref3.queryParams,
                    queryParams = _ref3$queryParams === undefined ? null : _ref3$queryParams;
                var userToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'application/json';
                var url, headers;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                url = this.url + ':' + this.port + this.entrypoint + path;
                                headers = {
                                    Authorization: userToken
                                };


                                if (contentType && contentType !== '') {
                                    headers['Content-Type'] = contentType;
                                }

                                if (queryParams) {
                                    url += this.queryParams(queryParams);
                                }

                                body = body && contentType !== '' ? JSON.stringify(body) : body;

                                _context.next = 7;
                                return fetch(url, {
                                    method: method,
                                    body: body,
                                    headers: headers
                                }).then(function (response) {
                                    return response.json();
                                }).catch(function (err) {
                                    console.log('Fetch Error :-S', err);
                                });

                            case 7:
                                return _context.abrupt('return', _context.sent);

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function request(_x) {
                return _ref2.apply(this, arguments);
            }

            return request;
        }()
    }, {
        key: 'queryParams',
        value: function queryParams(params) {
            return '?' + Object.keys(params).map(function (k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);
            }).join('&');
        }
    }]);

    return Client;
}();

exports.default = Client;