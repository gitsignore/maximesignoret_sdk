'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EducationManager = function () {
    function EducationManager(_ref) {
        var client = _ref.client,
            token = _ref.token;

        _classCallCheck(this, EducationManager);

        this.client = client;
        this.token = token;
    }

    _createClass(EducationManager, [{
        key: 'getAll',
        value: function getAll() {
            var queryParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            return this.client.request({
                path: '/educations',
                method: 'GET',
                queryParams: queryParams
            });
        }
    }, {
        key: 'getOne',
        value: function getOne(id) {
            return this.client.request({
                path: '/educations/' + id,
                method: 'GET'
            });
        }
    }, {
        key: 'create',
        value: function create(education) {
            return this.client.request({
                path: '/educations',
                method: 'POST',
                body: education
            }, this.token);
        }
    }, {
        key: 'update',
        value: function update(id, education) {
            return this.client.request({
                path: '/educations/' + id,
                method: 'PUT',
                body: education
            }, this.token);
        }
    }, {
        key: 'remove',
        value: function remove(id) {
            return this.client.request({
                path: '/educations/' + id,
                method: 'DELETE'
            }, this.token);
        }
    }]);

    return EducationManager;
}();

exports.default = EducationManager;