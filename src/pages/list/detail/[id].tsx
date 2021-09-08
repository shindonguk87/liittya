import React from 'react';
import styled from 'styled-components';
import _상세_네비게이션바 from '../../../components/detail/_상세_네비게이션바';
import _상단_정보 from '../../../components/detail/_상단_정보';
import _개요 from '../../../components/detail/_개요';
import _히스토리 from '../../../components/detail/_히스토리';
import _차트 from '../../../components/detail/_차트';
import _가격변동요인 from '../../../components/detail/_가격변동요인';
import _추가설명 from '../../../components/detail/_추가설명';
import Report from '../../../components/detail/Report';

import useDetail from '../../../hooks/swr/useDetail';

const _상세_페이지 = ({ id }) => {
  const { data } = useDetail({ apiParams: { id } });

  if (!data) {
    return <></>;
  }

  const {
    lotImages,
    lotArtistName,
    lotArtistBirth,
    lotTitle,
    // aimmeEstimatedHigh,
    // aimmeEstimatedLow,
    // aimmeGrowth,
    hammerPrice,
    currentPrice,
    // auctionCurrency,
    auctionEstimatedHigh,
    auctionEstimatedLow,
    lotNumber,
    auctionTitle,

    brushStroke,
    provenance,
    artworkCategory,
    artworkTimeline,
    artworkTimelineText,

    historycalPerfomanceWorks,

    // charts...
    averageAnnualSales,
    priceFluctuationFactor,
    secondaryMarketShareByValue,
    secondaryMarketShareByVolume,
    tradeVolumesSector,
    marketShareSector,

    // Description
    exhibited,
    essay,
    literature,

    // report
    artist,
    artistInfo,
    topMediums,
    averageSize,
    relatedArtists,
    mostPopularAuction,
    mostPopularRegion,
    soldInAuction,
    unsoldInAuction,
    priceBidding,
    lastDecadeAuctionInfo,
    mostRecentSoldLotList,
    highestPriceSoldLotList,
    recentIssueList,
    artistMarketRisk,
  } = data;

  return (
    <>
      <_상세_네비게이션바 hammerPrice={hammerPrice} currentPrice={currentPrice} />

      <_컨테이너>
        <_상단_정보
          lotImages={lotImages}
          lotArtistName={lotArtistName}
          lotArtistBirth={lotArtistBirth}
          lotTitle={lotTitle}
          hammerPrice={hammerPrice}
          currentPrice={currentPrice}
          auctionEstimatedHigh={auctionEstimatedHigh}
          auctionEstimatedLow={auctionEstimatedLow}
          lotNumber={lotNumber}
          auctionTitle={auctionTitle}
        />
        <_개요
          brushStroke={brushStroke}
          provenance={provenance}
          artworkCategory={artworkCategory}
          artworkTimeline={artworkTimeline}
          artworkTimelineText={artworkTimelineText}
        />
        <_히스토리 historycalPerfomanceWorks={historycalPerfomanceWorks} />
        <_차트
          averageAnnualSales={averageAnnualSales}
          secondaryMarketShareByValue={secondaryMarketShareByValue}
          secondaryMarketShareByVolume={secondaryMarketShareByVolume}
          tradeVolumesSector={tradeVolumesSector}
          marketShareSector={marketShareSector}
        />
        <_가격변동요인 priceFluctuationFactor={priceFluctuationFactor} />
        <_추가설명 exhibited={exhibited} essay={essay} literature={literature} />
        <Report
          artist={artist}
          artistInfo={artistInfo}
          topMediums={topMediums}
          averageSize={averageSize}
          relatedArtists={relatedArtists}
          mostPopularAuction={mostPopularAuction}
          mostPopularRegion={mostPopularRegion}
          soldInAuction={soldInAuction}
          unsoldInAuction={unsoldInAuction}
          priceBidding={priceBidding}
          lastDecadeAuctionInfo={lastDecadeAuctionInfo}
          mostRecentSoldLotList={mostRecentSoldLotList}
          highestPriceSoldLotList={highestPriceSoldLotList}
          recentIssueList={recentIssueList}
          artworkCategory={artworkCategory}
          artistMarketRisk={artistMarketRisk}
          lotImages={lotImages}
        />
      </_컨테이너>
    </>
  );
};

const _컨테이너 = styled.div`
  background-color: #fbf7f1;
  padding-top: 100px;
  width: 100%;

  @media screen and (max-width: 1470px) {
    padding-top: 60px;
  }
`;

_상세_페이지.getInitialProps = async ({ query }) => {
  return {
    id: query.id,
  };
};

export default _상세_페이지;
