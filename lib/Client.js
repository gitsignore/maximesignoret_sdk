export default class Client {
    constructor({ url, port, entrypoint, staticFiles }) {
        this.url = url;
        this.port = port;
        this.entrypoint = entrypoint;
        this.staticFiles = staticFiles;
    }

    async request({path, method = 'GET', body, queryParams = null}, userToken = null, contentType = 'application/json') {
        let url = `${this.url}:${this.port}${this.entrypoint}${path}`;
        const headers = {
            Authorization: userToken,
        };

        if (contentType && contentType !== '') {
            headers['Content-Type'] = contentType;
        }

        if (queryParams) {
            url += this.queryParams(queryParams);
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

    queryParams(params) {
        return '?' + Object.keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&');
    }
}
