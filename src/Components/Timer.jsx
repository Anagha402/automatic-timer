import React from 'react'
import  {useEffect, useState } from 'react';
function Timer() {

   //state creation
   const[sec,setSec]=useState(0)
   const[min,setMin]=useState(0)
 var timer;
  useEffect(()=>{
   timer=setInterval(()=>{
 setSec(sec+1);
 
 if(sec===59){
   setMin(min+1);
   setSec(0);
 }
 },500);
 
 return()=>clearInterval(timer);
  })
 
 function stop(){
   clearInterval(timer);
 };
 function reset(){
   setSec(0);
   setMin(0);
 }

 function resume(){
  setSec(sec+1);
 
 if(sec===59){
   setMin(min+1);
   setSec(0);
 }

 }
  return (
    <>
    
      <div className='container w-50 d-flex flex-column justify-content-center align-items-center border shadow rounded my-5 p-3 text-center'>
        <h1 className='mb-5' >Automatic Counter App</h1>
        <p className='fw-bolder text-info' style={{fontSize:"40px"}}>{min<10?"0"+min:min+1} : {sec<10?"0"+sec:sec+1}</p>
                 <div>
            <button onClick={reset} className='btn btn-warning px-5 mt-3 fw-bold mx-5 text-white'>Reset</button>
            <button onClick={stop} className='btn btn-danger px-5 mt-3 fw-bold text-white'>Stop</button>
            <button onClick={resume} className='btn btn-success px-5 mt-3 mx-5 fw-bold text-white'>Resume</button>
  
                </div>    
    </div>
  

      
    </>
  )
}

export default Timer
