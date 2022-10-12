import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import QuizeCard from '../../components/QuizeCard/QuizeCard';
import './HomePage.css';

const HomPage = () => {
    const data = useLoaderData();
    console.log(data.data);
    let items = data.data;
    return (
        <div>
            <Banner></Banner>
            <div className='container mb-5 pb-5'>
            <h1 id='scroll-quize' className='my-4 mb-5 text-center'>Select quize</h1>
            <div className='row'>
                {
                    items.map(item => <QuizeCard data={item}></QuizeCard> )
                }
            </div>
           </div>
        </div>
    );
};

export default HomPage;