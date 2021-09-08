import React from 'react';
import styled from 'styled-components';
import { RecommendArtist } from '../../../../../apis/recommendArtist';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setArtistSeqAction } from '../../../../../store/list/actions';

interface Props {
  작가: RecommendArtist;
}

const _작가 = ({ 작가 }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <_컨테이너
      onClick={() => {
        dispatch(setArtistSeqAction({ artistSeq: String(작가.artistSeq) }));
        router.push('/list');
      }}
    >
      <_이미지_영역>
        <_이미지 src={작가.imageSrc} alt="" />
      </_이미지_영역>
      <_설명>
        <_제목_영역>
          <_제목>$ {작가.averagePrice}</_제목>
        </_제목_영역>
        <_작가명>{작가.artistName}</_작가명>
        <_작가정보>{작가.bornBirthYear}</_작가정보>
        <_경매정보>2012 Sotheby’s HongKong</_경매정보>
      </_설명>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  position: relative;
  height: 452px;
  width: 292px;
  margin: 0 6px 52px;
`;

const _이미지_영역 = styled.div`
  width: 292px;
  height: 292px;
  background-color: #ede6db;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const _이미지 = styled.img`
  object-fit: contain;
  width: 292px;
  height: 292px;
`;

const _설명 = styled.div`
  background-color: #ffffff;
  width: 272px;
  height: 160px;
  position: absolute;
  top: 270px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0;
`;

const _제목_영역 = styled.div`
  font-weight: 300;
  color: #454545;
`;

const _제목 = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 24px;
  font-weight: bold;
  color: #454545;
`;

const _작가명 = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 16px;
  letter-spacing: -0.67px;
  color: #454545;
`;

const _작가정보 = styled.span`
  font-size: 12px;
  line-height: 1.33;
  color: #454545;
`;

const _경매정보 = styled.span`
  font-size: 16px;
  line-height: 1.5;
  color: #8f8f8f;
`;

export default _작가;
