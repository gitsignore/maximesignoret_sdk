'use strict';

export default class HeadernManager {
    constructor({ client, token }) {
        this.client = client;
        this.token = token
    }

    getAll() {
        return this.client.request({
            path: '/headers',
            method: 'GET',
        });
    };

    getOne(id) {
        return this.client.request({
            path: `/headers/${id}`,
            method: 'GET',
        });
    };

    create(header) {
        return this.client.request({
            path: '/headers',
            method: 'POST',
            body: header,
        }, this.token);
    }

    update(header) {
        return this.client.request({
            path: `/headers/${header.id}`,
            method: 'PUT',
            body: header,
        }, this.token);
    }

    remove(header) {
        return this.client.request({
            path: `/headers/${header.id}`,
            method: 'DELETE',
        }, this.token);
    }
}
