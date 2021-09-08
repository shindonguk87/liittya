import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const _네비게이션바 = () => {
  return (
    <_컨테이너>
      <_컨텐츠>
        <_로고>
          <Link href={'/'}>
            <_로고_이미지 src="//www.aimmeart.com/resources/img/main_logo.png" alt="Animme" width={91} height={23} />
          </Link>
        </_로고>
        <_링크영역>
          <_링크 href="//www.aimmeart.com/contact" target="_blank">
            Contact
          </_링크>
          <_링크 href="//www.aimmeart.com/about" target="_blank">
            About us
          </_링크>
        </_링크영역>
      </_컨텐츠>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  width: 100%;
  height: 86px;
  background: #fff;
  display: flex;
  @media screen and (max-width: 1470px) {
    padding: 0 10px;
  }
`;

const _링크 = styled.a`
  font-size: 16px;
  transition: 0.3s;
  letter-spacing: 0.3px;
  color: #000;

  :nth-child(1) {
    padding-right: 32px;
  }
`;

const _컨텐츠 = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  transition: all 0.3s;
  padding: 0 80px;

  @media screen and (max-width: 1470px) {
    background: #fff;
  }
`;

const _로고 = styled.a`
  flex: 1;
  cursor: pointer;
`;

const _로고_이미지 = styled.img`
  @media screen and (max-width: 1470px) {
    height: 25px;
  }
  @media screen and (max-width: 768px) {
    height: 20px;
  }
`;

const _링크영역 = styled.div``;

export default _네비게이션바;
