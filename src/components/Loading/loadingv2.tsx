import React from "react";
import Lottie from 'lottie-react';
import animationJson from '../../assets/lottie.json.json';

const LoadingV2: React.FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Lottie 
                animationData={animationJson} 
                className={"w-36"}
                loop/>
        </div>
    )
}

export  default LoadingV2;