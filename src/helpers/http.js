import axios from 'axios';
import applyConverters from 'axios-case-converter';

const endpoint = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      // return "http://localhost:8000";
      return 'https://covid-stage.shiftpartner.com';
    default:
      return '';
  }
};

const c = axios.create({
  baseURL: endpoint(),
});

// c.interceptors.request.use(function (config) {
//   const token = localStorage.getItem("access-token");
//   if (token !== null) {
//     config.headers.Authorization = `JWT ${token}`;
//   }

//   return config;
// });

export const client = applyConverters(c);

export const get = (url, query, headers) =>
  client({
    method: 'GET',
    url,
    query,
    headers,
  });

export const post = (url, data, query, headers) =>
  client({
    method: 'POST',
    url,
    data,
    query,
    headers,
  });

export const put = (url, data, query) =>
  client({
    method: 'PUT',
    url,
    data,
    query,
  });

export const patch = (url, data, query) =>
  client({
    method: 'PATCH',
    url,
    data,
    query,
  });

export const del = (url, data, query) =>
  client({
    method: 'DELETE',
    url,
    data,
    query,
  });
