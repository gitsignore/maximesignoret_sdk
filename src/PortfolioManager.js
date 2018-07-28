import request from './Client';

const PortfolioManager = {
  getAll: async (params = {}) =>
    await request({
      path: '/portfolios',
      method: 'GET',
      ...params
    }),

  getOne: async (id, params = {}) =>
    await request({
      path: `/portfolios/${id}`,
      method: 'GET',
      ...params
    }),

  create: async (body, params = {}) =>
    await request({
      path: '/portfolios',
      method: 'POST',
      body: {
        ...body
      },
      ...params
    }),

  update: async (id, body, params = {}) =>
    await request({
      path: `/portfolios/${id}`,
      method: 'PUT',
      body: {
        ...body
      },
      ...params
    }),

  remove: async (id, params = {}) =>
    await request({
      path: `/portfolios/${id}`,
      method: 'DELETE',
      ...params
    })
};

export default PortfolioManager;
