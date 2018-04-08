'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SkillManager = function () {
    function SkillManager(_ref) {
        var client = _ref.client,
            token = _ref.token;

        _classCallCheck(this, SkillManager);

        this.client = client;
        this.token = token;
    }

    _createClass(SkillManager, [{
        key: 'getAll',
        value: function getAll() {
            var queryParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.client.request({
                path: '/skills',
                method: 'GET',
                queryParams: queryParams
            });
        }
    }, {
        key: 'getOne',
        value: function getOne(id) {
            return this.client.request({
                path: '/skills/' + id,
                method: 'GET'
            });
        }
    }, {
        key: 'create',
        value: function create(skill) {
            return this.client.request({
                path: '/skills',
                method: 'POST',
                body: skill
            }, this.token);
        }
    }, {
        key: 'update',
        value: function update(id, skill) {
            return this.client.request({
                path: '/skills/' + id,
                method: 'PUT',
                body: skill
            }, this.token);
        }
    }, {
        key: 'remove',
        value: function remove(id) {
            return this.client.request({
                path: '/skills/' + id,
                method: 'DELETE'
            }, this.token);
        }
    }]);

    return SkillManager;
}();

exports.default = SkillManager;