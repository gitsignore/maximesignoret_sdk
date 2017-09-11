'use strict';

export default class PortfolioManager {
    constructor({ client, token }) {
        this.client = client;
        this.token = token
    }

    getAll(queryParams = {}) {
        return this.client.request({
            path: '/portfolios',
            method: 'GET',
            queryParams: queryParams
        });
    };

    getOne(id) {
        return this.client.request({
            path: `/portfolios/${id}`,
            method: 'GET',
        });
    };

    create(portfolio) {
        return this.client.request({
            path: '/portfolios',
            method: 'POST',
            body: portfolio,
        }, this.token);
    }

    update(id, portfolio) {
        return this.client.request({
            path: `/portfolios/${id}`,
            method: 'PUT',
            body: portfolio,
        }, this.token);
    }

    remove(id) {
        return this.client.request({
            path: `/portfolios/${id}`,
            method: 'DELETE',
        }, this.token);
    }
}
