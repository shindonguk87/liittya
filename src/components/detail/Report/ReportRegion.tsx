import React from 'react';
import styled from 'styled-components';
import RegionChart from './RegionChart';
import getRegionName from '../../../utils/getRegionName';

const ReportRegion = ({ lastDecadeAuctionInfo }) => {
  return (
    <ReportRegionLayout>
      <div className={'report__header'}>
        <h3>This Artist’s work’s number of the auctions and regions in the last decade</h3>
      </div>

      <div className={'region__chart'}>
        <div className={'region__chart-imgs'}>
          {lastDecadeAuctionInfo.map((info, index) => {
            return (
              <div className="img" key={index}>
                <span>
                  <img src={`/assets/images/icon-${getRegionName(info.region)}.png`} alt="" />
                </span>
              </div>
            );
          })}
        </div>
        <RegionChart lastDecadeAuctionInfo={lastDecadeAuctionInfo} />
        <div className={'bar'} />
      </div>
    </ReportRegionLayout>
  );
};

const ReportRegionLayout = styled.div`
  .region__chart {
    max-width: 920px;
    width: 100%;
    position: relative;
    canvas {
      max-height: 250px !important;
    }
    .bar {
      position: absolute;
      left: 0;
      bottom: 25px;
      width: 100%;
      height: 5px;
      background: #eee4d6;
    }
  }

  .region__chart-imgs {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3em;

    .img {
      width: 20%;
      flex: none;
      text-align: center;
      padding: 0 2em;
      @media screen and (max-width: 768px) {
        padding: 0 0.25em;
      }
      span {
        display: block;
        width: 100%;
        padding-bottom: calc(100% - 10px);
        position: relative;
        background: #fff;
        border-radius: 50%;
        border: 5px solid #eee4d6;
      }
      img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        max-width: 90%;
        max-height: 90%;
      }
    }
  }
`;

export default ReportRegion;
