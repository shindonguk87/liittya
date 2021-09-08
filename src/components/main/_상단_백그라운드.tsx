import React from 'react';
import styled from 'styled-components';

const _상단_백그라운드 = () => {
  return (
    <_컨테이너>
      <_상단_컨테이너>
        <_영상영역>
          <_영상
            src="/assets/videos/30063130-preview.mp4"
            playsInline={true}
            autoPlay={true}
            muted={true}
            loop={true}
            preload="metadata"
          >
            웹브라우저가 video태그를 지원하지 않을 때 표시할 문구
          </_영상>
        </_영상영역>
        <_백그라운드_타이틀_영역>
          <_백그라운드_타이틀>
            <_백그라운드_타이틀_텍스트>
              Get on board
              <br />
              the ever-changing
              <_줄바꿈_영역 />
              art market
            </_백그라운드_타이틀_텍스트>
          </_백그라운드_타이틀>
        </_백그라운드_타이틀_영역>
      </_상단_컨테이너>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div``;

const _상단_컨테이너 = styled.div`
  position: relative;
`;

const _영상영역 = styled.div`
  height: 544px;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`;

const _영상 = styled.video`
  width: 100%;
  z-index: -1;
`;

// const _백그라운드 = styled.div<{ imgSrc: string }>`
//   background-image: url(${({ imgSrc }) => imgSrc});
//   background-position: center;
//   background-size: cover;
//   height: 544px;
//   width: 100%;
//   z-index: -1;
// `;

const _백그라운드_타이틀_영역 = styled.div`
  position: absolute;
  width: 100%;
  height: 415px;
  z-index: 1;
  left: 0;
  top: 0;

  @media screen and (max-width: 375px) {
    height: 211px;
  }
`;

const _백그라운드_타이틀 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const _백그라운드_타이틀_텍스트 = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 70px;
  font-weight: bold;
  text-align: center;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 60px;
    line-height: 1.3;
  }

  @media screen and (max-width: 375px) {
    font-size: 38px;
    line-height: 1.16;
  }
`;

const _줄바꿈_영역 = styled.br`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default _상단_백그라운드;
