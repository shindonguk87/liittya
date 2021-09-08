import React from 'react';
import styled from 'styled-components';
import _네비게이션바 from '../../components/_네비게이션바';
import _아티스트_필터 from '../../components/list/_아티스트_필터';
import _리스트_필터 from '../../components/list/_리스트_필터';
import _리스트_정보 from '../../components/list/_리스트_정보';
import _리스트_타입_필터 from '../../components/list/_리스트_타입_필터';
import _작품_리스트 from '../../components/list/_작품_리스트';
import _하단바 from '../../components/_하단바';
import _설문조사_버튼 from '../../components/list/_설문조사_버튼';
// import { getSSRListData, ListApiRequestParam } from "../../apis/list";
import useList from '../../hooks/swr/useList';
// import { wrapper } from "../../store";
// import {
//   setArtistSeqAction,
//   setAuctionTypeAction,
//   setEndDateAction,
//   setIsIncludeUnsoldAction,
//   setIsViewCurrentCurrencyAction,
//   setLocationTypeAction,
//   setMaxPriceAction,
//   setMinPriceAction,
//   setPageNoAction,
//   setPerPageAction,
//   setSortTypeAction,
//   setStartDateAction,
// } from "../../store/list/actions";
import { useSelector } from 'react-redux';
import selectors from '../../store/selectors';
import { RootState } from '../../store/reducers';
import { State } from '../../store/list/state';
import _페이지네이션 from '../../components/list/_작품_리스트/_페이지네이션';
import Loader from '../../components/common/Loader';

// type QueryParamsType = ListApiRequestParam & {
//   allAccess?: number;
//   artistTotalList?: string;
//   currentPage?: string;
// };

const _리스트_페이지 = ({ ssrListData }) => {
  const { fetchedData, ...params } = useSelector<RootState, State>(selectors.listState);
  const { data, error } = useList({
    apiParams: params,
    initialData: fetchedData ? fetchedData : ssrListData ?? undefined,
  });

  if (error) {
    return <div>API 에러</div>;
  }

  if (!data) {
    return (
      <>
        <_네비게이션바 />
        <_로딩_컨테이너>
          <Loader fullSize={true} backgroundColor={'#fbf7f1'} />
        </_로딩_컨테이너>
      </>
    );
  }

  return (
    <_컨테이너>
      <_네비게이션바 />
      <_컨텐츠>
        <_필터>
          <_아티스트_필터 />
          <_리스트_필터 />
          <_리스트_정보
            총갯수={data.totalResultCnt}
            평균_가격={data.averagePrice}
            현재_평균_가격={data.averageCurrentPrice}
          />
          <_리스트_타입_필터 />
        </_필터>
        <_작품리스트_영역>
          {data.resultList.length === 0 ? (
            <_결과없음_텍스트>No results</_결과없음_텍스트>
          ) : (
            <>
              <_작품_리스트 작품_리스트={data.resultList} />
              <_페이지네이션 총_갯수={Number(data.totalResultCnt.replace(/,/g, ''))} />
            </>
          )}
        </_작품리스트_영역>
      </_컨텐츠>
      <_하단바 />
      <_설문조사_버튼 />
    </_컨테이너>
  );
};

const _로딩_컨테이너 = styled.div`
  background-color: #fbf7f1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _컨테이너 = styled.div`
  background-color: #fbf7f1;
  display: flex;
  flex-direction: column;
`;

const _필터 = styled.div``;

const _작품리스트_영역 = styled.div``;

const _결과없음_텍스트 = styled.div`
  text-align: center;
  color: #ab7b6d;
  padding: 180px 0;
  width: 100%;
  font-size: 32px;
`;

const _컨텐츠 = styled.div`
  width: 1230px;
  margin: auto;
`;

// _리스트_페이지.getInitialProps = wrapper.getInitialPageProps(
//   ({ dispatch, getState }) =>
//     async ({ query }) => {
//       const {
//         pageNo,
//         perPage,
//         sortType,
//         artistSeq,
//         auctionType,
//         locationType,
//         startDate,
//         endDate,
//         minPrice,
//         maxPrice,
//         isIncludeUnsold,
//         isViewCurrentCurrency,
//       } = getState();
//       console.log(getState());
//       const convertQuery = {
//         pageNo:
//           pageNo ?? query.pageNo ? Number(query.pageNo) : initState.pageNo,
//         perPage:
//           perPage ?? query.perPage ? Number(query.perPage) : initState.perPage,
//         sortType:
//           sortType ?? query.sortType
//             ? Number(query.sortType)
//             : initState.sortType,
//         artistSeq:
//           artistSeq ?? query.artistSeq ? String(query.artistSeq) : undefined,
//         auctionType:
//           auctionType ?? query.auctionType
//             ? String(query.auctionType)
//             : undefined,
//         locationType:
//           locationType ?? query.locationType
//             ? String(query.locationType)
//             : undefined,
//         startDate:
//           startDate ?? query.startDate ? String(query.startDate) : undefined,
//         endDate: endDate ?? query.endDate ? String(query.endDate) : undefined,
//         minPrice:
//           minPrice ?? query.minPrice ? Number(query.minPrice) : undefined,
//         maxPrice:
//           maxPrice ?? query.maxPrice ? Number(query.maxPrice) : undefined,
//         isIncludeUnsold:
//           isIncludeUnsold ?? query.isIncludeUnsold
//             ? String(query.isIncludeUnsold)
//             : undefined,
//         isViewCurrentCurrency:
//           isViewCurrentCurrency ?? query.isViewCurrentCurrency
//             ? String(query.isViewCurrentCurrency)
//             : undefined,
//       };
//       try {
//         dispatch(setPageNoAction({ pageNo: convertQuery.pageNo }));
//         dispatch(setPerPageAction({ perPage: convertQuery.perPage }));
//         dispatch(setSortTypeAction({ sortType: convertQuery.sortType }));
//         dispatch(setArtistSeqAction({ artistSeq: convertQuery.artistSeq }));
//         dispatch(
//           setAuctionTypeAction({ auctionType: convertQuery.auctionType })
//         );
//         dispatch(
//           setLocationTypeAction({
//             locationType: convertQuery.locationType,
//           })
//         );
//         dispatch(setStartDateAction({ startDate: convertQuery.startDate }));
//         dispatch(setEndDateAction({ endDate: convertQuery.endDate }));
//         dispatch(setMinPriceAction({ minPrice: convertQuery.minPrice }));
//         dispatch(setMaxPriceAction({ maxPrice: convertQuery.maxPrice }));
//         dispatch(
//           setIsIncludeUnsoldAction({
//             isIncludeUnsold: convertQuery.isIncludeUnsold,
//           })
//         );
//         dispatch(
//           setIsViewCurrentCurrencyAction({
//             isViewCurrentCurrency: convertQuery.isViewCurrentCurrency,
//           })
//         );
//
//         return { ssrListData: await getSSRListData(convertQuery) };
//       } catch (error) {
//         return {
//           error,
//         };
//       }
//     }
// );

export default _리스트_페이지;
