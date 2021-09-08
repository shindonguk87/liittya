import _axios from './_axios';

export const fetchData = async ({ id }) => {
  const result = await _axios.get(`http://${process.env.NEXT_PUBLIC_API_SERVER_DOMAIN}/aimme/api/v2/detail/${id}`);

  return result;
};
