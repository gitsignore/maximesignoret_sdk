'use strict';

export default class SkillCategoryManager {
    constructor({ client, token }) {
        this.client = client;
        this.token = token
    }

    getAll(queryParams = {}) {
        return this.client.request({
            path: '/skill-categories',
            method: 'GET',
            queryParams: queryParams
        });
    };

    getOne(id) {
        return this.client.request({
            path: `/skill-categories/${id}`,
            method: 'GET',
        });
    };

    create(skillCategory) {
        return this.client.request({
            path: '/skill-categories',
            method: 'POST',
            body: skillCategory,
        }, this.token);
    }

    update(id, skillCategory) {
        return this.client.request({
            path: `/skill-categories/${id}`,
            method: 'PUT',
            body: skillCategory,
        }, this.token);
    }

    remove(id) {
        return this.client.request({
            path: `/skill-categories/${id}`,
            method: 'DELETE',
        }, this.token);
    }
}
