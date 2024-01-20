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
                <div className="mt-80 ">
                    <DefaultScreen>
                        <Features></Features>
                    </DefaultScreen>
                </div>
            </main>
        </div>
    );
};

export default Home;