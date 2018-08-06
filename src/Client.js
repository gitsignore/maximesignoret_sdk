import 'babel-polyfill';

const queryParams = params =>
  `?${Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&')}`;

const request = async ({
  url,
  port,
  entrypoint,
  path,
  method = 'GET',
  body,
  queryParams = null,
  userToken = null,
  contentType = 'application/json'
}) => {
  let fullUrl = `${url}:${port}${entrypoint}${path}`;
  const headers = {
    Authorization: userToken
  };

  if (contentType && contentType !== '') {
    headers['Content-Type'] = contentType;
  }

  if (queryParams) {
    fullUrl += queryParams(queryParams);
  }

  body = body && contentType !== '' ? JSON.stringify(body) : body;

  try {
    const response = await fetch(fullUrl, {
      method,
      body,
      headers
    });
    return response.json();
  } catch (err) {
    console.log('Fetch Error :-S', err);
  }
};

const Client = {
  GET: async (path = '', params = {}) =>
    await request({
      path: path,
      method: 'GET',
      ...params
    }),

  POST: async (path = '', body = {}, params = {}) =>
    await request({
      path: path,
      method: 'POST',
      body: {
        ...body
      },
      ...params
    }),

  PUT: async (path = '', body = {}, params = {}) =>
    await request({
      path: path,
      method: 'PUT',
      body: {
        ...body
      },
      ...params
    }),

  DELETE: async (path = '', params = {}) =>
    await request({
      path: path,
      method: 'DELETE',
      ...params
    })
};

export default Client;
