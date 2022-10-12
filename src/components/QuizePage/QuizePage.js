import { EyeIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { json, useLoaderData } from 'react-router-dom';
import './QuizePage.css';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const QuizePage = () => {
    const data = useLoaderData();
    // console.log(data.data.id);
    return (
    <div>
        <div className='container mb-5 pb-5 mt-3'>
           <p className='bgAlert'>Alert : We will count your first click for wrong or correct answer! be careful </p> 
            <h1 className='mb-4 text-start mt-4'>Start Quize with <span className='text-danger'>{data.data.name}</span></h1>
            <div className='row d-flex'>
                <div className='col-md-8 col-lg-8'>
                    {/* each quize */}
                    {
                        data.data.questions.map((item, idx) => <EachQuize idx={idx} data={item}></EachQuize>)
                    }
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


// show each quize
const EachQuize = ({data, idx}) => {
    // console.log(data.correctAnswer);
    // const correctAns = data.correctAnswer;
    let s = data.question;
    let htmlObject = document.createElement('div');
    htmlObject.innerHTML = s;
    let options = data.options;
    const callBackselectOpt = (id) => {
        // catch current quize index
        // console.log("index mcq : ",idx);
        // console.log("selected mcq : ",id);
        if(options[id] === data.correctAnswer){
            // console.log("correct answer : ",options[id], data.correctAnswer);
            toastMsg("success");
        }else{
            console.log("wrong answer : ", options[id], data.correctAnswer);
            toastMsg("error");
        }

    }

// success toast message
const toastMsg = (sts)=> {
    let txt = '';
    if(sts === "error"){
        txt = "Oops! your answer wrong"
    }else{
        txt = "Wow! your answer correct"
    }
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: sts,
        title: txt
      });
}
// show correct answer in modal box
const showAnswer = () => {
    Swal.fire(data.correctAnswer);
}

    return (
        <div className='quize-wrapper mt-3 mb-5'>
        <div className='d-flex justify-content-between'>
            <h4 style={{"width":"90%"}}>{idx + 1}. { htmlObject.outerText }</h4>
            <EyeIcon onClick={()=> showAnswer()} className='text-dark me-3' style={{"width":"2.2rem","cursor":"pointer"}}></EyeIcon>
        </div>
        <div className='row'>
            {
                // console.log(options);
                options.map((item , idx) => <Data callBackselectOpt = {callBackselectOpt} index={idx} key={idx} data={item}></Data>)
            }
        </div>
    </div>
    );
}

const Data = ({data,index,callBackselectOpt}) => {
    // console.log(index);
    return(
        <div className='col-6 mt-1'>
            <div className='each-option d-flex align-items-center'>
                <div><input onClick={()=> callBackselectOpt(index)}  name="option" id="" type="radio" /></div>
                <label for="" className='lead ms-3'>{data}</label>
            </div>
        </div>
    );
}

export default QuizePage;