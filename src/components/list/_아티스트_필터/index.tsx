import React from 'react';
import styled from 'styled-components';
import _선택된_작가_리스트 from './_선택된_작가_리스트';
import _추천_작가_리스트 from './_추천_작가_리스트';

const _아티스트_필터 = () => {
  return (
    <_컨테이너>
      <_타이틀>Select Artists</_타이틀>
      <_추천_작가_리스트 />
      <_선택된_작가_리스트 />
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  border-bottom: 1px solid #ede9e2;
  padding-top: 39px;
`;

const _타이틀 = styled.span`
  font-family: 'EB Garamond';
  font-size: 42px;
  font-weight: bold;
  color: #333;
`;

export default _아티스트_필터;
