'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderManager = function () {
    function HeaderManager(_ref) {
        var client = _ref.client,
            token = _ref.token;

        _classCallCheck(this, HeaderManager);

        this.client = client;
        this.token = token;
    }

    _createClass(HeaderManager, [{
        key: 'getAll',
        value: function getAll() {
            var queryParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.client.request({
                path: '/headers',
                method: 'GET',
                queryParams: queryParams
            });
        }
    }, {
        key: 'getOne',
        value: function getOne(id) {
            return this.client.request({
                path: '/headers/' + id,
                method: 'GET'
            });
        }
    }, {
        key: 'create',
        value: function create(header) {
            return this.client.request({
                path: '/headers',
                method: 'POST',
                body: header
            }, this.token);
        }
    }, {
        key: 'update',
        value: function update(id, header) {
            return this.client.request({
                path: '/headers/' + id,
                method: 'PUT',
                body: header
            }, this.token);
        }
    }, {
        key: 'remove',
        value: function remove(id) {
            return this.client.request({
                path: '/headers/' + id,
                method: 'DELETE'
            }, this.token);
        }
    }]);

    return HeaderManager;
}();

exports.default = HeaderManager;