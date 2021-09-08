import React from 'react';
import styled from 'styled-components';
import _작가_리스트 from './_작가_리스트';
import useRecommendArtist from '../../../hooks/swr/useRecommendArtist';

const _작가_리스트_영역 = () => {
  const { data } = useRecommendArtist();

  return (
    <_컨테이너>
      <_타이틀>Find out Analyzed artwork of Aimme</_타이틀>
      <_작가_리스트 작가리스트={data} />
      <_타이틀>Auction Result: Yayoi Kusama</_타이틀>
      <_작가_리스트 작가리스트={data} />
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  background-color: #f6f1eb;
  padding: 130px 0;
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    margin-top: 56px;
    padding: 67px 0;
  }
`;

const _타이틀 = styled.div`
  padding: 0 0 28px 104px;
  font-family: 'EB Garamond', serif;
  font-size: 33px;
  font-weight: bold;
  color: #333;

  @media screen and (max-width: 768px) {
    padding: 0 0 28px 40px;
  }

  @media screen and (max-width: 375px) {
    font-size: 32px;
  }
`;

export default _작가_리스트_영역;
