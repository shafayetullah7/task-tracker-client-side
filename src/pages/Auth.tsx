import { useState } from "react";
// import DefaultScreen from "../components/utils/DefaultScreen";
import Signup from "../components/auth/Signup";
import Login from "../components/auth/Login";

const authPage = {
    login: 'login',
    signup: 'signup'
} as const;

export type TauthPage = keyof typeof authPage;

const Auth = () => {
    const [page, setPage] = useState<TauthPage>('login');

    const changePage = (value: TauthPage): void => {
        setPage(value);
    }

    return (
        <div className="h-screen w-full relative overflow-x-hidden overflow-y-auto bg-auth-bg bg-cover bg-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {page === 'login' ? <Login changePage={changePage}></Login> : <Signup changePage={changePage}></Signup>}
            </div>
        </div>
    );
};

export default Auth;