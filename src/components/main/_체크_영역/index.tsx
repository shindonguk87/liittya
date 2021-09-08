import React from 'react';
import styled from 'styled-components';

const _체크_영역 = () => {
  return (
    <_컨테이너>
      <_체크_항목>
        <_체크_박스 type="checkbox" id="1" />
        <_체크_텍스트 htmlFor="1">Keep updated on the lasted changes of the art market</_체크_텍스트>
      </_체크_항목>
      <_체크_항목>
        <_체크_박스 type="checkbox" id="2" />
        <_체크_텍스트 htmlFor="2">View the flow of market value by artwork you registered</_체크_텍스트>
      </_체크_항목>
      <_체크_항목>
        <_체크_박스 type="checkbox" id="3" />
        <_체크_텍스트 htmlFor="3">
          Use insights to learn more about overall trends across global art market
        </_체크_텍스트>
      </_체크_항목>
      <_체크_항목>
        <_체크_박스 type="checkbox" id="4" />
        <_체크_텍스트 htmlFor="4">Search freely for auction results unlimited</_체크_텍스트>
      </_체크_항목>
      <_필터_버튼_영역>
        <_필터_버튼>Become Aimme’s Early-bird</_필터_버튼>
      </_필터_버튼_영역>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  position: relative;
  background-color: #fff;
  top: -139px;
  left: 291px;
  z-index: 1;
  padding: 30px 320px 30px 157px;

  @media screen and (max-width: 768px) {
    top: -160px;
    left: 50px;
    padding: 58px 73px 30px 33px;
  }

  @media screen and (max-width: 375px) {
    top: -360px;
  }
`;

const _체크_항목 = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;

  @media screen and (max-width: 375px) {
    align-items: flex-start;
  }
`;

const _체크_박스 = styled.input`
  width: 29px;
  height: 26px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;

const _체크_텍스트 = styled.label`
  padding-left: 29px;
  flex: 1;
  font-family: 'EB Garamond', serif;
  font-size: 34px;
  font-weight: 600;
  color: #333;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 27px;
  }

  @media screen and (max-width: 375px) {
    font-size: 25px;
  }
`;

const _필터_버튼_영역 = styled.div`
  margin: 12px 0 0 64px;

  @media screen and (max-width: 375px) {
    margin: 0;
  }
`;

const _필터_버튼 = styled.button`
  padding: 20px 25px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 #efe4e0;
  border: solid 1px #333;
  background-color: #fff;
  font-size: 23px;
  font-weight: bold;
  line-height: 1.04;
  cursor: pointer;
  color: #333;

  @media screen and (max-width: 375px) {
    padding: 20px 15px;
    font-size: 17px;
    line-height: 1.26;
  }
`;

export default _체크_영역;
