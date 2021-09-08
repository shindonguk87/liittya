import { ActionType, createAction } from 'typesafe-actions';
import { ListApiResponse } from '../../apis/list';

export const setFetchedData = createAction('@list/SET_FETCHED_DATA_ACTION')<{
  fetchedData: ListApiResponse;
}>();

export const setPageNoAction = createAction('@list/SET_PAGE_NO_ACTION')<{
  pageNo: number;
}>();

export const setPerPageAction = createAction('@list/SET_PER_PAGE_ACTION')<{
  perPage: number;
}>();

export const setSortTypeAction = createAction('@list/SET_SORT_TYPE_ACTION')<{
  sortType: number;
}>();

export const setArtistSeqAction = createAction('@list/SET_ARTIST_SEQ_ACTION')<{
  artistSeq: string;
}>();

export const setAuctionTypeAction = createAction('@list/SET_AUCTION_TYPE_ACTION')<{
  auctionType: string;
}>();

export const setLocationTypeAction = createAction('@list/SET_LOCATION_TYPE_ACTION')<{
  locationType: string;
}>();

export const setStartDateAction = createAction('@list/SET_START_DATE_ACTION')<{
  startDate: string;
}>();

export const setEndDateAction = createAction('@list/SET_END_DATE_ACTION')<{
  endDate: string;
}>();

export const setMinPriceAction = createAction('@list/SET_MIN_PRICE_ACTION')<{
  minPrice: number;
}>();

export const setMaxPriceAction = createAction('@list/SET_MAX_PRICE_ACTION')<{
  maxPrice: number;
}>();

export const setIsIncludeUnsoldAction = createAction('@list/SET_IS_INCLUDE_UNSOLD_ACTION')<{
  isIncludeUnsold: string;
}>();

export const setIsViewCurrentCurrencyAction = createAction('@list/SET_IS_VIEW_CURRENT_CURRENCY_ACTION')<{
  isViewCurrentCurrency: string;
}>();

const actions = {
  setFetchedData,
  setPageNoAction,
  setPerPageAction,
  setSortTypeAction,
  setArtistSeqAction,
  setAuctionTypeAction,
  setLocationTypeAction,
  setStartDateAction,
  setEndDateAction,
  setMinPriceAction,
  setMaxPriceAction,
  setIsIncludeUnsoldAction,
  setIsViewCurrentCurrencyAction,
};

export type Actions = ActionType<typeof actions>;
