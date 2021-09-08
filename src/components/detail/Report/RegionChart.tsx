import React, { useEffect, useState } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import { Bar, defaults } from 'react-chartjs-2';

defaults.global.defaultFontFamily = "'EB Garamond', sans-serif !important";

const RegionChart = ({ lastDecadeAuctionInfo }) => {
  const [width] = useWindowSize();
  const [labels, setLabels] = useState([]);
  const [prices, setPrices] = useState([]);
  const [counts, setCounts] = useState([]);

  useEffect(() => {
    (document as any).fonts.ready.then(function () {
      lastDecadeAuctionInfo?.map(info => {
        setLabels(prevState => [...prevState, info.auction]);
        setPrices(prevState => [...prevState, parseFloat(info.price.slice(0, -1))]);
        setCounts(prevState => [...prevState, info.cnt]);
      });
    });
  }, [lastDecadeAuctionInfo]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          barThickness: 40, // number (pixels) or 'flex'
          maxBarThickness: 40, // number (pixels)
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            fontFamily: "'EB Garamond', sans-serif",
            fontColor: '#000',
            fontStyle: '600',
          },
        },
      ],
      yAxes: [
        {
          display: false,
          id: 'A',
          position: 'left',
          gridLines: {
            display: false,
          },
          ticks: {
            callback: function (value) {
              return '$' + value + 'M';
            },
          },
        },
        {
          display: false,
          id: 'B',
          position: 'right',
          gridLines: {
            display: false,
          },
        },
      ],
    },
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
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

        this.data.datasets.forEach(function (dataset, i) {
          const meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            bar._yScale.margins.top = 10;
            let data = dataset.data[index];

            const offset = data >= 1 ? 15 : -5;
            if (i === 0) {
              data = '$' + data + 'M';
              ctx.fillStyle = '#AB7B6C';
            } else {
              ctx.fillStyle = '#DCB8AE';
            }
            if (offset === 15) {
              ctx.fillStyle = '#fff';
            }
            ctx.fillText(data, bar._model.x, bar._model.y + offset);
          });
        });
      },
    },
  };
  return (
    <Bar
      data={{
        labels: labels,
        datasets: [
          {
            label: 'price',
            data: prices,
            yAxisID: 'A',
            backgroundColor: '#AB7B6D',
            borderWidth: 0,
          },

          {
            label: 'count',
            data: counts,
            yAxisID: 'B',
            backgroundColor: '#DCB8AE',
            borderWidth: 0,
          },
        ],
      }}
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
                  },
                ],
              },
            }
      }
    />
  );
};

export default RegionChart;
