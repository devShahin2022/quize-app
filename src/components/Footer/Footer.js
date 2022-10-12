import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='py-5 bg-info'>
            <footer className='container'>
                <h1 id='scroll-quize-bottom' className='my-4 mb-5 text-center'>Select quize</h1>
                <p className='text-center'>copyrights 2022 <span className='text-danger'>@shahin</span> </p>
            </footer>
        </div>
    );
};

export default Footer;