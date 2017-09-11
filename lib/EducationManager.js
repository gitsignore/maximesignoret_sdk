export default class EducationManager {
    constructor({ client, token }) {
        this.client = client;
        this.token = token
    }

    getAll(queryParams = {}) {
        return this.client.request({
            path: '/educations',
            method: 'GET',
            queryParams: queryParams
        });
    };

    getOne(id) {
        return this.client.request({
            path: `/educations/${id}`,
            method: 'GET',
        });
    };

    create(education) {
        return this.client.request({
            path: '/educations',
            method: 'POST',
            body: education,
        }, this.token);
    }

    update(id, education) {
        return this.client.request({
            path: `/educations/${id}`,
            method: 'PUT',
            body: education,
        }, this.token);
    }

    remove(id) {
        return this.client.request({
            path: `/educations/${id}`,
            method: 'DELETE',
        }, this.token);
    }
}
