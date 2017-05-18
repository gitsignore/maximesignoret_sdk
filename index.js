'use strict';

import config from '/config/parameters.js';

export async function invokeApi({path, method = 'GET', body}, userToken = null, contentType = 'application/json') {
    const url = `${config.apiGateway.URL}:${config.apiGateway.PORT}${config.apiGateway.ENTRYPOINT}${path}`;
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
