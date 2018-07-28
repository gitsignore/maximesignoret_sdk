import request from './Client';

const ExperienceManager = {
  getAll: async (params = {}) =>
    await request({
      path: '/experiences',
      method: 'GET',
      ...params
    }),

  getOne: async (id, params = {}) =>
    await request({
      path: `/experiences/${id}`,
      method: 'GET',
      ...params
    }),

  create: async (body, params = {}) =>
    await request({
      path: '/experiences',
      method: 'POST',
      body: {
        ...body
      },
      ...params
    }),

  update: async (id, body, params = {}) =>
    await request({
      path: `/experiences/${id}`,
      method: 'PUT',
      body: {
        ...body
      },
      ...params
    }),

  remove: async (id, params = {}) =>
    await request({
      path: `/experiences/${id}`,
      method: 'DELETE',
      ...params
    })
};

export default ExperienceManager;
