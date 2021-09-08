import React, { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import useRecommendArtist from '../../../../hooks/swr/useRecommendArtist';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setArtistSeqAction } from '../../../../store/list/actions';
import { RootState } from '../../../../store/reducers';
import { State } from '../../../../store/list/state';
import selectors from '../../../../store/selectors';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const _추천_작가_리스트 = () => {
  const dispatch = useDispatch();
  const { data } = useRecommendArtist();
  const { artistSeq } = useSelector<RootState, State>(selectors.listState);

  const [슬라이드_아이템_갯수, set슬라이드_아이템_갯수] = useState(0);

  useEffect(() => {
    const resizeEventListener = () => {
      set슬라이드_아이템_갯수(Math.floor(window.innerWidth / 156) <= 6 ? Math.floor(window.innerWidth / 156) : 6);
    };

    window.addEventListener('resize', resizeEventListener);

    return () => {
      window.removeEventListener('resize', resizeEventListener);
    };
  }, [set슬라이드_아이템_갯수]);

  useEffect(() => {
    set슬라이드_아이템_갯수(Math.floor(window.innerWidth / 156) <= 6 ? Math.floor(window.innerWidth / 156) : 6);
  }, []);

  const 아티스트_변경 = useCallback(
    (seq: string) => {
      const arrayData = artistSeq && artistSeq.length > 0 ? artistSeq.split(',') : [];
      if (!arrayData.includes(seq)) {
        const seqSet = new Set(arrayData);
        seqSet.add(seq);
        dispatch(
          setArtistSeqAction({
            artistSeq: Array.from(seqSet).join(','),
          })
        );
      } else {
        const seqSet = new Set(arrayData);
        seqSet.delete(seq);
        dispatch(
          setArtistSeqAction({
            artistSeq: seqSet.size > 0 ? Array.from(seqSet).join(',') : undefined,
          })
        );
      }
    },
    [dispatch, artistSeq]
  );

  if (!data) {
    return <></>;
  }

  return (
    <_컨테이너>
      <Swiper slidesPerView={슬라이드_아이템_갯수 * 2 + 1} spaceBetween={17.5} className="mySwiper" navigation={true}>
        <SwiperSlide>
          <_작가_아이템_영역
            onClick={() => {
              dispatch(
                setArtistSeqAction({
                  artistSeq: undefined,
                })
              );
            }}
          >
            <_전체_이미지>All</_전체_이미지>
          </_작가_아이템_영역>
        </SwiperSlide>
        {data.map(artist => {
          return (
            <SwiperSlide key={artist.artistName}>
              <_작가_아이템_영역 onClick={() => 아티스트_변경(String(artist.artistSeq))}>
                <_작가_이미지 src={artist.imageSrc} alt="" />
                <_작가_이름>{artist.artistName}</_작가_이름>
                <_작가_생일>{artist.bornBirthYear}</_작가_생일>
              </_작가_아이템_영역>
            </SwiperSlide>
          );
        })}
        {data.map(artist => {
          return (
            <SwiperSlide key={artist.artistName}>
              <_작가_아이템_영역 onClick={() => 아티스트_변경(String(artist.artistSeq))}>
                <_작가_이미지 src={artist.imageSrc} alt="" />
                <_작가_이름>{artist.artistName}</_작가_이름>
                <_작가_생일>{artist.bornBirthYear}</_작가_생일>
              </_작가_아이템_영역>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  .swiper-slide {
    width: auto !important;
  }
  padding: 24px 0;
  background: #fffcf8;
  margin: 39px 0 14px;
`;

const _작가_아이템_영역 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 156px;
  cursor: pointer;
  height: 196px;
`;

const _전체_이미지 = styled.div`
  background-color: #ede6db;
  width: 107px;
  height: 107px;
  font-family: 'EB Garamond', serif;
  font-size: 28px;
  font-weight: 500;
  color: #333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const _작가_이미지 = styled.img`
  width: 156px;
  height: 156px;
  border-radius: 50%;
`;

const _작가_이름 = styled.span`
  font-family: 'Helvetica Neue', arial, serif;
  font-size: 17px;
  font-weight: 500;
  color: #454545;
  line-height: 1.5;
`;

const _작가_생일 = styled.span`
  font-family: 'Helvetica Neue', arial, serif;
  font-size: 12px;
  line-height: 1.33;
  color: #454545;
`;

export default _추천_작가_리스트;
