'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jwtDecode = require('jwt-decode');

var _jwtDecode2 = _interopRequireDefault(_jwtDecode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SessionManager = function () {
    function SessionManager() {
        _classCallCheck(this, SessionManager);
    }

    _createClass(SessionManager, [{
        key: 'isTokenExpired',
        value: function isTokenExpired() {
            var date = this._getTokenExpirationDate();

            if (date === null) {
                return true;
            }

            return !(date.valueOf() > new Date().valueOf());
        }
    }, {
        key: 'setUser',
        value: function setUser(user) {
            // Saves profile data to localStorage
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, {
        key: 'getUser',
        value: function getUser() {
            // Retrieves the profile data from localStorage
            var user = localStorage.getItem('user');

            return user ? JSON.parse(localStorage.user) : null;
        }
    }, {
        key: 'getUserRole',
        value: function getUserRole() {
            // Retrieves the profile data from localStorage
            var user = this.getUser();

            return user ? user.role : '';
        }
    }, {
        key: 'setToken',
        value: function setToken(idToken) {
            // Saves user token to localStorage
            localStorage.setItem('id_token', idToken);
        }
    }, {
        key: 'getToken',
        value: function getToken() {
            // Retrieves the user token from localStorage
            return localStorage.getItem('id_token');
        }
    }, {
        key: 'initSession',
        value: function initSession(idToken, user) {
            this.setToken(idToken);
            this.setUser(user);
        }
    }, {
        key: 'clearSession',
        value: function clearSession() {
            // Clear user token and profile data from localStorage
            localStorage.removeItem('id_token');
            localStorage.removeItem('user');
        }
    }, {
        key: '_getTokenExpirationDate',
        value: function _getTokenExpirationDate() {
            var token = localStorage.getItem('id_token');

            if (!token) {
                return null;
            }

            var decoded = (0, _jwtDecode2.default)(token);

            if (!decoded.exp) {
                return null;
            }

            var date = new Date(0); // The 0 here is the key, which sets the date to the epoch
            date.setUTCSeconds(decoded.exp);

            return date;
        }
    }]);

    return SessionManager;
}();

exports.default = SessionManager;