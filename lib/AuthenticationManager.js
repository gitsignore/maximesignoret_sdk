'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthenticationManager = function () {
    function AuthenticationManager(_ref) {
        var client = _ref.client;

        _classCallCheck(this, AuthenticationManager);

        this.client = client;
    }

    _createClass(AuthenticationManager, [{
        key: 'login',
        value: function login(email, password) {
            return this.client.request({
                path: '/auth/login',
                method: 'POST',
                body: { email: email, password: password }
            });
        }
    }, {
        key: 'register',
        value: function register(firstName, lastName, email, password) {
            return this.client.request({
                path: '/auth/register',
                method: 'POST',
                body: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password
                }
            });
        }
    }]);

    return AuthenticationManager;
}();

exports.default = AuthenticationManager;