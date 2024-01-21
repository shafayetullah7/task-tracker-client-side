import { BiLink, BiTask, BiMoney, BiMessage, BiTime, BiAlarm, BiBarChart, BiMobile, BiSmile } from 'react-icons/bi'
import BenefitCard from './BenefitCard';
const Benefits = () => {
    const benefits = [
        {
            "id": 1,
            "title": "Streamlined Collaboration",
            "description": "CollaboraTrack brings your team together in one cohesive platform. Streamline collaboration with integrated communication tools, making it easy to share ideas, assign tasks, and foster a collaborative work environment.",
            "icon": <BiLink />
        },
        {
            "id": 2,
            "title": "Effortless Task Management",
            "description": "Experience efficient task management with CollaboraTrack's intuitive interface. Organize tasks, set priorities, and monitor progress seamlessly. Say goodbye to task-related chaos and hello to a structured and productive workflow.",
            "icon": <BiTask />
        },
        {
            "id": 3,
            "title": "Smart Expense Tracking",
            "description": "Take control of your finances with smart expense tracking. Categorize expenses, set budgets, and gain insights into your spending habits. CollaboraTrack ensures financial management is straightforward and transparent.",
            "icon": <BiMoney />
        },
        {
            "id": 4,
            "title": "Real-Time Communication",
            "description": "Stay connected with your team through real-time communication features. Collaborate instantly with integrated group chat and discussions. Enhance decision-making and keep everyone in the loop with swift and efficient communication.",
            "icon": <BiMessage />
        },
        {
            "id": 5,
            "title": "Time and Effort Savings",
            "description": "Save valuable time and effort by consolidating your project management, communication, and financial tracking in one platform. CollaboraTrack eliminates the need for juggling multiple tools, allowing you to focus on what matters most.",
            "icon": <BiTime />
        },
        {
            "id": 6,
            "title": "Automated Task Reminders",
            "description": "Never miss a deadline again with CollaboraTrack's automated task reminders. Receive timely notifications and updates, ensuring that tasks stay on track and are completed efficiently.",
            "icon": <BiAlarm />
        },
        {
            "id": 7,
            "title": "Insightful Analytics",
            "description": "Gain valuable insights into your team's performance with real-time analytics and reporting. Make informed decisions based on accurate data, allowing you to optimize workflows and enhance overall productivity.",
            "icon": <BiBarChart />
        },
        {
            "id": 8,
            "title": "Flexibility and Accessibility",
            "description": "Access CollaboraTrack anytime, anywhere. Whether you're at your desk or on the go, our platform is accessible from desktops, tablets, and mobile devices. Enjoy the flexibility to manage tasks and collaborate wherever you are.",
            "icon": <BiMobile />
        },
        {
            "id": 9,
            "title": "User-Friendly Interface",
            "description": "CollaboraTrack is designed with user experience in mind. Enjoy a user-friendly interface that makes navigation intuitive and tasks easy to accomplish. Empower your team with a platform that is both powerful and user-centric.",
            "icon": <BiSmile />
        }
    ]

    return (
        <div className="bg-parallax-bg1 bg-cover bg-center py-40">
            <h1 className='text-center text-5xl font-bold text-gray-950'>Benefits and Value Proposition</h1>
            <p className='text-sm max-w-[600px] mx-auto text-center mt-3 text-gray-700 font-montserrat'>Step into a world of seamless collaboration and effortless organization. CollaboraTrack is here to enhance your team's experience. . Here's to a more efficient and enjoyable journey with CollaboraTrack!</p>
            <div className='grid grid-cols-3 place-items-center gap-x-20 gap-y-32 mt-32'>
                {
                    benefits.map(benefit => <div key={benefit.id}><BenefitCard id={benefit.id} title={benefit.title} description={benefit.description} icon={benefit.icon}></BenefitCard></div>)
                }
            </div>
        </div>
    );
};

export default Benefits;