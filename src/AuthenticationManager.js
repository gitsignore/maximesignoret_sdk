export default class AuthenticationManager {
    constructor({ client }) {
        this.client = client;
    }

    login(email, password) {
        return this.client.request({
            path: '/auth/login',
            method: 'POST',
            body: {email: email, password: password},
        });
    };

    register(firstName, lastName, email, password) {
        return this.client.request({
            path: '/auth/register',
            method: 'POST',
            body: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
            },
        });
    }
}
