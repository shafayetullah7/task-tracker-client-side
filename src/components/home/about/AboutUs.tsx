import aboutus from '../../../assets/image/aboutus.jpeg';

const AboutUs = () => {
    return (
        <div className='flex justify-around items-center gap-10 px-10'>
            <div className='w-full'>
                <h1 className='text-gray-900 text-5xl font-bold'>About Us</h1>
                <p className='mt-16 text-gray-600 font-montserrat text-justify'>Welcome to CollaboraTrack, where we believe in the power of seamless collaboration, efficient task management, and smart expense tracking to transform the way teams work.</p>
                <p className='mt-5 text-gray-600 font-montserrat text-justify'>At CollaboraTrack, our vision is to empower teams and individuals to achieve their goals through a unified platform that simplifies collaboration, task management, and financial tracking. We envision a world where productivity is enhanced, communication is streamlined, and projects thrive.</p>
                <p className='mt-5 text-gray-600 font-montserrat text-justify'>Our mission is to create a versatile and user-centric platform that fosters a culture of collaboration and productivity. We are committed to providing innovative tools that make teamwork effortless, enhance task management, and bring clarity to financial processes. CollaboraTrack is designed to be a catalyst for success, helping teams reach new heights in their endeavors.</p>
            </div>
            <div className='w-full p-10'>
                <img className='w-full h-full object-cover object-center rounded-full' src={aboutus} alt="about us" />
            </div>
        </div>
    );
};

export default AboutUs;