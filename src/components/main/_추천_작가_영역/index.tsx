import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import useRecommendArtist from '../../../hooks/swr/useRecommendArtist';
import { useDispatch } from 'react-redux';
import { setArtistSeqAction } from '../../../store/list/actions';

const _추천_작가_영역 = () => {
  const dispatch = useDispatch();
  const { data: 작가리스트 } = useRecommendArtist();
  const router = useRouter();

  return (
    <_컨테이너>
      <_컨텐츠>
        <_상단영역>
          <_타이틀>Try out Beta Aimme for top 9 artists</_타이틀>
          <_설명>
            We aime to officially release our website next year. <_링크>Register early-bird</_링크>
            now to try our service and even get a 50% discount!
          </_설명>
        </_상단영역>
        <_하단영역>
          <_작가영역>
            {작가리스트?.map(작가 => (
              <_작가
                key={작가.artistSeq}
                onClick={() => {
                  dispatch(setArtistSeqAction({ artistSeq: String(작가.artistSeq) }));
                  router.push('/list');
                }}
              >
                <_작가_컨텐츠>
                  <_작가_이미지 src={작가.imageSrc} alt="" />
                  <_작가_이름>{작가.artistName}</_작가_이름>
                  <_작가_년생>{작가.bornBirthYear}</_작가_년생>
                  <_가격_타이틀>Avg.price</_가격_타이틀>
                  <_가격>$ {작가.averagePrice}</_가격>
                </_작가_컨텐츠>
              </_작가>
            ))}
          </_작가영역>
        </_하단영역>
      </_컨텐츠>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const _컨텐츠 = styled.div`
  background-color: #fffcf8;
  padding: 92px 130px 52px 400px;
  position: relative;
  width: 100%;
  height: 100%;
  top: -92px;
  left: -209px;

  @media screen and (max-width: 768px) {
    padding: 76px 40px 100px 40px;
    top: 0;
    left: 0;
  }
  @media screen and (max-width: 375px) {
    padding: 76px 16px 100px 16px;
  }
`;

const _상단영역 = styled.div`
  display: flex;
  flex-direction: column;
`;

const _타이틀 = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 33px;
  font-weight: bold;
  color: #333;

  @media screen and (max-width: 375px) {
    font-size: 32px;
  }
`;

const _설명 = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  color: #444;
  padding: 10px 0 50px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
    line-height: 1.45;
  }
`;

const _링크 = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  color: #ff7979;
  text-decoration: underline;
  text-underline: #ff7979;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 22px;
    line-height: 1.45;
  }
`;

const _하단영역 = styled.div``;

const _작가영역 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 240px);
  column-gap: 70px;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, 198px);
    column-gap: 37px;
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: repeat(auto-fill, 156px);
    column-gap: 16px;
  }
`;

const _작가 = styled.div`
  padding-bottom: 40px;
  cursor: pointer;
`;

const _작가_컨텐츠 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const _작가_이미지 = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 198px;
    height: 198px;
  }

  @media screen and (max-width: 375px) {
    width: 156px;
    height: 156px;
  }
`;

const _작가_이름 = styled.span`
  padding-top: 25px;
  font-size: 24px;
  font-weight: 500;
  color: #454545;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 375px) {
    font-size: 16px;
  }
`;

const _작가_년생 = styled.span`
  font-size: 16px;
  color: #454545;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

const _가격_타이틀 = styled.span`
  padding-top: 10px;
  font-size: 16px;
  color: #8f8f8f;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }

  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

const _가격 = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 24px;
  font-weight: bold;
  color: #454545;

  @media screen and (max-width: 768px) {
    font-size: 23px;
  }

  @media screen and (max-width: 375px) {
    font-size: 16px;
  }
`;

export default _추천_작가_영역;
