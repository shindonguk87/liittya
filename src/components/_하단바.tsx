import React from 'react';
import styled from 'styled-components';

const _하단바 = () => {
  return (
    <_컨테이너>
      <_컨텐츠>
        <_상단영역>
          <_로고>
            <_로고_링크 target="_blank" href="http://www.5letters.net">
              <_로고_이미지 src="//www.aimmeart.com/resources/img/0.Logo_primary.png" />
            </_로고_링크>
          </_로고>
          <_공유>
            <_공유_링크
              target="_blank"
              href="//www.facebook.com/Aimme-113271170092535/?view_public_for=113271170092535"
            >
              <_공유_이미지 src="//www.aimmeart.com/resources/img/facebook@3x.png" />
            </_공유_링크>
            <_공유_링크 target="_blank" href="//www.instagram.com/aimme.art/">
              <_공유_이미지 src="//www.aimmeart.com/resources/img/instagram@3x.png" />
            </_공유_링크>
          </_공유>
        </_상단영역>
        <_하단영역>
          <_카피라이트>© 2020 Liittya Inc.</_카피라이트>
          <_사이트맵>
            <_사이트맵_링크 href={'//www.aimmeart.com/about'} target="_blank">
              About us
            </_사이트맵_링크>
            <_사이트맵_링크 href={'//www.aimmeart.com/contact'} target="_blank">
              Contact
            </_사이트맵_링크>
            <_사이트맵_링크 href={'//www.aimmeart.com/teamOfUs'} target="_blank">
              Terms of use
            </_사이트맵_링크>
            <_사이트맵_링크 href={'//www.aimmeart.com/privacyPolicy'} target="_blank">
              Privacy policy
            </_사이트맵_링크>
            <_사이트맵_링크 href={'//www.aimmeart.com/privacyPolicy?cookie'} target="_blank">
              Cookie policy
            </_사이트맵_링크>
          </_사이트맵>
        </_하단영역>
      </_컨텐츠>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 258px;
  width: 100%;
`;

const _컨텐츠 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1100px;
`;

const _상단영역 = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const _로고 = styled.div`
  flex: 1;
`;

const _로고_링크 = styled.a``;

const _공유 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80px;
`;

const _공유_링크 = styled.a``;

const _공유_이미지 = styled.img`
  width: 32px;
  height: 32px;
`;

const _로고_이미지 = styled.img`
  width: 80px;
  height: 40px;
`;

const _하단영역 = styled.div`
  display: flex;
`;

const _카피라이트 = styled.span`
  flex: 1;
`;

const _사이트맵 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 550px;
`;

const _사이트맵_링크 = styled.a`
  color: #000;
`;

export default _하단바;
