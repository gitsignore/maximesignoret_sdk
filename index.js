import decode from 'jwt-decode';
import config from '../../config/parameters.js';

export async function request({path, method = 'GET', body}, userToken = null, contentType = 'application/json') {
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

export function isTokenExpired() {
    const date = getTokenExpirationDate();

    if (date === null) {
        return true;
    }

    return !(date.valueOf() > (new Date().valueOf()));
}

export function setUser(user) {
    // Saves profile data to localStorage
    localStorage.setItem('user', JSON.stringify(user))
}

export function getUser() {
    // Retrieves the profile data from localStorage
    const user = localStorage.getItem('user');

    return user ? JSON.parse(localStorage.user) : null
}

export function getUserRole() {
    // Retrieves the profile data from localStorage
    const user = getUser();

    return user ? user.role : '';
}

export function setToken(idToken){
    // Saves user token to localStorage
    localStorage.setItem('id_token', idToken);
}

export function getToken() {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token');
}

export function clear() {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('user');
}

function getTokenExpirationDate() {
    const token = localStorage.getItem('id_token');

    if (!token) {
        return null;
    }

    const decoded = decode(token);

    if (!decoded.exp) {
        return null;
    }

    const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp);

    return date;
}
