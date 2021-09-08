import useSWR from 'swr';
import { fetcher } from '../../apis/_axios';
import { DETAIL_API_PATH, DetailApiRequest, DetailApiResponse } from '../../apis/detail';

const useDetail = ({ apiParams }: { apiParams: DetailApiRequest }) => {
  const result = useSWR(`${DETAIL_API_PATH}/${apiParams.id}`, url => fetcher<DetailApiResponse>(url));

  return result;
};

export default useDetail;
