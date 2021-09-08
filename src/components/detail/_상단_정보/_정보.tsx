import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Popover from 'react-awesome-popover';
import PopoverOverlay from '../Popover/PopoverOverlay';
import { useRouter } from 'next/router';

const _정보 = ({
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
  const [, setLock] = useState(false);
  const [공유하기열림, set공유하기열림] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.query.lock === '1') {
      setLock(true);
    }
  }, [router]);

  return (
    <_컨테이너>
      <_공유아이콘_영역>
        <_공유아이콘
          src="http://www.aimmeart.com/resources/img/shared.svg"
          alt=""
          onClick={() => {
            set공유하기열림(true);
          }}
        />
        <_공유하기 열림={공유하기열림}>
          <_공유_타이틀>Share</_공유_타이틀>
          <_공유버튼_영역>
            <_공유버튼>
              <_공유버튼_이미지 src="http://www.aimmeart.com/resources/img/facebook.svg" alt="" />
              Facebook
            </_공유버튼>
            <_공유버튼>
              <_공유버튼_이미지 src="http://www.aimmeart.com/resources/img/facebook.svg" alt="" />
              Linked in
            </_공유버튼>
            <_공유버튼>
              <_공유버튼_이미지 src="http://www.aimmeart.com/resources/img/facebook.svg" alt="" />
              Twitter
            </_공유버튼>
            <_공유버튼>
              <_공유버튼_이미지 src="http://www.aimmeart.com/resources/img/facebook.svg" alt="" />
              Pinterest
            </_공유버튼>
            <_공유버튼>
              <_공유버튼_이미지 src="http://www.aimmeart.com/resources/img/facebook.svg" alt="" />
              Mail
            </_공유버튼>
          </_공유버튼_영역>
          <_공유_닫기_버튼
            onClick={() => {
              set공유하기열림(false);
            }}
          >
            Cancel
          </_공유_닫기_버튼>
        </_공유하기>
      </_공유아이콘_영역>
      <_상단영역 className="top">
        <_제목>{lotTitle}</_제목>
        <_작가이름>{lotArtistName}</_작가이름>
        <_작가생일>{lotArtistBirth}</_작가생일>
      </_상단영역>
      <_가격_정보_영역>
        <_가격_정보>
          <_가격>
            <_가격_타이틀>Hammer Price</_가격_타이틀>
            <Popover action="hover" placement="bottom-start" arrow={false} overlayColor={'transparent'}>
              <_가격_정보_버튼 />
              <PopoverOverlay>
                This is NOT a value of the art market. It reflected inflation and the exchange rate value of the US
                dollar. Aimme wish this price will be useful to your decision of buy or sell an artwork.
              </PopoverOverlay>
            </Popover>
          </_가격>
          <_가격_텍스트>$ {hammerPrice}</_가격_텍스트>
        </_가격_정보>
        <_가격_정보>
          <_가격>
            <_가격_타이틀>Current Price</_가격_타이틀>
            <Popover action="hover" placement="bottom-start" arrow={false} overlayColor={'transparent'}>
              <_가격_정보_버튼 />
              <PopoverOverlay>
                This price is auction house’s estimate price. Estimates do not reflect the final hammer price and do not
                include buyer’s premium, any applicable taxes or artist’s resale right. Please check the auction house’s
                catalogue for more information. Aimme will estimate the price through Market Analysis in 2020.
              </PopoverOverlay>
            </Popover>
          </_가격>
          <_가격_텍스트>$ {currentPrice}</_가격_텍스트>
        </_가격_정보>
      </_가격_정보_영역>

      <_기타_영역>
        <_기타_타이틀_영역>
          <_기타_타이틀>Auction House’s Estimate</_기타_타이틀>
          <Popover action="hover" placement="bottom-start" arrow={false} overlayColor={'transparent'}>
            <_기타_버튼 />
            <PopoverOverlay>내용필요</PopoverOverlay>
          </Popover>
        </_기타_타이틀_영역>
        <_기타_가격>
          $ {auctionEstimatedLow} ~ $ {auctionEstimatedHigh}
        </_기타_가격>
        <br />
        <_작품_번호>LOT {lotNumber}</_작품_번호>
        <_경매_제목>{auctionTitle}</_경매_제목>
      </_기타_영역>

      <_회원가입_링크_영역>
        <_회원가입_링크_제목>Become Aimme’s Early-Bird</_회원가입_링크_제목>
        <_회원가입_링크_설명>
          We aime to officially release our website next year. Register early-bird now to try our service and even get a
          50% discount!
        </_회원가입_링크_설명>
        <_회원가입_버튼>Sign up now</_회원가입_버튼>
      </_회원가입_링크_영역>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  width: 400px;
`;

const _공유아이콘_영역 = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -30px;
`;

const _공유아이콘 = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const _공유하기 = styled.div<{ 열림: boolean }>`
  display: ${({ 열림 }) => (열림 ? 'block' : 'none')};
  position: absolute;
  width: 320px;
  height: 230px;
  padding: 20px 16px;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 #efe4e0;
  border: solid 1px rgba(157, 155, 155, 0.4);
`;

const _공유_타이틀 = styled.div`
  font-size: 20px;
  color: #333333;
  line-height: 1.2;
  font-weight: 300;
  letter-spacing: 0.03rem;
  padding-bottom: 10px;
`;

const _공유버튼_영역 = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 143px);
  align-items: center;
`;

const _공유버튼 = styled.li`
  display: flex;
  align-items: center;
  width: 143px;
  font-size: 16px;
  line-height: 24px;
  color: #454545;
  cursor: pointer;
`;

const _공유버튼_이미지 = styled.img`
  width: 30px;
  height: 40px;
`;

const _공유_닫기_버튼 = styled.div`
  color: #9a9a9a;
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  cursor: pointer;
  padding-top: 10px;
`;

const _상단영역 = styled.div`
  margin-bottom: 15px;
  margin-top: -10px;
  padding: 19px 122px 17px 0;
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.5);
`;

const _제목 = styled.h2`
  font-family: 'EB Garamond', serif;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.5;
  color: #333;
`;

const _작가이름 = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #454545;
  line-height: 1.5;
`;

const _작가생일 = styled.p`
  font-size: 12px;
  line-height: 1.33;
  color: #454545;
`;

const _가격_정보_영역 = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #c1c1c1;
  display: flex;
`;

const _가격_정보 = styled.div`
  flex: 1;
`;

const _가격 = styled.div`
  font-size: 1rem;
  display: flex;
  align-content: center;
  justify-content: flex-start;
`;

const _가격_타이틀 = styled.span`
  font-size: 16px;
  line-height: 1.5;
  color: #333;
`;

const _가격_정보_버튼 = styled.button`
  margin-left: 10px;
  background: url('/assets/images/icon-popover.png') no-repeat center;
  background-size: 100% 100%;
  width: 1.125rem;
  height: 1.125rem;
`;

const _가격_텍스트 = styled.h3`
  font-family: 'EB Garamond', serif;
  font-size: 32px;
  font-weight: bold;
  line-height: 1.25;
  letter-spacing: -0.8px;
  color: #333;
`;

const _기타_영역 = styled.div`
  padding-top: 15px;
`;

const _기타_타이틀_영역 = styled.div`
  font-size: 1rem;
  display: flex;
  align-content: center;
  justify-content: flex-start;
`;

const _기타_타이틀 = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #333;
`;

const _기타_버튼 = styled.button`
  margin-left: 10px;
  background: url('/assets/images/icon-popover.png') no-repeat center;
  background-size: 100% 100%;
  width: 1.125rem;
  height: 1.125rem;
`;

const _기타_가격 = styled.h3`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  color: #333;
`;

const _작품_번호 = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #333;
`;

const _경매_제목 = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #333;
`;

const _회원가입_링크_영역 = styled.div`
  padding: 14px 21px 20.5px 22px;
  background-color: #fbf7f1;
  margin: 34px 0;
`;

const _회원가입_링크_제목 = styled.div`
  font-family: 'EB Garamond', serif;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.6;
`;

const _회원가입_링크_설명 = styled.div`
  font-family: 'EB Garamond', serif;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.33;
`;

const _회원가입_버튼 = styled.div`
  width: 348px;
  height: 48px;
  border: solid 1px #333;
  background-color: #fff;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 13px;
  border-radius: 5px;
  cursor: pointer;
`;

export default _정보;
