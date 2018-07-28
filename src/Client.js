import 'babel-polyfill';

const queryParams = params =>
  `?${Object.keys(params)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&')}`;

export default async ({
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
