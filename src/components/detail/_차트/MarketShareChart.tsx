import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Polar } from 'react-chartjs-2';

const MarketShareChart = ({ marketShareSector }) => {
  const [labels, setLabels] = useState([]);
  const [value, setValue] = useState([]);
  const [volume, setVolume] = useState([]);

  const colors = ['#FFFFFF', '#A8796C', '#D2AF8D', '#EBCEA6', '#FFEBCC'];

  useEffect(() => {
    marketShareSector?.map(info => {
      setLabels(prevState => [...prevState, info.title]);
      setValue(prevState => [...prevState, info['value']]);
      setVolume(prevState => [...prevState, info['volume']]);
    });
  }, [marketShareSector]);

  return (
    <MarketShareChartLayout>
      <div className={'labels'}>
        {labels.map((label, index) => {
          return (
            <p className={'font-garamond'} style={{ color: colors[index] }} key={index}>
              {label}
            </p>
          );
        })}
      </div>
      <div className={'colbox'}>
        <Polar
          data={{
            labels: labels,
            datasets: [
              {
                data: value,
                backgroundColor: ['#FFFFFF', '#A8796C', '#D2AF8D', '#EBCEA6', '#FFEBCC'],
                borderWidth: 0,
                labels: labels,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
              labels: {
                fontColor: '#fff',
              },
            },
            scale: {
              display: true,
              ticks: {
                backdropColor: 'rgba(0,0,0,0)',
                fontColor: 'rgba(0,0,0,0)',
              },
            },
          }}
        />
        <p className={'font-garamond'}>a. By Value of Sales</p>
      </div>
      <div className={'colbox'}>
        <Polar
          data={{
            labels: labels,
            datasets: [
              {
                data: volume,
                backgroundColor: ['#FFFFFF', '#A8796C', '#D2AF8D', '#EBCEA6', '#FFEBCC'],
                borderWidth: 0,
                labels: labels,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
              display: false,
              labels: {
                fontColor: '#fff',
              },
            },
            scale: {
              display: true,
              ticks: {
                backdropColor: 'rgba(0,0,0,0)',
                fontColor: 'rgba(0,0,0,0)',
              },
            },
          }}
        />
        <p className={'font-garamond'}>a. By Volume of Sales</p>
      </div>
    </MarketShareChartLayout>
  );
};

const MarketShareChartLayout = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .labels {
    position: absolute;
    top: -0.5em;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 1;

    p {
      font-size: 14px;
      font-weight: 600;
      line-height: 1.25em;
    }
  }

  @media screen and (max-width: 600px) {
    display: block;
    .labels {
      position: relative;
    }
  }

  .colbox {
    flex: 1;
    text-align: center;
    position: relative;
    z-index: 2;

    & ~ .colbox {
      margin-left: 2em;
      @media screen and (max-width: 600px) {
        margin-top: 3em;
        margin-left: 0;
      }
    }

    p {
      color: #fff;
      margin-top: 1.5em;
      font-weight: 600;
      text-align: center;
    }
  }
`;

export default MarketShareChart;
