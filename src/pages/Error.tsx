import Lottie from "lottie-react";
import ErrorAnimation from '../assets/error-animation.json';

import { AiOutlineHome } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
const Error = () => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-center items-center h-screen w-full">
            <div>
                <Lottie animationData={ErrorAnimation} className="w-full px-10 md:w-[500px]" loop={true} />
                <div className="flex items-center justify-center text-lg gap-3 font-semibold text-primaryOrange w-fit mx-auto border-2 border-primaryOrange px-14 py-3 rounded-full hover:text-white hover:bg-primaryOrange duration-300 cursor-pointer" onClick={() => navigate('/')}>
                    <AiOutlineHome className="text-2xl" />
                    <p>Home</p>
                </div>
            </div>
        </div>
    );
};

export default Error;