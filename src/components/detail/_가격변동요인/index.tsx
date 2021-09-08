import React, { memo } from 'react';
import styled from 'styled-components';

import Section from '../Layout/Section';
import Wrap from '../Layout/Wrap';

interface Props {
  factor: any;
}

// eslint-disable-next-line react/display-name
const _변동요인 = memo(({ factor }: Props) => {
  return (
    <FactorItemLayout>
      <div className={'imgs'}>
        <img src={`/assets/images/icon-factor${factor.seq}.svg`} alt="" />
      </div>
      <p>{factor.title}</p>
    </FactorItemLayout>
  );
});

const _가격변동요인 = ({ priceFluctuationFactor }) => {
  return (
    <_컨테이너>
      <Section>
        <Wrap>
          <h2>Price Fluctuation Factors</h2>
          <div className={'factorlist'}>
            {priceFluctuationFactor?.map(factor => {
              return <_변동요인 key={factor.seq} factor={factor} />;
            })}
          </div>
        </Wrap>
      </Section>
    </_컨테이너>
  );
};

const _컨테이너 = styled.div`
  background: #032d43;
  h2 {
    color: #fff;
    margin-bottom: 10px;
    font-size: 1rem;
    font-weight: 600;
  }

  .factorlist {
    display: flex;
    flex-wrap: wrap;
    padding: 3em 0;
    border-top: 5px solid #042639;
    border-bottom: 5px solid #042639;
    @media screen and (max-width: 1470px) {
      padding: 2em 0;
    }
  }
`;

const FactorItemLayout = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  flex: none;
  &:nth-child(n + 6) {
    margin-top: 3em;
  }
  @media screen and (max-width: 1470px) {
    width: 25%;
    &:nth-child(n + 5) {
      margin-top: 2em;
    }
  }
  @media screen and (max-width: 1200px) {
    width: 33.333%;
    &:nth-child(n + 4) {
      margin-top: 2em;
    }
  }
  @media screen and (max-width: 768px) {
    width: 50%;
    &:nth-child(n + 3) {
      margin-top: 2em;
    }
  }
  .imgs {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8rem;
    height: 8rem;
    border: 1px solid #ffebcc;
    border-radius: 50%;
    flex: none;
    background: #042639;

    @media screen and (max-width: 1470px) {
      width: 6rem;
      height: 6rem;
    }

    @media screen and (max-width: 768px) {
      width: 5rem;
      height: 5rem;
    }
    img {
      max-width: 60%;
      max-height: 60%;
    }
  }
  p {
    color: #fff;
    line-height: 1.5em;
    padding: 0 1em;
    font-weight: 600;
  }
`;

export default _가격변동요인;
