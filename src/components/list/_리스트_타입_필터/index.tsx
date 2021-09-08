import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/reducers';
import { State } from '../../../store/list/state';
import selectors from '../../../store/selectors';
import {
  setIsIncludeUnsoldAction,
  setIsViewCurrentCurrencyAction,
  setPageNoAction,
  setSortTypeAction,
} from '../../../store/list/actions';

const _리스트_보여지는_타입_필터 = () => {
  const dispatch = useDispatch();
  const { isIncludeUnsold, isViewCurrentCurrency, sortType } = useSelector<RootState, State>(selectors.listState);

  const 팔지않는_상품_포함 = useMemo(() => isIncludeUnsold === 'Y', [isIncludeUnsold]);

  const 현재가격_표시 = useMemo(() => isViewCurrentCurrency === 'Y', [isViewCurrentCurrency]);

  return (
    <_컨테이너>
      <_필터_리스트>
        <_필터
          onClick={() => {
            dispatch(
              setIsIncludeUnsoldAction({
                isIncludeUnsold: isIncludeUnsold === 'Y' ? 'N' : 'Y',
              })
            );
          }}
        >
          <_체크박스 type="checkbox" checked={팔지않는_상품_포함} readOnly={true} />
          <_필터이름>Include Unsold Works</_필터이름>
        </_필터>
        <_필터
          onClick={() => {
            dispatch(
              setIsViewCurrentCurrencyAction({
                isViewCurrentCurrency: isViewCurrentCurrency === 'Y' ? 'N' : 'Y',
              })
            );
          }}
        >
          <_체크박스 type="checkbox" checked={현재가격_표시} readOnly={true} />
          <_필터이름>View by Current Price</_필터이름>
          <_힌트_아이콘>?</_힌트_아이콘>
        </_필터>
      </_필터_리스트>
      <_정렬_타입_선택>
        <_정렬_타입_선택_타이틀>Sort by</_정렬_타입_선택_타이틀>
        <선택_버튼
          value={sortType}
          onChange={e => {
            dispatch(setPageNoAction({ pageNo: 1 }));
            dispatch(setSortTypeAction({ sortType: e.target.value }));
          }}
        >
          <_옵션 value="1">Price: Descending order</_옵션>
          <_옵션 value="2">Price: Ascending order</_옵션>
          <_옵션 value="3">Sale Date: Descending order</_옵션>
          <_옵션 value="4">Sale Date: Ascending order</_옵션>
          <_옵션 value="5">Size: Descending order</_옵션>
          <_옵션 value="6">Size: Ascending order</_옵션>
        </선택_버튼>
      </_정렬_타입_선택>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  padding: 16px 0 32px;
  display: flex;
`;

const _필터_리스트 = styled.div`
  display: flex;
  flex: 1;
`;

const _필터 = styled.div`
  margin-right: 26px;
  display: flex;
  align-items: center;
`;

const _체크박스 = styled.input`
  width: 20px;
  height: 20px;
`;

const _필터이름 = styled.span`
  margin-left: 8px;
  font-size: 14px;
  cursor: pointer;
`;

const _힌트_아이콘 = styled.i``;

const _정렬_타입_선택 = styled.div``;

const _정렬_타입_선택_타이틀 = styled.span`
  font-size: 16px;
  line-height: 24px;
  padding-right: 21px;
`;

const 선택_버튼 = styled.select`
  width: 203px;
  height: 40px;
  padding: 8px 20px;
  font-size: 12px;
  appearance: none;

  ::-ms-expand {
    display: none; /*for IE10,11*/
  }
`;

const _옵션 = styled.option`
  font-weight: 400;
`;

export default _리스트_보여지는_타입_필터;
