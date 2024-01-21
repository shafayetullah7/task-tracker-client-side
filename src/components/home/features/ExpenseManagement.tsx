import expense1 from '../../../assets/image/expense1.jpeg'
import expense2 from '../../../assets/image/expense2.jpeg'
import expense3 from '../../../assets/image/expense3.jpeg'
import expense4 from '../../../assets/image/expense4.jpeg'
import GradientText from '../../utils/GradientText';
import { motion } from 'framer-motion';

const ExpenseManagement = () => {

    const expenseOptions = [
        {
            title: 'Budget Making',
            text: 'Ideal for small budget teams managing regular tasks, our Budget Making module offers customizable templates and real-time updates for proactive resource allocation.',
            image: expense1
        },
        {
            title: 'Expense Tracking',
            text: 'Tailored for small budget teams, our user-friendly Expense Tracking simplifies real-time recording and categorization, seamlessly integrating with receipts for compliance.',
            image: expense2
        },
        {
            title: 'Expense Distribution',
            text: 'Streamlining approvals and allocation, our Expense Distribution module caters to small teams, enforcing spending policies and transparently distributing expenses.',
            image: expense3
        },
        {
            title: 'Expense Analytics',
            text: 'Designed for small budget teams, our Expense Analytics provides personalized reports and tools for strategic financial management, allowing for informed decisions and cost optimization.',
            image: expense4
        },
    ];

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.4,
                delayChildren: 0.5,
            }
        },
    };

    const childVariants = {
        hidden: { scale: 0 },
        show: {
            scale: 1,
            transition: {
                type: 'spring',
                damping: 7
            }
        },
    };

    return (
        <div>
            <div className="flex justify-around items-center flex-wrap bg-white rounded-xl p-10 font-montserrat">
                <motion.div variants={containerVariants} initial='hidden' whileInView='show' className="flex justify-center items-center flex-wrap gap-10 flex-1 ">
                    {expenseOptions.map((option, index) => (<motion.div key={index} variants={childVariants} whileHover={{ scale: 1.1 }} className='relative w-[180px] h-[180px] rounded-lg overflow-hidden shadow-lg shadow-gray-400 hover:scale-105 duration-200'>
                        <img src={option.image} className='' alt={`Task option image${index}`} />
                        <div className='absolute inset-0 p-5 bg-gray-950 bg-opacity-10 hover:bg-opacity-70 text-gray-900 hover:text-gray-100 duration-200'>
                            <h3 className='text-xl font-bold'>{option.title}</h3>
                            <div className='absolute inset-0 opacity-0 hover:opacity-100 bg-transparent'>
                                <p className='absolute bottom-0 text-xs text-justify p-2'>{option.text}</p>
                            </div>
                        </div>
                    </motion.div>))}
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }} className='flex-1'>
                    <h1 className='font-rubik text-5xl font-bold text-gray-900'>A Holistic Approach to <GradientText>Expense Control</GradientText></h1>
                    <p className='text-sm text-justify mt-10 text-gray-600'>Our Expense Management Suite combines powerful tools to provide a comprehensive solution for organizations seeking to optimize their financial processes. From meticulous expense tracking to strategic budget creation, efficient expense distribution, and insightful expense analytics, our platform ensures a seamless and controlled financial ecosystem.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default ExpenseManagement;