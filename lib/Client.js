'use strict';

export default class Client {
    constructor({ url, port, entrypoint, staticFiles }) {
        this.url = url;
        this.port = port;
        this.entrypoint = entrypoint;
        this.staticFiles = staticFiles;
    }

    async request({path, method = 'GET', body}, userToken = null, contentType = 'application/json') {
        const url = `${this.url}:${this.port}${this.entrypoint}${path}`;
        const headers = {
            Authorization: userToken,
        };

        if (contentType && contentType !== '') {
            headers['Content-Type'] = contentType;
        }

        body = (body && contentType !== '') ? JSON.stringify(body) : body;

        return await fetch(url, {
            method,
            body,
            headers
        }).then(function (response) {
            return response.json();
        }).catch(function (err) {
            console.log('Fetch Error :-S', err);
        });
    }
}
