'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageManager = function () {
    function ImageManager(_ref) {
        var client = _ref.client,
            token = _ref.token;

        _classCallCheck(this, ImageManager);

        this.client = client;
        this.token = token;
    }

    _createClass(ImageManager, [{
        key: 'getAll',
        value: function getAll() {
            return this.client.request({
                path: '/images',
                method: 'GET'
            });
        }
    }, {
        key: 'getOne',
        value: function getOne(id) {
            return this.client.request({
                path: '/images/' + id,
                method: 'GET'
            });
        }
    }, {
        key: 'create',
        value: function create(image) {
            return this.client.request({
                path: '/images',
                method: 'POST',
                body: image
            }, this.token, '');
        }
    }, {
        key: 'update',
        value: function update(id, image) {
            return this.client.request({
                path: '/images/' + id,
                method: 'PUT',
                body: image
            }, this.token, '');
        }
    }, {
        key: 'remove',
        value: function remove(id) {
            return this.client.request({
                path: '/images/' + id,
                method: 'DELETE'
            }, this.token);
        }
    }]);

    return ImageManager;
}();

exports.default = ImageManager;