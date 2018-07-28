'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Client = require('./Client');

var _Client2 = _interopRequireDefault(_Client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var ImageManager = {
  getAll: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _Client2.default)(_extends({
                path: '/images',
                method: 'GET'
              }, params));

            case 2:
              return _context.abrupt('return', _context.sent);

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function getAll() {
      return _ref.apply(this, arguments);
    };
  }(),

  getOne: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return (0, _Client2.default)(_extends({
                path: '/images/' + id,
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

    return function getOne(_x2) {
      return _ref2.apply(this, arguments);
    };
  }(),

  create: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(body) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return (0, _Client2.default)(_extends({
                path: '/images',
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

    return function create(_x4) {
      return _ref3.apply(this, arguments);
    };
  }(),

  update: function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(id, body) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return (0, _Client2.default)(_extends({
                path: '/images/' + id,
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

    return function update(_x6, _x7) {
      return _ref4.apply(this, arguments);
    };
  }(),

  remove: function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return (0, _Client2.default)(_extends({
                path: '/images/' + id,
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

    return function remove(_x9) {
      return _ref5.apply(this, arguments);
    };
  }()
};

exports.default = ImageManager;