import Nav from "../../common/Nav";
import Banner from "./Banner";

const Header = () => {


    return (
        <div className="relative bg-hero-banner bg-cover bg-center bg-opacity-20 h-screen">

            <div className="absolute inset-0 dark:bg-black bg-white bg-opacity-50 dark:bg-opacity-70 z-10"></div>
            <div className="w-full h-full">
                <div className="sticky top-0 left-0 right-0 z-20">
                    <Nav></Nav>
                </div>
                <div className="absolute inset-0 flex justify-center items-center z-10">
                    <Banner></Banner>
                </div>
            </div>
        </div>
    );
};

export default Header;