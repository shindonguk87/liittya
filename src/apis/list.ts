import { fetcher } from './_axios';

export const LIST_API_PATH = '/aimme/api/v1/search';

export interface ListApiRequestParam {
  pageNo: number;
  perPage: number;
  sortType: number;
  artistSeq?: string;
  auctionType?: string;
  locationType?: string;
  startDate?: string;
  endDate?: string;
  minPrice?: number;
  maxPrice?: number;
  isIncludeUnsold?: string;
  isViewCurrentCurrency?: string;
}

export interface ListItem {
  saleInfo: string;
  price: string;
  estimatedPrice: string;
  lotUuid: string;
  birth: string;
  artistName: string;
  repImageUrl: string;
  currency: string;
  currentPrice: string;
}

export interface ListApiResponse {
  totalResultCnt: string;
  averagePrice: string;
  averageCurrentPrice: string;
  lastPageNo: string;
  currentPageNo: string;
  resultPerPage: string;
  resultList: ListItem[];
}

export const getSSRListData = async (params: ListApiRequestParam) => {
  return await fetcher<ListApiResponse>(LIST_API_PATH, params);
};
