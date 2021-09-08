import React from 'react';
import styled from 'styled-components';
import Section from '../Layout/Section';
import Wrap from '../Layout/Wrap';
import AverageAnnualSalesChart from './AverageAnnualSalesChart';
import SecondaryMarketShareChart from './SecondaryMarketShareChart';
import TradeValueChart from './TradeValueChart';
import MarketShareChart from './MarketShareChart';

const _차트 = ({
  averageAnnualSales,
  secondaryMarketShareByValue,
  secondaryMarketShareByVolume,
  tradeVolumesSector,
  marketShareSector,
}) => {
  return (
    <ChartLayout>
      <Section>
        <Wrap>
          <div className="flex">
            <div className="col">
              <h2>Trade Volume : Post-War and Contemporary Sector</h2>
              <div className={'chartbg chartbg--1'}>
                <TradeValueChart tradeVolumesSector={tradeVolumesSector} />
              </div>
            </div>
            <div className="col col--2">
              <h2>Market Share by Sector of the Fine Art Auction Market in 2019</h2>
              <div className={'chartbg chartbg--2'}>
                <MarketShareChart marketShareSector={marketShareSector} />
              </div>
            </div>
          </div>

          {/*<h2>Trade Volume : Post-War and Contemporary Sector</h2>*/}
          {/*<div className={'chartbg chartbg--1'}>*/}
          {/*  <TradeValueChart tradeVolumesSector={tradeVolumesSector} />*/}
          {/*</div>*/}
        </Wrap>
      </Section>

      {/*<Section>*/}
      {/*  <Wrap>*/}
      {/*    <h2>Market Share by Sector of the Fine Art Auction Market in 2019</h2>*/}
      {/*    <div className={'chartbg chartbg--2'}>*/}
      {/*      <MarketShareChart marketShareSector={marketShareSector} />*/}
      {/*    </div>*/}
      {/*  </Wrap>*/}
      {/*</Section>*/}

      <Section>
        <Wrap>
          <h2>Secondary Market Share of the Post-War and Contemporary Sector in 2019</h2>
          <div className={'chartbg chartbg--3'}>
            <div className={'flex'}>
              <div className="col">
                <SecondaryMarketShareChart values={secondaryMarketShareByValue} title={'Market share by Value'} />
              </div>
              <div className="col">
                <SecondaryMarketShareChart values={secondaryMarketShareByVolume} title={'Market share by Volume'} />
              </div>
            </div>
            <p>*source: art basel and UBS art report 2019</p>
          </div>
        </Wrap>
      </Section>

      <Section>
        <Wrap>
          <h2>Reference: Average Annual Sales by Sector, 2018 and 2019</h2>
          <div className={'chartbg chartbg--4'}>
            <AverageAnnualSalesChart averageAnnualSales={averageAnnualSales} />
          </div>
        </Wrap>
      </Section>
    </ChartLayout>
  );
};

const ChartLayout = styled.div`
  .chartbg {
    position: relative;
    z-index: 2;
    background: #0b425a;
    padding: 30px 20px;
    &.chartbg--1 {
      canvas {
        height: 350px !important;
        width: 100% !important;
      }
    }

    &.chartbg--2 {
      canvas {
        margin: 0 auto;
        width: 100% !important;
        height: 310px !important;
      }
    }
    &.chartbg--3 {
      canvas {
        height: 300px !important;
        width: 100% !important;
      }

      @media screen and (max-width: 1024px) {
        .flex {
          display: block;
        }
        .col {
          & ~ .col {
            margin-top: 5em;
          }
        }
      }
      h3 {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
        width: 100px;
        text-align: center;
        font-size: 1.125rem;
        line-height: 1.25em;
        font-weight: 600;
      }
      p {
        margin-top: 15px;
        color: #639db7;
        font-size: 0.875rem;
        text-align: center;
      }
    }
    &.chartbg--4 {
      canvas {
        height: 300px !important;
      }
    }
  }
  background: #032d43;
  position: relative;
  overflow: hidden;
  &:before,
  &:after {
    position: absolute;
    background: url('/assets/images/chart-bg.png') no-repeat center;
    background-size: 100% 100%;
    width: 373px;
    height: 313px;
    content: '';
    right: -160px;
    top: 30%;
    z-index: 1;
  }
  &:before {
    background: url('/assets/images/chart-bg2.png') no-repeat center;
    right: auto;
    left: -160px;
    top: 50%;
  }
  h2 {
    color: #fff;
    margin-bottom: 10px;
    font-size: 1rem;
    font-weight: 600;
    position: relative;
    z-index: 2;
  }

  .flex {
    display: flex;
    @media screen and (max-width: 768px) {
      display: block;
    }

    .col {
      flex: 1;
      position: relative;

      &.col--2 {
        margin-left: 5em;
        @media screen and (max-width: 1200px) {
          margin-left: 2em;
        }

        @media screen and (max-width: 768px) {
          margin-left: 0;
          margin-top: 5em;
        }
      }

      * ~ .col {
        margin-left: 5em;
      }
    }
  }
`;

export default _차트;
