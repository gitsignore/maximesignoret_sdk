'use strict';

export default class ImageManager {
    constructor({ client, token }) {
        this.client = client;
        this.token = token
    }

    getAll() {
        return this.client.request({
            path: '/images',
            method: 'GET',
        });
    };

    getOne(id) {
        return this.client.request({
            path: `/images/${id}`,
            method: 'GET',
        });
    };

    create(image) {
        return this.client.request({
            path: '/images',
            method: 'POST',
            body: image,
        }, this.token, '');
    }

    update(id, image) {
        return this.client.request({
            path: `/images/${id}`,
            method: 'PUT',
            body: image,
        }, this.token, '');
    }

    remove(id) {
        return this.client.request({
            path: `/images/${id}`,
            method: 'DELETE',
        }, this.token);
    }
}
