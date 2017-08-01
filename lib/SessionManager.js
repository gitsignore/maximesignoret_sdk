import decode from 'jwt-decode';

export default class SessionManager {
    isTokenExpired() {
        const date = this._getTokenExpirationDate();

        if (date === null) {
            return true;
        }

        return !(date.valueOf() > (new Date().valueOf()));
    }

    setUser(user) {
        // Saves profile data to localStorage
        localStorage.setItem('user', JSON.stringify(user))
    }

    getUser() {
        // Retrieves the profile data from localStorage
        const user = localStorage.getItem('user');

        return user ? JSON.parse(localStorage.user) : null
    }

    getUserRole() {
        // Retrieves the profile data from localStorage
        const user = this.getUser();

        return user ? user.role : '';
    }

    setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken);
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token');
    }

    initSession(idToken, user) {
        this.setToken(idToken);
        this.setUser(user);
    }

    clearSession() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('user');
    }

    _getTokenExpirationDate() {
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
}
