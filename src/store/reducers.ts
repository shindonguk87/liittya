import { StateType } from 'typesafe-actions';
import { reducer as listReducer } from './list/reducer';
import { reducer as detailReducer } from './detail/reducers';
import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

const combineReducer = combineReducers({
  list: listReducer,
  detail: detailReducer,
});

export const rootReducer = (state, action) => {
  switch (action.type) {
    // 서버 사이드 데이터를 클라이언트 사이드 Store에 통합.
    case HYDRATE:
      if (!state?.isHydrated) {
        return { ...state, ...action.payload, isHydrated: true };
      }
    default: {
      return combineReducer(state, action);
    }
  }
};

export type RootState = StateType<typeof combineReducer>;
