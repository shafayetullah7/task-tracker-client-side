import AboutUs from "../components/home/about/AboutUs";
import Benefits from "../components/home/benefits/Benefits";
import Features from "../components/home/features/Features";
import Header from "../components/home/header/Header";
import DefaultScreen from "../components/utils/DefaultScreen";


const Home = () => {


    return (
        <div className="relative w-full">
            <header className="relative">
                <Header></Header>
            </header>
            <main>
                <div className="mt-60 ">
                    <DefaultScreen>
                        <Features></Features>
                    </DefaultScreen>
                </div>
                <div className="mt-60 ">
                    <DefaultScreen>
                        <Benefits></Benefits>
                    </DefaultScreen>
                </div>
                <div className="mt-60 ">
                    <DefaultScreen>
                        <AboutUs />
                    </DefaultScreen>
                </div>
            </main>
        </div>
    );
};

export default Home;