import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data, labels }) => {
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
            x: {
                type: 'linear',
                position: 'bottom',
            },
        },
    };

    return (
        <div>
            <h2>Line Chart</h2>
            <Line data={chartData} options={options} />
        </div>
    );
};

export default LineChart;