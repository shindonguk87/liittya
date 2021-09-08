import React from 'react';
import _네비게이션바 from '../components/_네비게이션바';
import styled from 'styled-components';
import _상단_백그라운드 from '../components/main/_상단_백그라운드';
import _작가_리스트_영역 from '../components/main/_작가_리스트_영역';
import _프로세스 from '../components/main/_프로세스';
import _체크_영역 from '../components/main/_체크_영역';
import _추천_작가_영역 from '../components/main/_추천_작가_영역';
import _하단바 from '../components/_하단바';
import _등록 from '../components/main/_등록';
import _자주묻는질문 from '../components/main/_자주묻는질문';

const _메인_페이지 = () => {
  return (
    <_컨테이너>
      <_네비게이션바 />
      <_컨텐츠>
        <_상단_백그라운드 />
        <_체크_영역 />
        <_프로세스 />
        <_작가_리스트_영역 />
        <_추천_작가_영역 />
        <_등록 />
        <_자주묻는질문 />
      </_컨텐츠>
      <_하단바 />
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  background-color: #fbf7f1;
  overflow: hidden;
`;

const _컨텐츠 = styled.div`
  width: 100%;
  overflow: hidden;
`;

export default _메인_페이지;
