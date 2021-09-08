export const RECOMMEND_ARTIST_API_PATH = '/aimme/api/v2/top-artists';

export interface RecommendArtist {
  bornBirthYear: string;
  artistSeq: number;
  artistName: string;
  imageSrc: string;
  averagePrice: string;
}

export type RecommendArtistApiResponse = RecommendArtist[];
