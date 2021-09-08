export const SEARCH_ARTIST_API_PATH = '/aimme/api/v1/artist-name-list';

export interface SearchArtistApiRequest {
  artistName: string;
}

export interface SearchArtist {
  exposeOrder: number;
  artistName: string;
  seq: number;
}

export type SearchArtistApiResponse = SearchArtist[];
