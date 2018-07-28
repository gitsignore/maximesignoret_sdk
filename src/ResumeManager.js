import request from './Client';

export default async (params = {}) =>
  await request({ path: '/resume', method: 'GET', ...params });
