'use strict';

export default class ProfileManager {
    constructor({ client, token }) {
        this.client = client;
        this.token = token
    }

    getAll(queryParams = {}) {
        return this.client.request({
            path: '/profiles',
            method: 'GET',
            queryParams: queryParams
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

    update(id, profile) {
        return this.client.request({
            path: `/profiles/${id}`,
            method: 'PUT',
            body: profile,
        }, this.token);
    }

    remove(id) {
        return this.client.request({
            path: `/profiles/${id}`,
            method: 'DELETE',
        }, this.token);
    }
}
