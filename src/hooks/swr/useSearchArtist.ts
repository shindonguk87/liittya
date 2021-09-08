import useSWR from 'swr';
import { fetcher } from '../../apis/_axios';
import { SEARCH_ARTIST_API_PATH, SearchArtistApiRequest, SearchArtistApiResponse } from '../../apis/searchArtist';

const useSearchArtist = ({ apiParams }: { apiParams: SearchArtistApiRequest }) => {
  const result = useSWR(
    apiParams.artistName !== '' ? [SEARCH_ARTIST_API_PATH, apiParams.artistName] : null,
    (url, artistName) => fetcher<SearchArtistApiResponse>(url, { artistName })
  );

  return result;
};

export default useSearchArtist;
