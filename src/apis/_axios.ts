import axios from 'axios';

const _axios = axios.create({
  baseURL: `http://${process.env.NEXT_PUBLIC_API_SERVER_DOMAIN}`,
  timeout: 15000,
});

_axios.interceptors.request.use(
  async config => {
    return config;
  },
  error => Promise.reject(error)
);

_axios.interceptors.response.use(
  response => response,
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

export const fetcher = async <R>(url, params?) => {
  try {
    return (
      await _axios.get<{
        responseCode: string;
        responseMessage: string;
        responseObject: R;
      }>(url, {
        params,
      })
    ).data.responseObject;
  } catch (err) {
    throw err;
  }
};

export default _axios;
