import React from 'react';
import './QuizeCard.css';
// import { ArrowSmallRight } from '@heroicons/react/24/solid'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const QuizeCard = () => {
    return (
        <div className='container mb-5 pb-5'>
            <h1 id='scroll-quize' className='my-4 mb-5 text-center'>Select quize</h1>
            <div className='row'>
                <div className='col-6 col-xl-3 col-lg-3 col-md-4 mt-3'>
                    <div className='border'>
                        <img style={{"width":"100%"}} src={require('../../assets/img/banner.png')} alt="" />
                        <div className='d-flex w-100 my-2 justify-content-between p-2'>
                            <div className='card-title'><h5>React</h5></div>
                            <div className='cardIcon rounded-circle bg-info'><ArrowRightIcon className="text-white icon-width"/></div>
                        </div>
                    </div>
                </div>
                <div className='col-6 col-xl-3 col-lg-3 col-md-4 mt-3'>
                    <div className='border'>
                        <img style={{"width":"100%"}} src={require('../../assets/img/banner.png')} alt="" />
                        <div className='d-flex w-100 my-2 justify-content-between p-2'>
                            <div className='card-title'><h5>React</h5></div>
                            <div className='cardIcon rounded-circle bg-info'><ArrowRightIcon className="text-white icon-width"/></div>
                        </div>
                    </div>
                </div>
                <div className='col-6 col-xl-3 col-lg-3 col-md-4 mt-3'>
                    <div className='border'>
                        <img style={{"width":"100%"}} src={require('../../assets/img/banner.png')} alt="" />
                        <div className='d-flex w-100 my-2 justify-content-between p-2'>
                            <div className='card-title'><h5>React</h5></div>
                            <div className='cardIcon rounded-circle bg-info'><ArrowRightIcon className="text-white icon-width"/></div>
                        </div>
                    </div>
                </div>
                <div className='col-6 col-xl-3 col-lg-3 col-md-4 mt-3'>
                    <div className='border'>
                        <img style={{"width":"100%"}} src={require('../../assets/img/banner.png')} alt="" />
                        <div className='d-flex w-100 my-2 justify-content-between p-2'>
                            <div className='card-title'><h5>React</h5></div>
                            <div className='cardIcon rounded-circle bg-info'><ArrowRightIcon className="text-white icon-width"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizeCard;