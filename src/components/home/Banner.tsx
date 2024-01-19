import banner1 from '../../assets/banner1.jpg';
const Banner = () => {
    return (
        <div className='relative'>
            <img src={banner1} alt="banner image" />
            <div className='absolute inset-0 bg-black bg-opacity-40'></div>
        </div>
    );
};

export default Banner;