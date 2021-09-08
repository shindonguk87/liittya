import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const AverageAnnualSalesChart = ({ averageAnnualSales }) => {
  const [labels, setLabels] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [medium, setMedium] = useState([]);

  useEffect(() => {
    (document as any).fonts.ready.then(function () {
      averageAnnualSales?.map(info => {
        setLabels(prevState => [...prevState, info.title]);
        setData1(prevState => [...prevState, info['2018']]);
        setData2(prevState => [...prevState, info['2019']]);
        setMedium(prevState => [...prevState, info['medium']]);
      });
    });
  }, [averageAnnualSales]);

  return (
    <Bar
      data={{
        labels: labels,
        datasets: [
          {
            type: 'line',
            label: 'Medium',
            data: medium,
            borderDash: [2],
            borderColor: '#fff',
            backgroundColor: 'transparent',
            borderWidth: 2,
            order: 2,
          },
          {
            label: '2018',
            data: data1,
            backgroundColor: '#FFEBCC',
            borderWidth: 0,
          },
          {
            label: '2019',
            data: data2,
            backgroundColor: '#C79B8F',
            borderWidth: 0,
          },
        ],
      }}
      options={{
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
                fontFamily: "'EB Garamond', sans-serif",
                fontSize: 14,
              },
            },
          ],
          yAxes: [
            {
              position: 'left',
              ticks: {
                fontColor: '#639DB7',
                lineHeight: 3,
                callback: function (value) {
                  return '$' + value + 'M';
                },
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
                  return;
                }
                if (i === 1) {
                  data = '$' + data + 'M';
                  ctx.fillStyle = '#AB7B6C';
                } else {
                  ctx.fillStyle = '#DCB8AE';
                }

                ctx.fillText(data, bar._model.x, bar._model.y - 5);
              });
            });
          },
        },
      }}
    />
  );
};

export default AverageAnnualSalesChart;
