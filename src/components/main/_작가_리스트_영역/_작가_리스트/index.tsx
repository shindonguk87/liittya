import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useRef, useState } from 'react';
import SwiperCore, { Navigation } from 'swiper/core';
import styled from 'styled-components';
import _작가 from './_작가';
import { RecommendArtist } from '../../../../apis/recommendArtist';

interface Props {
  작가리스트?: RecommendArtist[];
}

SwiperCore.use([Navigation]);

const _작가_리스트 = ({ 작가리스트 }: Props) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [슬라이드아이템갯수, set슬라이드아이템갯수] = useState(0);

  useEffect(() => {
    const resizeEventListener = () => {
      set슬라이드아이템갯수(Math.floor(window.innerWidth / 292));
    };

    window.addEventListener('resize', resizeEventListener);

    return () => {
      window.removeEventListener('resize', resizeEventListener);
    };
  }, [set슬라이드아이템갯수]);

  useEffect(() => {
    set슬라이드아이템갯수(Math.floor(window.innerWidth / 292));
  }, []);

  return (
    <_컨테이너>
      <Swiper
        slidesPerView={슬라이드아이템갯수}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={{
          prevEl: prevRef.current ? prevRef.current : undefined,
          nextEl: nextRef.current ? nextRef.current : undefined,
        }}
        className="mySwiper2"
        onInit={swiper => {
          swiper.allowTouchMove = false;
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {작가리스트?.map(작가 => (
          <SwiperSlide key={작가.artistSeq}>
            <_작가 작가={작가} />
          </SwiperSlide>
        ))}

        <_버튼영역>
          <_이전_버튼 ref={prevRef} />
          <_버튼사이영역 />
          <_다음_버튼 ref={nextRef} />
        </_버튼영역>
      </Swiper>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  background-color: #f6f1eb;
  .swiper-slide {
    width: 292px !important;
  }
  cursor: pointer;
`;

const _버튼영역 = styled.div`
  position: absolute;
  z-index: 1;
  margin-top: -40px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1280px;

  @media screen and (max-width: 1200px) {
    width: 768px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 55px;
  }
`;

const _이전_버튼 = styled.div`
  width: 55px;
  height: 55px;
  background-size: 55px;
  background-image: url('/assets/images/icon-slideLeft.png');
  cursor: pointer;
`;

const _버튼사이영역 = styled.div`
  flex: 1;
  visibility: hidden;
`;

const _다음_버튼 = styled.div`
  width: 55px;
  height: 55px;
  background-size: 55px;
  background-image: url('/assets/images/icon-slideRight.png');
  cursor: pointer;
`;

export default _작가_리스트;
