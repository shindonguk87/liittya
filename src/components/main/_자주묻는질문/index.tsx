import React, { useState } from 'react';
import styled from 'styled-components';

const _자주묻는질문 = () => {
  const [질문1_열림, set질문1_열림] = useState<boolean>(true);
  const [질문2_열림, set질문2_열림] = useState<boolean>(true);

  return (
    <_컨테이너>
      <_컨텐츠>
        <_제목>Frequently Asked Questions</_제목>
        <_질문과답변_영역>
          <_질문과답변>
            <_질문>
              <_질문_텍스트>What is Aimme?</_질문_텍스트>
              <_열고닫기_버튼
                src={질문1_열림 ? '/assets/images/icon-minus.png' : '/assets/images/icon-plus.png'}
                alt=""
                onClick={() => {
                  set질문1_열림(prev => !prev);
                }}
              />
            </_질문>
            <_답변>
              <_답변_텍스트 열림={질문1_열림}>
                Aimme is an AI system which is named with the combination of the word “aim” and “me”. Aimme is an AI art
                market analytic program which is designed to provide market analysis and daily update the data of
                artists and their works. For now, we are building data from the Secondary market and planning on
                expanding our database to galleries and contemporary artists in the Primary Market. We are here to
                present new perspective, new prospect and diverse inspirations beyond simply conveying the facts.
              </_답변_텍스트>
            </_답변>
          </_질문과답변>
          <_질문과답변>
            <_질문>
              <_질문_텍스트>Who can use Aimme?</_질문_텍스트>
              <_열고닫기_버튼
                src={질문2_열림 ? '/assets/images/icon-minus.png' : '/assets/images/icon-plus.png'}
                alt=""
                onClick={() => {
                  set질문2_열림(prev => !prev);
                }}
              />
            </_질문>
            <_답변>
              <_답변_텍스트 열림={질문2_열림}>
                Experts who views the art market continuously rather than just the results and would like to follow the
                change flow. Auction Houses or Galleries who would want to do business logically with the right
                statistics. Collectors who would like to know the market value with the real-time auction results.
              </_답변_텍스트>
            </_답변>
          </_질문과답변>
        </_질문과답변_영역>
      </_컨텐츠>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const _컨텐츠 = styled.div`
  max-width: 1023px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 44px;
  }
`;

const _제목 = styled.div`
  width: 100%;
  flex: 1;
  padding-bottom: 56px;
  font-family: 'EB Garamond', serif;
  font-size: 40px;
  font-weight: bold;
  color: #333;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 31px;
    font-weight: bold;
    color: #444;
  }

  @media screen and (max-width: 375px) {
    font-size: 27px;
  }
`;

const _질문과답변_영역 = styled.div``;

const _질문과답변 = styled.div``;

const _질문 = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 0;
  height: 48px;
  box-shadow: inset 0 -1px 0 0 #333;
`;

const _질문_텍스트 = styled.span`
  flex: 1;
  font-family: 'EB Garamond', serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.67;
`;

const _열고닫기_버튼 = styled.img`
  position: relative;
  width: 24px;
  height: 24px;
`;

const _답변 = styled.div<{ 열림: boolean }>`
  padding: 23px 0 60px;
  width: 1023px;

  @media screen and (max-width: 1200px) {
    width: 768px;
  }
  @media screen and (max-width: 768px) {
    width: 670px;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;

const _답변_텍스트 = styled.span`
  font-size: 17px;
  line-height: 1.41;
  color: #333;
  display: ${({ 열림 }) => (열림 ? 'block' : 'none')};
`;

export default _자주묻는질문;
