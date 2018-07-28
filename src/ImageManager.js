import request from './Client';

const ImageManager = {
  getAll: async (params = {}) =>
    await request({
      path: '/images',
      method: 'GET',
      ...params
    }),

  getOne: async (id, params = {}) =>
    await request({
      path: `/images/${id}`,
      method: 'GET',
      ...params
    }),

  create: async (body, params = {}) =>
    await request({
      path: '/images',
      method: 'POST',
      body: {
        ...body
      },
      ...params
    }),

  update: async (id, body, params = {}) =>
    await request({
      path: `/images/${id}`,
      method: 'PUT',
      body: {
        ...body
      },
      ...params
    }),

  remove: async (id, params = {}) =>
    await request({
      path: `/images/${id}`,
      method: 'DELETE',
      ...params
    })
};

export default ImageManager;
