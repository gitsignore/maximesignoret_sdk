import request from './Client';

const HeaderManager = {
  getAll: async (params = {}) =>
    await request({
      path: '/headers',
      method: 'GET',
      ...params
    }),

  getOne: async (id, params = {}) =>
    await request({
      path: `/headers/${id}`,
      method: 'GET',
      ...params
    }),

  create: async (body, params = {}) =>
    await request({
      path: '/headers',
      method: 'POST',
      body: {
        ...body
      },
      ...params
    }),

  update: async (id, body, params = {}) =>
    await request({
      path: `/headers/${id}`,
      method: 'PUT',
      body: {
        ...body
      },
      ...params
    }),

  remove: async (id, params = {}) =>
    await request({
      path: `/headers/${id}`,
      method: 'DELETE',
      ...params
    })
};

export default HeaderManager;
