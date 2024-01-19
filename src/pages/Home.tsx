import Nav from "../components/common/Nav";
import Banner from "../components/home/header/Banner";
import Header from "../components/home/header/Header";

import GradientText from "../components/utils/GradientText";


const Home = () => {


    return (
        <div className="relative w-full">
            <header className="relative">
                <Header></Header>
            </header>

            <div className="w-64 h-20 m-20 gradient-background"></div>
            <p className="text-3xl"><GradientText>Hello World</GradientText></p>

        </div>
    );
};

export default Home;