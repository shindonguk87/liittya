import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

const SecondaryMarketShareChart = ({ values, title }) => {
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    values?.map(value => {
      setLabels(prev => [...prev, value.title]);
      setData(prev => [...prev, value.value]);
    });
  }, [values]);

  return (
    <>
      <h3 className={'font-garamond'}>{title}</h3>
      <Doughnut
        data={{
          labels: labels,
          datasets: [
            {
              labels: labels,
              data: data,
              backgroundColor: ['#FFFFFF', '#FFEBCC', '#6C4C43', '#9F6656', '#AB7B6E'],
              borderWidth: 0,
            },
          ],
        }}
        options={{
          legend: {
            display: false,
          },
          responsive: true,
          maintainAspectRatio: false,
          events: false,
          animation: {
            duration: 500,
            easing: 'easeOutQuart',
            onComplete: function () {
              const ctx = this.chart.ctx;
              ctx.font = (window as any).Chart.helpers.fontString(
                (window as any).Chart.defaults.global.defaultFontFamily,
                'normal',
                (window as any).Chart.defaults.global.defaultFontFamily
              );
              ctx.textAlign = 'center';
              ctx.textBaseline = 'bottom';

              this.data.datasets.forEach(function (dataset) {
                for (let i = 0; i < dataset.data.length; i++) {
                  const model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                    total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                    midRadius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
                    startAngle = model.startAngle,
                    endAngle = model.endAngle,
                    midAngle = startAngle + (endAngle - startAngle) / 2;

                  const x = midRadius * Math.cos(midAngle);
                  const y = midRadius * Math.sin(midAngle);

                  ctx.fillStyle = '#fff';
                  if (i === 0) {
                    // Darker text color for lighter background
                    ctx.fillStyle = '#000';
                  }
                  const percent = String(Math.round((dataset.data[i] / total) * 100)) + '%';
                  // ctx.fillText(percent, model.x + x, model.y + y + 15);
                  // ctx.fillText(dataset.data[i], model.x + x, model.y + y);
                  ctx.fillText(dataset.labels[i], model.x + x, model.y + y + 15);
                  ctx.fillText(percent, model.x + x, model.y + y);
                  // Display percent in another line, line break doesn't work for fillText
                }
              });
            },
          },
        }}
      />
    </>
  );
};

export default SecondaryMarketShareChart;
