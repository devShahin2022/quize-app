import React from 'react';
import './QuizeCard.css';
// import { ArrowSmallRight } from '@heroicons/react/24/solid'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const QuizeCard = ({data}) => {
    return (    
        
        <div className='col-6 col-xl-3 col-lg-3 col-md-4 mt-3'>
            <div className='border'>
                <img style={{"width":"100%","background-color": "#25525b"}} src={data.logo} alt="" />
                <div className='d-flex w-100 my-2 justify-content-between p-2'>
                    <div className='card-title'><h5>{data.name}</h5></div>
                    <Link to={`/topics/${data.id}`} ><div className='cardIcon rounded-circle bg-info'><ArrowRightIcon className="text-white icon-width"/></div></Link>
                </div>
            </div>
        </div>
    );
};

export default QuizeCard;