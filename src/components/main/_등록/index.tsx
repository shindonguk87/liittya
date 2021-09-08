import React from 'react';
import styled from 'styled-components';

const _등록 = () => {
  return (
    <_컨테이너>
      <_컨텐츠>
        <_타이틀>
          Be the first to try Aimme Analytics
          <br />
          Resgister now
        </_타이틀>
        <_내용>
          <_버튼>Become Aimme’s Early-bird</_버튼>
          <_설명>
            We offer up to 50% discount to those who join now for their first year’s subscription. Become an Aimme’s
            member and don’t miss the worldwide art market flow.
          </_설명>
        </_내용>
      </_컨텐츠>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  padding: 10px 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 375px) {
    padding-bottom: 20px;
  }
`;

const _컨텐츠 = styled.div`
  max-width: 1023px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 92px 44px;
  }
`;

const _타이틀 = styled.span`
  font-family: 'EB Garamond', serif;
  font-size: 40px;
  font-weight: 800;
  line-height: 1.23;
  color: #333;

  @media screen and (max-width: 375px) {
    font-size: 31px;
    font-weight: bold;
    color: #444;
  }
`;

const _내용 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;

  @media screen and (max-width: 375px) {
    flex-direction: column-reverse;
  }
`;

const _버튼 = styled.button`
  width: 294px;
  height: 91px;
  padding: 17px 37px 18px 38px;
  border-radius: 4px;
  box-shadow: 0 1px 2px 0 #efe4e0;
  border: solid 1px #333;
  background-color: #fff;
  font-size: 23px;
  font-weight: bold;
  line-height: 1.26;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 23px;
  }

  @media screen and (max-width: 375px) {
    padding: 20px 15px;
    font-size: 17px;
    line-height: 1.26;
  }
`;

const _설명 = styled.div`
  padding-left: 50px;
  flex: 1;
  font-size: 25px;
  font-weight: 500;
  line-height: 1.4;
  color: #444;

  @media screen and (max-width: 768px) {
    font-size: 19px;
    line-height: 1.84;
  }

  @media screen and (max-width: 375px) {
    font-size: 20px;
    line-height: 1.55;
    padding-left: 0;
    padding-bottom: 32px;
  }
`;

export default _등록;
