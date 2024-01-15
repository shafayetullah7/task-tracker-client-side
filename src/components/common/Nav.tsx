
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuOutlined } from '@ant-design/icons';

type TnavItem = {
    label: string,
}



const Nav = () => {

    const [collapse, setCollapse] = useState(true);
    const toggleCollapse = () => {
        setCollapse(!collapse);
    };
    const navItems: TnavItem[] = [
        { label: 'Home' },
        { label: 'Features' },
        { label: 'Benefits' },
        { label: 'About us' },
        { label: 'Contact' },
    ]

    const handleCollapsedMenuItemClick = (navItem: TnavItem) => {
        console.log(navItem.label);
        setCollapse(true);
    }

    return (
        <div className='flex justify-between items-center py-5 px-5 relative'>
            <div className='flex w-fit justify-center items-center gap-5'>
                <motion.button className='text-xl md:hidden' initial={{ scale: 1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.1, damping: 8, stiffness: 250, type: 'spring' }} onClick={toggleCollapse}><MenuOutlined className='mb-2' /></motion.button>
                <h1 className='text-2xl font-bold text-primaryDeep'>CollaboraTrack</h1>
            </div>
            <div className='flex items-center gap-14'>
                <ul className='hidden md:flex justify-end gap-10 text-[1rem] text-gray-500 font-[500]'>
                    {navItems.map((item, index) => <motion.li className='hover:text-primaryDeep cursor-pointer hover:font-semibold' initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.1, damping: 8, stiffness: 250, type: 'spring' }} key={index}>{item.label}</motion.li>)}
                </ul>
                <motion.button className='text-[1rem] px-5 py-1 border-2 border-primaryDeep rounded-lg font-[500] text-primaryDeep hover:text-white hover:bg-primaryDeep' initial={{ scale: 1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.1, damping: 8, stiffness: 250, type: 'spring' }}>Login</motion.button>
            </div>

            <AnimatePresence>
                {!collapse && <motion.div initial={{ scale: 0 }} animate={{ scale: 1, originY: 0, originX: 0 }} exit={{ scale: 0 }} transition={{ duration: 0.1, damping: 12, stiffness: 100, type: 'spring' }} className='md:hidden absolute left-0 top-14 rounded-lg bg-gray-50 px-2 py-5 w-[150px]'>
                    <ul className='flex flex-col justify-end gap-3 text-[1rem] text-gray-500 font-[500]'>
                        {navItems.map((item, index) => <motion.li className='hover:text-primaryDeep cursor-pointer hover:font-semibold pl-3 border-b hover:border-primaryDeep mt-3' initial={{ scale: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.1, damping: 12, stiffness: 150, type: 'spring' }} key={index} onClick={() => handleCollapsedMenuItemClick(item)}>{item.label}</motion.li>)}
                    </ul>
                </motion.div>}
            </AnimatePresence>





        </div>
    );
};

export default Nav;