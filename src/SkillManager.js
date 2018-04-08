export default class SkillManager {
    constructor({ client, token }) {
        this.client = client;
        this.token = token
    }

    getAll(queryParams = {}) {
        return this.client.request({
            path: '/skills',
            method: 'GET',
            queryParams: queryParams
        });
    };

    getOne(id) {
        return this.client.request({
            path: `/skills/${id}`,
            method: 'GET',
        });
    };

    create(skill) {
        return this.client.request({
            path: '/skills',
            method: 'POST',
            body: skill,
        }, this.token);
    }

    update(id, skill) {
        return this.client.request({
            path: `/skills/${id}`,
            method: 'PUT',
            body: skill,
        }, this.token);
    }

    remove(id) {
        return this.client.request({
            path: `/skills/${id}`,
            method: 'DELETE',
        }, this.token);
    }
}
