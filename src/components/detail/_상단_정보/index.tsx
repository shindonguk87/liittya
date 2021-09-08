import React from 'react';
import styled from 'styled-components';

import _슬라이더 from './_슬라이더';
import _정보 from './_정보';

const _상단_정보 = ({
  lotImages,
  lotArtistName,
  lotArtistBirth,
  lotTitle,
  hammerPrice,
  currentPrice,
  auctionEstimatedHigh,
  auctionEstimatedLow,
  lotNumber,
  auctionTitle,
}) => {
  return (
    <_컨테이너>
      <_컨텐츠>
        <_슬라이드_영역>
          <_슬라이더 lotImages={lotImages} />
        </_슬라이드_영역>
        <_정보_영역>
          <_정보
            lotArtistName={lotArtistName}
            lotArtistBirth={lotArtistBirth}
            lotTitle={lotTitle}
            // aimmeEstimatedHigh={aimmeEstimatedHigh}
            // aimmeEstimatedLow={aimmeEstimatedLow}
            // aimmeGrowth={aimmeGrowth}
            hammerPrice={hammerPrice}
            currentPrice={currentPrice}
            // auctionCurrency={auctionCurrency}
            auctionEstimatedHigh={auctionEstimatedHigh}
            auctionEstimatedLow={auctionEstimatedLow}
            lotNumber={lotNumber}
            auctionTitle={auctionTitle}
          />
        </_정보_영역>
      </_컨텐츠>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  display: flex;
  padding: 56px 0;
`;

const _컨텐츠 = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 56px 104px 56px 279px;
  background-color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const _슬라이드_영역 = styled.div`
  flex: 1;
  max-width: 594px;
  @media screen and (max-width: 1200px) {
    max-width: 450px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 370px;
  }
  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

const _정보_영역 = styled.div`
  padding-left: 91px;
  flex: 1;
  @media screen and (max-width: 1200px) {
    padding-left: 20px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 0;
    margin-top: 20px;
  }
`;

export default _상단_정보;
