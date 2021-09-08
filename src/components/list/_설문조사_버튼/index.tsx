import React, { useState } from 'react';
import styled from 'styled-components';

const _설문조사_버튼 = () => {
  const [팝업열림, set팝업열림] = useState<boolean>(false);

  return (
    <_컨테이너>
      <_팝업 팝업열림={팝업열림}>
        <_팝업제목>Notice :)</_팝업제목>
        <_팝업소제목>Aimme is Beta version now</_팝업소제목>
        <_팝업내용>Aimme Beta has 3 months of auction data from July to October 2019.</_팝업내용>
        <_팝업추가설명_제목>We Value Your Feedback!</_팝업추가설명_제목>
        <_팝업추가설명_내용>Please participate this survey for better Aimme.</_팝업추가설명_내용>
        <_설문버튼_컨테이너>
          <_설문버튼 href="https://s.surveyplanet.com/ikFWTZV7" target="_blank">
            Go to Survey
          </_설문버튼>
        </_설문버튼_컨테이너>
      </_팝업>
      <_아이콘_컨테이너
        팝업열림={팝업열림}
        onClick={() => {
          set팝업열림(prev => !prev);
        }}
      >
        <_아이콘
          팝업열림={팝업열림}
          src={
            팝업열림 ? '//www.aimmeart.com/resources/img/msg-xbtn.png' : '//www.aimmeart.com/resources/img/msg-icon.png'
          }
        />
      </_아이콘_컨테이너>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  position: fixed;
  right: 30px;
  bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const _팝업 = styled.div<{ 팝업열림: boolean }>`
  display: ${({ 팝업열림 }) => (팝업열림 ? 'flex' : 'none')};
  background-color: #fff;
  border: solid 1px rgba(157, 155, 155, 0.4);
  padding: 20px 16px;
  flex-direction: column;
  margin-bottom: 16px;
`;

const _팝업제목 = styled.span``;

const _팝업소제목 = styled.span``;

const _팝업내용 = styled.span``;

const _팝업추가설명_제목 = styled.span``;

const _팝업추가설명_내용 = styled.span``;

const _설문버튼_컨테이너 = styled.div`
  display: flex;
`;

const _설문버튼 = styled.a`
  background-color: #344f91;
  color: #fff;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
`;

const _아이콘_컨테이너 = styled.div<{ 팝업열림: boolean }>`
  background-color: ${({ 팝업열림 }) => (팝업열림 ? '#9a9a9a' : '#3e67c7')};
  border-radius: 50%;
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px 2px rgb(0 0 0 / 26%);
`;

const _아이콘 = styled.img<{ 팝업열림: boolean }>`
  width: ${({ 팝업열림 }) => (팝업열림 ? 26 : 32)}px;
  height: ${({ 팝업열림 }) => (팝업열림 ? 26 : 24)}px;
`;

export default _설문조사_버튼;
