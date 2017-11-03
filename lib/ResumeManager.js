'use strict';

export default class ResumeManager {
    constructor({ client }) {
        this.client = client;
    }

    getResume() {
        return this.client.request({
            path: '/resume',
            method: 'GET',
        });
    };
}
