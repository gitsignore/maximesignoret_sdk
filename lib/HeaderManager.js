export default class HeaderManager {
    constructor({ client, token }) {
        this.client = client;
        this.token = token
    }

    getAll(queryParams = {}) {
        return this.client.request({
            path: '/headers',
            method: 'GET',
            queryParams: queryParams
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

    update(id, header) {
        return this.client.request({
            path: `/headers/${id}`,
            method: 'PUT',
            body: header,
        }, this.token);
    }

    remove(id) {
        return this.client.request({
            path: `/headers/${id}`,
            method: 'DELETE',
        }, this.token);
    }
}
