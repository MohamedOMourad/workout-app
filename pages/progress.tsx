import { withPageAuth } from '@supabase/auth-helpers-nextjs';
import React from 'react'
import StockChart from '../components/StockChart';
const data = {
    stockFullName: "SW Limited.",
    stockShortName: "ASX:SFW",
    price: {
        current: 2.32,
        open: 2.23,
        low: 2.215,
        high: 2.325,
        cap: 93765011,
        ratio: 20.1,
        dividend: 1.67,
    },
    chartData: {
        labels: [
            "10:00",
            "",
            "",
            "",
            "12:00",
            "",
            "",
            "",
            "2:00",
            "",
            "",
            "",
            "4:00",
        ],
        data: [
            2.23,
            2.215,
            2.22,
            2.25,
            2.245,
            2.27,
            2.28,
            2.29,
            2.3,
            2.29,
            2.325,
            2.325,
            2.32,
        ],
    },
};
const Progress = () => {
    return (
        <div className="min-w-screen min-h-screen bg-zinc-100 px-5 py-5">
            <div className="flex flex-wrap py-10 min-w-screen min-h-screen">
                <StockChart info={data} />
                <StockChart info={data} />
                <StockChart info={data} />
                <StockChart info={data} />
            </div>
        </div>
    )
}

export default Progress;

export const getServerSideProps = withPageAuth({
    redirectTo: '/login',
  });