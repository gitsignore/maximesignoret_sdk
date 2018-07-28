import request from './Client';

const SkillCategoryManager = {
  getAll: async (params = {}) =>
    await request({
      path: '/skill-categories',
      method: 'GET',
      ...params
    }),

  getOne: async (id, params = {}) =>
    await request({
      path: `/skill-categories/${id}`,
      method: 'GET',
      ...params
    }),

  create: async (body, params = {}) =>
    await request({
      path: '/skill-categories',
      method: 'POST',
      body: {
        ...body
      },
      ...params
    }),

  update: async (id, body, params = {}) =>
    await request({
      path: `/skill-categories/${id}`,
      method: 'PUT',
      body: {
        ...body
      },
      ...params
    }),

  remove: async (id, params = {}) =>
    await request({
      path: `/skill-categories/${id}`,
      method: 'DELETE',
      ...params
    })
};

export default SkillCategoryManager;
