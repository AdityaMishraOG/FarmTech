import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = ({ data, labels }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        // Cleanup function to destroy the chart when the component unmounts
        return () => {
            const chartInstance = chartRef.current;
            chartInstance && chartInstance.destroy();
        };
    }, []);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Array 1',
                data: data,
                fill: false,
                borderColor: 'rgba(75,192,192,1)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        scales: {
            x: [
                {
                    type: 'linear',
                    position: 'bottom',
                },
            ],
        },
    };

    return (
        <div>
            <h2>Line Chart</h2>
            <Line ref={chartRef} data={chartData} options={options} />
        </div>
    );
};
export default LineChart;
