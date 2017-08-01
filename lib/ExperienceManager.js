export default class ExperienceManager {
    constructor({ client, token }) {
        this.client = client;
        this.token = token
    }

    getAll() {
        return this.client.request({
            path: '/experiences',
            method: 'GET',
        });
    };

    getOne(id) {
        return this.client.request({
            path: `/experiences/${id}`,
            method: 'GET',
        });
    };

    create(experience) {
        return this.client.request({
            path: '/experiences',
            method: 'POST',
            body: experience,
        }, this.token);
    }

    update(id, experience) {
        return this.client.request({
            path: `/experiences/${id}`,
            method: 'PUT',
            body: experience,
        }, this.token);
    }

    remove(id) {
        return this.client.request({
            path: `/experiences/${id}`,
            method: 'DELETE',
        }, this.token);
    }
}
