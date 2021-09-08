import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: ['Oil on canvas', 'Watercolor', 'Others'],
  datasets: [
    {
      labels: ['Oil on canvas', 'Watercolor', 'Others'],
      data: [75, 9, 16],
      backgroundColor: ['#0C435B', '#D9AF89', '#B3796B'],
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
  events: false,
  animation: {
    duration: 500,
    easing: 'easeOutQuart',
    onComplete: function () {
      const ctx = this.chart.ctx;
      ctx.font = (window as any).helpers.fontString(
        (window as any).defaults.global.defaultFontFamily,
        'normal',
        (window as any).defaults.global.defaultFontFamily
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
          const percent = String(Math.round((dataset.data[i] / total) * 100)) + '%';
          // ctx.fillText(percent, model.x + x, model.y + y + 15);
          ctx.fillText(percent, model.x + x, model.y + y);
          ctx.fillText(dataset.labels[i], model.x + x, model.y + y + 15);
          // ctx.fillText(dataset.data[i], model.x + x, model.y + y + 30);
          // Display percent in another line, line break doesn't work for fillText
        }
      });
    },
  },
};
const DistributionTurnoverChart = () => <Doughnut data={data} options={options} />;

export default DistributionTurnoverChart;
