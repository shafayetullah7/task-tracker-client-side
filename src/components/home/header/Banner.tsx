import { motion } from 'framer-motion';
import DefaultScreen from "../../utils/DefaultScreen";
import GradientText from "../../utils/GradientText";
import { useParallax } from 'react-scroll-parallax';
import { FaChartBar } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { Carousel } from 'antd';


const Banner = () => {
    const { ref } = useParallax<HTMLDivElement>({ speed: 20 });


    const contentStyle: React.CSSProperties = {
        height: '100%',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    const taskContents = [
        {
            title: 'Task Management',
            text: 'Effortlessly manage tasks with our system, using a task calendar for deadlines and quick access to completed tasks.',
            icon: <FaFilePen />,
            action: <motion.button whileHover={{ x: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5, type: 'tween' }} className='text-xl px-10 py-3 bg-primary-gradient text-white rounded-xl font-bold'>See more</motion.button>
        },
        {
            title: 'Expense Tracking',
            text: 'Effortlessly categorize expenses, manage your budget for financial insights, and visualize expense trends for better financial awareness.',
            icon: <FaChartBar />,
            action: <motion.button whileHover={{ x: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5, type: 'tween' }} className='text-xl px-10 py-3 bg-primary-gradient text-white rounded-xl font-bold'>See more</motion.button>
        },
        {
            title: 'Collaboration',
            text: 'Effortlessly communicate in group chats, coordinate events with an integrated calendar, and manage tasks seamlessly.',
            icon: <MdGroups />,
            action: <motion.button whileHover={{ x: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5, type: 'tween' }} className='text-xl px-10 py-3 bg-primary-gradient text-white rounded-xl font-bold'>See more</motion.button>
        }
    ];
    return (
        <DefaultScreen>
            <div ref={ref} className='w-full overflow-hidden'>


                <Carousel autoplay autoplaySpeed={5000} className='w-full py-20'>
                    <div style={contentStyle} className="">
                        <motion.h1 initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", duration: 1, stiffness: 50, damping: 10 }} className="text-9xl font-bold w-fit text-center mx-auto"><GradientText>Welcome to CollaboraTrack</GradientText></motion.h1>
                        <div className="text-center w-3/4 mx-auto mt-14">
                            <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1.5 }} className="text-xl dark:text-gray-300 font-montserrat">Streamlined Collaboration, Efficient Task Management, and Smart Expense Tracking</motion.p>
                        </div>
                        <motion.button whileHover={{ x: [0, -10, 10, -10, 0] }} transition={{ duration: 0.5, type: 'tween' }} className='w-fit mx-auto block mt-20 text-xl px-10 py-3 bg-primary-gradient text-white rounded-xl font-bold'>Get started</motion.button>
                    </div>
                    {taskContents.map((content, index) => (<div key={index} className='text-gray-200 font-montserrat' style={contentStyle}>
                        <div className='w-fit mx-auto text-9xl'>{content.icon}</div>
                        <h1 className='text-6xl font-bold text-center mt-10'>{content.title}</h1>
                        <p className='text-center mt-5'>{content.text}</p>
                        <div className='w-fit mx-auto block mt-20'>{content.action}</div>
                    </div>))}
                </Carousel>
            </div>
        </DefaultScreen>
    );
};

export default Banner;