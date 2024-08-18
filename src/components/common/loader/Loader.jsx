import React from 'react'
import Lottie from "react-lottie";
import animationData from './../../../assets/verify.json';


const defaultOptions = {
    loop: true,
    autoplay : true,
    animationData : animationData,
    rendererSettings: {
        preserveAspectRatio : 'xMidYMid slice'
    }
  };


const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full pt-48 gap-8 overflow-x-hidden overflow-y-hidden">
        <Lottie options={defaultOptions}
            height={"50%"}
            width={"20%"}
            isStopped={false}
            isPaused={false} 
            className='lottie'/>
        <h5 className='text-center text-[var(--blue)] text-[1rem]'>Please wait... :)</h5>
    </div>
  )
}

export default Loader