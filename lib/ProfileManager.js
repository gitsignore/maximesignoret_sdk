'use strict';

export default class HeadernManager {
    constructor({ client, token }) {
        this.client = client;
        this.token = token
    }

    getAll() {
        return this.client.request({
            path: '/profiles',
            method: 'GET',
        });
    };

    getOne(id) {
        return this.client.request({
            path: `/profiles/${id}`,
            method: 'GET',
        });
    };

    create(profile) {
        return this.client.request({
            path: '/profiles',
            method: 'POST',
            body: profile,
        }, this.token);
    }

    update(profile) {
        return this.client.request({
            path: `/profiles/${profile.id}`,
            method: 'PUT',
            body: profile,
        }, this.token);
    }

    remove(profile) {
        return this.client.request({
            path: `/profiles/${profile.id}`,
            method: 'DELETE',
        }, this.token);
    }
}
