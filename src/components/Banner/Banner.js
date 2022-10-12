import React from 'react';
import './Banner.css';
import Button from 'react-bootstrap/Button';

const Banner = () => {
    return (
        <div className='w-100 h-auto bg-info py-3'>
            <div className='container'>
                <div className='res-flex d-flex pb-5'>
                    <div className='col-b w-50 py-5'>
                        <h1 className='display-2'>Hello Learner</h1>
                        <p className='lead'>Don't be hesitate .Here you will justify your self that will be make you confident.Don't late click bottom and go to your kingdom</p>
                        <Button
                        onClick={e => {
                            let hero = document.getElementById("scroll-quize");
                            e.preventDefault();  // Stop Page Reloading
                            hero && hero.scrollIntoView();
                            }}
                        className='py-2 px-4 mt-3' variant="primary">Let's get started</Button>
                    </div>
                    <div className='col-b w-50 pb-5'>
                        <img id='logo' src={require('../../assets/img/banner.png')} alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
