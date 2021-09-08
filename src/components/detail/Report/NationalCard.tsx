import React from 'react';
import styled from 'styled-components';

const NationalCard = ({ mostPopularAuction, mostPopularRegion }) => {
  // TODO: Region의 값에따라 이미지 분류
  return (
    <NationalCardLayout>
      <h3 className={'font-garamond'}>{mostPopularAuction}</h3>
      <div className={'img'}>
        <img src={`/assets/images/icon-newyork.png`} alt="" />
      </div>
      <p className={'font-garamond'}>{mostPopularRegion}</p>
    </NationalCardLayout>
  );
};

const NationalCardLayout = styled.div`
  background: #fff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.25em;
    line-height: 50px;
  }
  p {
    line-height: 40px;
    font-size: 1.125rem;
    font-weight: 600;
    border-top: 1px solid #ddd;
  }

  .img {
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default NationalCard;
