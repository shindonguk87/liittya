import React, { useState } from 'react';
import styled from 'styled-components';

const _개요 = ({ brushStroke, provenance, artworkCategory, artworkTimeline, artworkTimelineText }) => {
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const minMaxSpace = 50;
  const minMaxAvg = (maxPrice - minPrice) / 50;

  artworkTimeline?.map(({ price }) => {
    const numberPrice = parseInt(price.split(',').join(''), 10);
    if (minPrice === null || minPrice > numberPrice) {
      setMinPrice(numberPrice);
    }
    if (maxPrice === null || maxPrice < numberPrice) {
      setMaxPrice(numberPrice);
    }
  });

  const minTimeLineStyle = {
    marginBottom: 15,
  };
  const maxTimeLineStyle = {
    marginBottom: 15 + minMaxSpace,
  };

  return (
    <_컨테이너>
      <_컨텐츠>
        <_타이틀_영역>
          <_타이틀>Artwork Overview and Analytics</_타이틀>
        </_타이틀_영역>

        <_섹션>
          <_섹션_제목>Brushstroke</_섹션_제목>
          <_섹션_내용 dangerouslySetInnerHTML={{ __html: brushStroke }} />
        </_섹션>

        <_섹션>
          <_섹션_제목>Provenance</_섹션_제목>
          <_섹션_내용 dangerouslySetInnerHTML={{ __html: provenance }} />
        </_섹션>

        <_섹션>
          <_섹션_제목>Artwork Category</_섹션_제목>
          <_섹션_내용>
            <ul>
              {artworkCategory?.map((category, index) => {
                return <li key={index}>{category.category}</li>;
              })}
            </ul>
          </_섹션_내용>
        </_섹션>

        <_섹션>
          <_섹션_제목>Artwork Timeline</_섹션_제목>
          <_타임라인>
            {artworkTimeline?.map(({ year, currency, price }, index) => {
              const numberPrice = parseInt(price.split(',').join(''), 10);
              return (
                <_타임라인_아이템 key={index}>
                  <_타임라인_컨테이너
                    style={
                      numberPrice === minPrice
                        ? minTimeLineStyle
                        : numberPrice === maxPrice
                        ? maxTimeLineStyle
                        : {
                            marginBottom: `${(numberPrice - minPrice) / minMaxAvg}px`,
                          }
                    }
                  >
                    <_타임라인_컨텐츠 className={'timeline__content'}>
                      <_볼드>{currency}</_볼드>
                      {price}
                    </_타임라인_컨텐츠>
                  </_타임라인_컨테이너>
                  <_타임라인_년도>{year}</_타임라인_년도>
                </_타임라인_아이템>
              );
            })}
          </_타임라인>
          {artworkTimelineText?.map(text => {
            return <_타임라인_내용 key={text.seq} dangerouslySetInnerHTML={{ __html: text.text }} />;
          })}
        </_섹션>
      </_컨텐츠>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  max-width: 1624px;
  display: flex;
  justify-content: flex-end;
`;

const _컨텐츠 = styled.div`
  padding-bottom: 70px;
`;

const _타이틀_영역 = styled.div`
  box-shadow: inset 0 -1px 0 0 #333;
  padding: 9px 0 8px;
`;

const _타이틀 = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 1.67;
  color: #333;
`;

const _섹션 = styled.div`
  margin-top: 30px;

  p {
    font-size: 16px;
    line-height: 1.5;
    color: #aaa;
  }

  li {
    font-size: 18px;
    font-weight: bold;
    line-height: 1.56;
    color: #0c435b;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const _섹션_제목 = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

const _섹션_내용 = styled.div`
  font-size: 16px;
  color: #aaa;
  line-height: 1.5;
`;

const _타임라인 = styled.div`
  display: flex;
  margin-bottom: 10px;
  max-width: 450px;
  position: relative;
  align-items: flex-end;
  margin-top: 15px;
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: #0c435b;
    position: absolute;
    bottom: 10px;
    left: 0;
    z-index: 1;
  }
`;

const _타임라인_아이템 = styled.div`
  flex: 1;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const _타임라인_컨테이너 = styled.div`
  text-align: center;
  color: #fff;
  border: 1px solid #0c435b;
  border-radius: 50%;
  width: 90px;
  height: 90px;
  padding: 5px;
  margin: 0 auto;
  margin-bottom: 15px;
`;

const _타임라인_컨텐츠 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #0c435b;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 600;
`;

const _볼드 = styled.strong`
  display: block;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 5px;
`;

const _타임라인_년도 = styled.div`
  font-size: 1.125rem;
  color: #0c435b;
  background: #fdfcf9;
  font-weight: 600;
  padding: 0 10px;
  line-height: 20px;
`;

const _타임라인_내용 = styled.div`
  font-size: 16px;
  line-height: 1.69;
  color: #333;
`;

export default _개요;
