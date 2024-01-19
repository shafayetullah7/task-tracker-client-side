
import { motion } from 'framer-motion';
// import DefaultScreen from '../../utils/DefaultScreen';
// import GradientText from '../../utils/GradientText';

// import Nav from "../../common/Nav";
import DefaultScreen from "../../utils/DefaultScreen";
import GradientText from "../../utils/GradientText";

// import banner1 from '../../assets/image/banner1.jpg';
const Banner = () => {

    // const 

    return (
        <DefaultScreen>
            <div className="">
                <motion.h1 initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", duration: 1, stiffness: 50, damping: 10 }} className="text-9xl font-bold w-fit text-center mx-auto"><GradientText>Welcome to CollaboraTrack</GradientText></motion.h1>
                <div className="text-center w-3/4 mx-auto mt-14">
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5 }} className="text-xl dark:text-gray-300 font-montserrat">Streamlined Collaboration, Efficient Task Management, and Smart Expense Tracking</motion.p>

                </div>
            </div>
        </DefaultScreen>
    );
};

export default Banner;