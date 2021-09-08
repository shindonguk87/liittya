import { createReducer } from 'typesafe-actions';
import produce from 'immer';
import {
  Actions,
  setArtistSeqAction,
  setAuctionTypeAction,
  setEndDateAction,
  setFetchedData,
  setIsIncludeUnsoldAction,
  setIsViewCurrentCurrencyAction,
  setLocationTypeAction,
  setMaxPriceAction,
  setMinPriceAction,
  setPageNoAction,
  setPerPageAction,
  setSortTypeAction,
  setStartDateAction,
} from './actions';
import { initState, State } from './state';

export const reducer = createReducer<State, Actions>(initState)
  .handleAction(setFetchedData, (state, action) =>
    produce(state, draft => {
      const { fetchedData } = action.payload;
      draft.fetchedData = fetchedData;
    })
  )
  .handleAction(setPageNoAction, (state, action) =>
    produce(state, draft => {
      const { pageNo } = action.payload;
      draft.pageNo = pageNo;
    })
  )
  .handleAction(setPerPageAction, (state, action) =>
    produce(state, draft => {
      const { perPage } = action.payload;
      draft.perPage = perPage;
    })
  )
  .handleAction(setSortTypeAction, (state, action) =>
    produce(state, draft => {
      const { sortType } = action.payload;
      draft.sortType = sortType;
    })
  )
  .handleAction(setArtistSeqAction, (state, action) =>
    produce(state, draft => {
      const { artistSeq } = action.payload;
      draft.artistSeq = artistSeq;
    })
  )
  .handleAction(setAuctionTypeAction, (state, action) =>
    produce(state, draft => {
      const { auctionType } = action.payload;
      draft.auctionType = auctionType;
    })
  )
  .handleAction(setLocationTypeAction, (state, action) =>
    produce(state, draft => {
      const { locationType } = action.payload;
      draft.locationType = locationType;
    })
  )
  .handleAction(setStartDateAction, (state, action) =>
    produce(state, draft => {
      const { startDate } = action.payload;
      draft.startDate = startDate;
    })
  )
  .handleAction(setEndDateAction, (state, action) =>
    produce(state, draft => {
      const { endDate } = action.payload;
      draft.endDate = endDate;
    })
  )
  .handleAction(setMinPriceAction, (state, action) =>
    produce(state, draft => {
      const { minPrice } = action.payload;
      draft.minPrice = minPrice;
    })
  )
  .handleAction(setMaxPriceAction, (state, action) =>
    produce(state, draft => {
      const { maxPrice } = action.payload;
      draft.maxPrice = maxPrice;
    })
  )
  .handleAction(setIsIncludeUnsoldAction, (state, action) =>
    produce(state, draft => {
      const { isIncludeUnsold } = action.payload;
      draft.isIncludeUnsold = isIncludeUnsold;
    })
  )
  .handleAction(setIsViewCurrentCurrencyAction, (state, action) =>
    produce(state, draft => {
      const { isViewCurrentCurrency } = action.payload;
      draft.isViewCurrentCurrency = isViewCurrentCurrency;
    })
  );
