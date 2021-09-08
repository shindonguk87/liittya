import React, { useEffect, useState } from 'react';

import { Bar } from 'react-chartjs-2';
import useWindowSize from '../../../hooks/useWindowSize';

const HistoricalChart = ({ historycalPerfomanceWorks }) => {
  const [data, setData] = useState(null);
  const [width] = useWindowSize();

  useEffect(() => {
    (document as any).fonts.ready.then(function () {
      setData({
        labels: [...historycalPerfomanceWorks?.map(history => history.date)],
        datasets: [
          {
            type: 'line',
            data: [...historycalPerfomanceWorks?.map(history => history.price)],
            fill: false,
            borderDash: [5],
            borderColor: '#FFEBCC',
            pointBackgroundColor: '#FFEBCC',
            pointBorderWidth: '10px',
          },
        ],
      });
    });
  }, [historycalPerfomanceWorks]);

  const options = {
    events: false,
    tooltips: {
      enabled: false,
    },
    hover: {
      animationDuration: 0,
    },
    animation: {
      duration: 1,
      onComplete: function () {
        const chartInstance = this.chart,
          ctx = chartInstance.ctx;
        ctx.font = (window as any).Chart.helpers.fontString(
          '10px',
          (window as any).Chart.defaults.global.defaultFontStyle,
          (window as any).Chart.defaults.global.defaultFontFamily
        );
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

        this.data.datasets.forEach(function (dataset, i) {
          const meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            bar._yScale.margins.top = 10;
            let data = dataset.data[index];

            data = '$' + data;
            ctx.fillStyle = '#fff';
            ctx.fillText(data, bar._model.x, bar._model.y - 10);
          });
        });
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          barThickness: 30, // number (pixels) or 'flex'
          maxBarThickness: 30, // number (pixels)
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            fontSize: 14,
            fontColor: '#fff',
            padding: 100,
            fontFamily: "'EB Garamond', sans-serif",
          },
        },
      ],
      yAxes: [
        {
          position: 'right',
          gridLines: {
            color: '#073A50',
            lineWidth: 2,
            drawBorder: false,
          },
          ticks: {
            fontColor: '#639DB7',
            beginAtZero: true,
            callback: function (value) {
              return '$' + value + 'M';
            },
          },
        },
      ],
    },
  };
  return (
    <>
      {data && (
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
                        barThickness: 30, // number (pixels) or 'flex'
                        maxBarThickness: 30, // number (pixels)
                        gridLines: {
                          display: false,
                          drawBorder: false,
                        },
                        ticks: {
                          fontSize: 14,
                          fontColor: '#fff',
                          padding: 60,
                          fontFamily: "'EB Garamond', sans-serif",
                        },
                      },
                    ],
                  },
                }
          }
        />
      )}
    </>
  );
};

export default HistoricalChart;
