import request from './Client';

const ProfileManager = {
  getAll: async (params = {}) =>
    await request({
      path: '/profiles',
      method: 'GET',
      ...params
    }),

  getOne: async (id, params = {}) =>
    await request({
      path: `/profiles/${id}`,
      method: 'GET',
      ...params
    }),

  create: async (body, params = {}) =>
    await request({
      path: '/profiles',
      method: 'POST',
      body: {
        ...body
      },
      ...params
    }),

  update: async (id, body, params = {}) =>
    await request({
      path: `/profiles/${id}`,
      method: 'PUT',
      body: {
        ...body
      },
      ...params
    }),

  remove: async (id, params = {}) =>
    await request({
      path: `/profiles/${id}`,
      method: 'DELETE',
      ...params
    })
};

export default ProfileManager;
