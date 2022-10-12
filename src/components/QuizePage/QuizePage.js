import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import './QuizePage.css';

const QuizePage = () => {
    return (
    <div>
        <div className='container mb-5 pb-5 mt-3'>
           <p className='bgAlert'>Alert : We will count your first click for wrong or correct answer! be careful </p> 
            <h1 className='mb-4 text-start mt-4'>Start Quize with React</h1>
            <div className='row d-flex'>
                <div className='col-md-8 col-lg-8'>
                    {/* each quize */}
                    <div className='quize-wrapper mt-3 mb-5'>
                        <div className='d-flex justify-content-between'>
                            <h4 style={{"width":"90%"}}>1. Hello iam quize ?</h4>
                            <EyeIcon className='text-dark me-3' style={{"width":"2.2rem","cursor":"pointer"}}></EyeIcon>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='each-option d-flex align-items-center'>
                                    <div><input  name="option" id="1" type="radio" /></div>
                                    <label for="1" className='lead ms-3'>Shahin Alam</label>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='each-option d-flex align-items-center'>
                                    <div><input  name="option" id="2" type="radio" /></div>
                                    <label for="2" className='lead ms-3'>Shahin Alam</label>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='each-option d-flex align-items-center'>
                                    <div><input  name="option" id="3" type="radio" /></div>
                                    <label for="3" className='lead ms-3'>Shahin Alam</label>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className='each-option d-flex align-items-center'>
                                    <div><input name="option" id="4" type="radio" /></div>
                                    <label for="4" className='lead ms-3'>Shahin Alam</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 col-lg-4 p-2 bg-light'>
                    <h3 className='py-2 bg-info text-center'>Your results </h3>
                    <p className='lead'>Wrong answer : </p>
                    <p className='lead'>Correct answer : </p>
                </div>
            </div>
        </div>
    </div>

    );
};

export default QuizePage;