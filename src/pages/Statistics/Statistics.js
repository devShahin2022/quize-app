import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BharChart from '../../components/BarChart/BharChart';

const Statistics = () => {
    const data = useLoaderData();
    return (
        <div>
            <h1 className='text-center container mb-5 mt-5'>Iam statistics page</h1>
            <BharChart data={data}></BharChart>
        </div>
    );
};

export default Statistics;