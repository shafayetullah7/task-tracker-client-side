import { Outlet } from "react-router-dom";

const DefaultScreen = () => {
    return (
        <div className="max-w-[1280px] mx-auto">
            <Outlet />
        </div>
    );
};

export default DefaultScreen;