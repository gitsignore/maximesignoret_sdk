import request from './Client';

const AuthenticationManager = {
  login: async (body, params = {}) =>
    await request({
      path: '/auth/login',
      method: 'POST',
      body: { ...body },
      ...params
    }),

  register: async (body, params = {}) =>
    await request({
      path: '/auth/register',
      method: 'POST',
      body: {
        ...body
      },
      ...params
    })
};

export default AuthenticationManager;
