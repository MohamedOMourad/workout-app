import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

import React from 'react';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale);


const buildData = ({ chartData }:any) => ({
    labels: chartData.labels,
    datasets: [
        {
            label: '',
            data: chartData.data,
            backgroundColor: 'rgba(255, 255, 255, 1)',
            borderColor: 'rgba(255, 255, 255, 1)',
            pointBackgroundColor: 'rgba(255, 255, 255, 1)',
            fill: 'start',
            tension: 0,
        },
    ],
});

const options = {
    plugins: {
        legend: {
            display: false,
        }
    },
    scales: {
        yAxes: {
            ticks: {
                color: 'rgba(255, 255, 255, 1)'
            },
            grid: {
                display: false,
                drawBorder: false,
            },
        },

        xAxes: {
            ticks: {
                color: 'rgba(255, 255, 255, 1)'
            },
            grid: {
                circular: true,
                borderColor: 'rgba(255, 255, 255, .2)',
                color: 'rgba(255, 255, 255, .2)',
                borderDash: [5, 5]
            },
        },
    },
    layout: {
        padding: {
            right: 10,
        },
    },
};


const StockChart = ({ info }:any) => {
    const data = buildData(info);

    return (
        <>
            <div className="md:w-1/2  flex flex-col overflow-hidden">
                <div className="rounded-lg  px-5 pb-4 pt-8 mx-5 my-7 bg-indigo-600 text-white ">
                    <Line data={data} options={options} />
                </div>
            </div>
        </>
    );
};

export default StockChart;