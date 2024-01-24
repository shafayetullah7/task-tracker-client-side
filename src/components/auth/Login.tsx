import { FormEvent, useState } from 'react';
import { TauthPage } from '../../pages/Auth';
import GradientText from '../utils/GradientText';
import { Link } from 'react-router-dom';

type Tprops = {
    changePage: (value: TauthPage) => void
}

const Login = ({ changePage }: Tprops) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Add your login logic here, e.g., make an API request
        console.log(email, password);

        console.log('Login details:', { email, password });
    };

    return (
        <div className="max-w-xl mx-auto mt-8 p-8 bg-white rounded shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center"><GradientText>Login</GradientText></h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4 w-[300px]">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="w-full border rounded py-2 px-3"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="w-full border rounded py-2 px-3"
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button
                        className="gradient-background text-white  py-2 px-4 rounded focus:outline-none hover:scale-105 active:scale-95 w-fit block mx-auto mt-10"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
            </form>
            <div className="text-gray-600 text-sm mt-8 text-center">
                Don't have an account?{' '}
                <button className="text-blue-500 hover:underline" onClick={() => changePage('signup')}>
                    Sign up
                </button>
            </div>
            <div className="mt-3 w-fit mx-auto">
                <Link to="/">
                    <button className="text-sm text-gray-600 hover:underline focus:outline-none">
                        ← Go back to Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Login;
