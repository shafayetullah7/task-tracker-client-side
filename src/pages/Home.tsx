import Nav from "../components/common/Nav";
import Banner from "../components/home/Banner";
import GradientText from "../components/utils/GradientText";


const Home = () => {


    return (
        <div className="relative w-full">
            <header className="">
                <div className="sticky top-0 left-0 right-0 z-10">
                    <Nav></Nav>
                </div>
                {/* <Nav></Nav> */}
                <div >
                    <Banner></Banner>
                </div>

            </header>

            <div className="w-64 h-20 m-20 bg-primary-gradient"></div>
            <p className="text-3xl"><GradientText>Hello World</GradientText></p>

        </div>
    );
};

export default Home;