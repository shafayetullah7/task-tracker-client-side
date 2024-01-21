import task1 from '../../../assets/image/task1.jpeg'
import task2 from '../../../assets/image/task2.jpeg'
import task3 from '../../../assets/image/task3.jpeg'
import task4 from '../../../assets/image/task4.jpeg'
import GradientText from '../../utils/GradientText';
import { motion } from 'framer-motion';

const TaskManagement = () => {

    

    const taskOptions = [
        {
            title: 'Create Task',
            text: 'Effortlessly initiate new tasks with a streamlined process, ensuring a quick transition from idea to action.',
            image: task1
        },
        {
            title: 'Assign Task',
            text: 'Promote collaboration and accountability by effortlessly delegating responsibilities, ensuring clarity within the team.',
            image: task2
        },
        {
            title: 'Schedule Task',
            text: 'Take control of project timelines by efficiently allocating resources, setting deadlines, and creating an organized project timeline.',
            image: task3
        },
        {
            title: 'Track Task Progress',
            text: 'Monitor project development with real-time updates, identify bottlenecks, and celebrate milestones achieved by your team. Stay informed and aligned with project goals.',
            image: task4
        },

    ]

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
                <motion.div initial={{opacity:0, y:40}} whileInView={{opacity:1,y:0}} transition={{duration:1, delay:0.5}} className='flex-1'>
                    <h1 className='font-rubik text-5xl font-bold text-gray-900'>Enhancing Team Productivity With <GradientText>Better Task Management</GradientText></h1>
                    <p className='text-sm text-justify mt-10 text-gray-600'>Efficient task management is the cornerstone of a successful team, and our platform offers a robust set of features to streamline and optimize this crucial aspect of your workflow. With a focus on collaboration, transparency, and productivity, our task management tools empower teams to stay organized, meet deadlines, and achieve their goals seamlessly.</p>
                </motion.div>
                <motion.div variants={containerVariants} initial='hidden' whileInView='show' className="flex justify-center items-center flex-wrap gap-10 flex-1 ">
                    {taskOptions.map((option, index) => (<motion.div key={index} variants={childVariants} whileHover={{ scale: 1.1 }} className='relative w-[180px] h-[180px] rounded-lg overflow-hidden shadow-lg shadow-gray-400 hover:scale-105 duration-200'>
                        <img src={option.image} className='' alt={`Task option image${index}`} />
                        <div className='absolute inset-0 p-5 bg-gray-950 bg-opacity-10 hover:bg-opacity-70 text-gray-900 hover:text-gray-100 duration-200'>
                            <h3 className='text-xl font-bold'>{option.title}</h3>
                            <div className='absolute inset-0 opacity-0 hover:opacity-100 bg-transparent'>
                                <p className='absolute bottom-0 text-xs text-justify p-2'>{option.text}</p>
                            </div>
                        </div>
                    </motion.div>))}
                </motion.div>
            </div>
        </div >
    );
};

export default TaskManagement;