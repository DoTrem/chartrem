import React, { useEffect, useRef } from 'react';
import { Box, Paper } from '@mui/material';
import { Chart as ChartJS, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(...registerables);

function ChartDisplay({ data, chartType, chartTitle, xAxisLabel, yAxisLabel, chartColor }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current && data.length > 0) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      
      const chartData = {
        labels: data.map(item => item.x),
        datasets: [{
          label: yAxisLabel,
          data: data.map(item => item.y),
          backgroundColor: chartColor,
          borderColor: chartColor,
          borderWidth: 1
        }]
      };

      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: chartTitle
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: xAxisLabel
            },
            type: xAxisLabel === 'Ημερομηνία' ? 'time' : 'category',
            time: {
              unit: 'day'
            }
          },
          y: {
            title: {
              display: true,
              text: yAxisLabel
            },
            beginAtZero: true
          }
        }
      };

      chartInstance.current = new ChartJS(ctx, {
        type: chartType,
        data: chartData,
        options: options
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, chartType, chartTitle, xAxisLabel, yAxisLabel, chartColor]);

  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Box sx={{ height: 400 }}>
        <canvas ref={chartRef} />
      </Box>
    </Paper>
  );
}

export default ChartDisplay; 