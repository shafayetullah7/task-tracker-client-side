import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import DefaultScreen from "../components/common/DefaultScreen";
import Error from "../pages/Error";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <DefaultScreen></DefaultScreen>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
]);
export default routes;