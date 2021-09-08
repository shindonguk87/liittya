import React from 'react';
import styled from 'styled-components';

const AuctionChart = ({ soldInAuction, unsoldInAuction }) => {
  return (
    <AuctionChartLayout>
      <div className="flex">
        <div className="col">
          <div className="chart">
            <ChartBar percent={unsoldInAuction} color={'#DC604D'}>
              <span className={'font-garamond'}>{unsoldInAuction}%</span>
            </ChartBar>
          </div>
          <p className={'font-garamond'}>Unsold</p>
        </div>
        <div className="col">
          <div className="chart">
            <ChartBar percent={soldInAuction} color={'#45A391'}>
              <span className={'font-garamond'}>{soldInAuction}%</span>
            </ChartBar>
          </div>
          <p className={'font-garamond'}>sold</p>
        </div>
      </div>
    </AuctionChartLayout>
  );
};

const ChartBar = styled.div`
  width: 50px;
  height: ${props => props.percent + '%'};
  border-top: 5px solid ${props => props.color};
  border-right: 1px solid ${props => props.color};
  color: ${props => props.color};
  span {
    margin-top: -1.5em;
    display: block;
    font-size: 0.875rem;
  }
`;

const AuctionChartLayout = styled.div`
  background: #fff;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);

  .flex {
    display: flex;
  }
  .col {
    flex: 1;
    margin: 0 !important;
  }

  .chart {
    height: 210px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-top: 20px;
  }
  p {
    text-align: center;
    line-height: 40px;
    font-size: 1.125rem;
    font-weight: 600;
    border-top: 1px solid #ddd;
  }
`;

export default AuctionChart;
