import useSWR from 'swr';
import { fetcher } from '../../apis/_axios';
import { RECOMMEND_ARTIST_API_PATH, RecommendArtistApiResponse } from '../../apis/recommendArtist';

const useRecommendArtist = () => {
  const result = useSWR([RECOMMEND_ARTIST_API_PATH], url => fetcher<RecommendArtistApiResponse>(url));

  return result;
};

export default useRecommendArtist;
