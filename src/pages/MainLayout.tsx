import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="font-rubik">
            <Outlet />
        </div>
    );
};

export default MainLayout;