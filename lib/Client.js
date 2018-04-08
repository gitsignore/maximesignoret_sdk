'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
        value: async function request(_ref2) {
            var path = _ref2.path,
                _ref2$method = _ref2.method,
                method = _ref2$method === undefined ? 'GET' : _ref2$method,
                body = _ref2.body,
                _ref2$queryParams = _ref2.queryParams,
                queryParams = _ref2$queryParams === undefined ? null : _ref2$queryParams;
            var userToken = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'application/json';

            var url = this.url + ':' + this.port + this.entrypoint + path;
            var headers = {
                Authorization: userToken
            };

            if (contentType && contentType !== '') {
                headers['Content-Type'] = contentType;
            }

            if (queryParams) {
                url += this.queryParams(queryParams);
            }

            body = body && contentType !== '' ? JSON.stringify(body) : body;

            return await fetch(url, {
                method: method,
                body: body,
                headers: headers
            }).then(function (response) {
                return response.json();
            }).catch(function (err) {
                console.log('Fetch Error :-S', err);
            });
        }
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