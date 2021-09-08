import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const TradeValueChart = ({ tradeVolumesSector }) => {
  const [labels, setLabels] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    tradeVolumesSector?.map(info => {
      setLabels(prevState => [...prevState, info.year]);
      setData1(prevState => [...prevState, info['value']]);
      setData2(prevState => [...prevState, info['volume']]);
    });
  }, [tradeVolumesSector]);

  return (
    <Bar
      data={{
        labels: labels,
        datasets: [
          {
            yAxisID: 'A',
            label: 'Value',
            data: data1,
            backgroundColor: '#FFEBCC',
            borderWidth: 0,
          },
          {
            yAxisID: 'B',
            label: 'Volume',
            type: 'line',
            borderDash: [2],
            data: data2,
            borderColor: '#fff',
            backgroundColor: 'transparent',
            borderWidth: 2,
          },
        ],
      }}
      options={{
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

                if (i === 0) {
                  data = '$' + data;
                  ctx.fillStyle = '#333';
                } else {
                  return;
                }
                ctx.fillText(data, bar._model.x, bar._model.y + 20);
              });
            });
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          align: 'end',
          labels: {
            defaultFontColor: '#fff',
            fontColor: '#fff',
          },
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
                fontColor: '#fff',
              },
            },
          ],
          yAxes: [
            {
              id: 'A',
              position: 'left',
              gridLines: {
                display: false,
              },
              ticks: {
                fontColor: '#639DB7',
                lineHeight: 3,
                z: 1,
                callback: function (value) {
                  return '$' + value + 'M';
                },
              },
            },
            {
              id: 'B',
              position: 'right',
              gridLines: {
                display: false,
              },
              ticks: {
                fontColor: '#639DB7',
                lineHeight: 3,
                z: 2,
              },
            },
          ],
        },
      }}
    />
  );
};

export default TradeValueChart;
