import React from 'react';
import styled from 'styled-components';

const _프로세스 = () => {
  return (
    <_컨테이너>
      <_프로세스_소개>
        <_프로세스_소개_타이틀>If you are …</_프로세스_소개_타이틀>
        <_프로세스_카드_영역>
          <_프로세스_카드>
            <_프로세스_번호>1</_프로세스_번호>
            <_프로세스_설명>
              <_프로세스_타이틀>Auctioneer or Gallery</_프로세스_타이틀>
              <_프로세스_상세설명>Who would like to raise sales using the art index and analysis</_프로세스_상세설명>
            </_프로세스_설명>
          </_프로세스_카드>
          <_프로세스_카드>
            <_프로세스_번호>2</_프로세스_번호>
            <_프로세스_설명>
              <_프로세스_타이틀>Collector</_프로세스_타이틀>
              <_프로세스_상세설명>
                Who would like to conti-nuously follow up on the everchanging art market
              </_프로세스_상세설명>
            </_프로세스_설명>
          </_프로세스_카드>
          <_프로세스_카드>
            <_프로세스_번호>3</_프로세스_번호>
            <_프로세스_설명>
              <_프로세스_타이틀>Art Enterprise</_프로세스_타이틀>
              <_프로세스_상세설명>Who would like to work more up to date</_프로세스_상세설명>
            </_프로세스_설명>
          </_프로세스_카드>
        </_프로세스_카드_영역>
      </_프로세스_소개>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const _프로세스_소개 = styled.div`
  margin-top: -60px;

  @media screen and (max-width: 768px) {
    margin-top: -90px;
  }

  @media screen and (max-width: 375px) {
    margin-top: -320px;
  }
`;

const _프로세스_소개_타이틀 = styled.div`
  padding-left: 68px;
  font-family: 'EB Garamond', serif;
  font-size: 55px;
  font-weight: bold;
  color: #444;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 375px) {
    padding-left: 16px;
  }
`;

const _프로세스_카드_영역 = styled.div`
  margin-top: 28px;
  overflow: hidden;
`;

const _프로세스_카드 = styled.div`
  float: left;
  width: 450px;
  height: 250px;
  display: flex;
  padding: 30px 45px;

  @media screen and (max-width: 768px) {
    padding: 7px 0 17px 97px;
    height: auto;
  }
  @media screen and (max-width: 375px) {
    width: 100%;
    padding: 30px 15px;
  }
`;

const _프로세스_번호 = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 60px;
  font-weight: bold;
  color: #333;
  padding-right: 20px;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media screen and (max-width: 375px) {
    font-size: 45px;
  }
`;

const _프로세스_설명 = styled.div`
  display: flex;
  flex-direction: column;
`;

const _프로세스_타이틀 = styled.span`
  padding-top: 35px;
  font-family: 'EB Garamond', serif;
  font-size: 30px;
  font-weight: 800;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 375px) {
    font-size: 25px;
    padding-bottom: 12px;
  }
`;

const _프로세스_상세설명 = styled.span`
  font-size: 26px;
  font-weight: 500;
  color: #444;

  @media screen and (max-width: 768px) {
    font-size: 21px;
  }

  @media screen and (max-width: 375px) {
    font-size: 19px;
  }
`;

export default _프로세스;
