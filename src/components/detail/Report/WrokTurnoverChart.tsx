import React from 'react';
import { Bar } from 'react-chartjs-2';
import useWindowSize from '../../../hooks/useWindowSize';

function randomValue() {
  return Math.floor(Math.random() * 100);
}

const data = {
  labels: ['2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
  datasets: [
    {
      data: [
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
        randomValue(),
      ],
      backgroundColor: [
        '#AB7B6D',
        '#AB7B6D',
        '#AB7B6D',
        '#AB7B6D',
        '#AB7B6D',
        '#AB7B6D',
        '#AB7B6D',
        '#AB7B6D',
        '#AB7B6D',
        '#AB7B6D',
        '#AB7B6D',
      ],
      borderWidth: 0,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    xAxes: [
      {
        barThickness: 35, // number (pixels) or 'flex'
        maxBarThickness: 35, // number (pixels)
        gridLines: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          callback: function (value) {
            switch (value) {
              case 0:
                return '0';
              case 20:
                return '20%';
              case 40:
                return '40%';
              case 60:
                return '60%';
              case 80:
                return '80%';
              case 100:
                return '100%';
            }
          },
        },
      },
    ],
  },
};

const WrokTurnoverChart = () => {
  const [width] = useWindowSize();
  return (
    <>
      <Bar
        data={data}
        options={
          width > 768
            ? options
            : {
                ...options,
                scales: {
                  ...options.scales,
                  xAxes: [
                    {
                      barThickness: 15, // number (pixels) or 'flex'
                      maxBarThickness: 15, // number (pixels)
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                },
              }
        }
      />
    </>
  );
};

export default WrokTurnoverChart;
