import { useParallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion'

type Tprops = {
    id: number
    title: string,
    description: string,
    icon: JSX.Element
}
const BenefitCard = ({ id, title, description, icon }: Tprops) => {

    const { ref } = useParallax<HTMLDivElement>({ speed: id % 2 === 0 ? 10 : 20 });

    return (
        <motion.div initial={{ opacity: 0, scale: 1 }} whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 1, scale: { duration: 0.1 }, delay: 0.3 }} ref={ref} className='w-[300px] h-[400px] p-10 gray-gradient-background duration-300 rounded-xl overflow-hidden'>
            <div className='text-7xl bg-primary-gradient size-[100px] flex justify-center items-center rounded-full mx-auto'>
                <div className='bg-gray-100 size-[90px] rounded-full flex justify-center items-center text-gray-900'>{icon}</div>
            </div>
            <h3 className='text-xl font-semibold text-center mt-16'>{title}</h3>
            <p className='text-xs text-center text-gray-600 mt-5 font-montserrat'>{description}</p>
        </motion.div>
    );
};

export default BenefitCard;