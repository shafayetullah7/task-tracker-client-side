import { DatePicker, DatePickerProps } from "antd";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { uploadImage } from "../../utils/imgbb";
import { TauthPage } from '../../pages/Auth';
import GradientText from "../utils/GradientText";
import { Link } from "react-router-dom";

type Tprops = {
    changePage: (value: TauthPage) => void
}

type SignupFormData = {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    image?: string;
    phone?: string;
    gender: string;
    dob?: string;
}

const Signup = ({ changePage }: Tprops) => {
    const [formData, setFormData] = useState<SignupFormData>({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        image: '',
        phone: '',
        gender: '',
        dob: '',
    });

    const [image, setImage] = useState<File | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const { type } = e.target;
        // console.log(type);
        if (type === 'file') {
            // console.log(name, value);
            const fileInput = e.target as HTMLInputElement;
            const files = fileInput.files;
            // console.log(files);

            if (files?.length && files?.length > 0) {
                setImage(files[0]);
            }
        }
    }

    const onDateChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date);
        console.log(dateString);
        setFormData((formData) => {
            return { ...formData, dob: dateString }
        })
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const data: SignupFormData = formData;
            if (image) {
                console.log('here');
                const uploadData = await uploadImage(image);
                console.log(uploadData);
                if (uploadData.url) {
                    data.image = uploadData.url;
                }
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        console.log(formData);
    }, [formData]);

    useEffect(() => {
        console.log(image);
    }, [image]);

    return (
        <div className="max-w-xl mx-auto mt-8 p-8 bg-white rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-center"><GradientText>Sign up</GradientText></h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-5 items-center">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                            First Name
                        </label>
                        <input
                            className="w-full border rounded py-2 px-3"
                            type="text"
                            id="firstname"
                            name="firstname"
                            value={formData.firstname}
                            onBlur={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                            Last Name
                        </label>
                        <input
                            className="w-full border rounded py-2 px-3"
                            type="text"
                            id="lastname"
                            name="lastname"
                            value={formData.lastname}
                            onBlur={handleChange}
                        />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-5 items-center">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full border rounded py-2 px-3"
                            type="text"
                            id="email"
                            name="email"
                            value={formData.email}
                            onBlur={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full border rounded py-2 px-3"
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onBlur={handleChange}
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                        Image
                    </label>
                    <input
                        className="w-full border rounded py-2 px-3"
                        type="file"
                        id="image"
                        name="image"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>

                <div className="flex flex-col sm:flex-row gap-5 items-center">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Phone
                        </label>
                        <input
                            className="w-full border rounded py-2 px-3"
                            type="text"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onBlur={handleChange}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gender">
                            Gender
                        </label>
                        <select
                            className="w-full border rounded py-2 px-3"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                </div>

                <div className="mb-4">
                    <DatePicker onChange={onDateChange} />
                </div>

                <div className="w-fit mx-auto mt-10">
                    <button
                        className="gradient-background text-white  py-2 px-4 rounded focus:outline-none hover:scale-105 active:scale-95"
                        type="submit"
                    >
                        Sign Up
                    </button>
                </div>
            </form>
            <div className="text-gray-600 text-sm mt-8 text-center">
            Already have an account?{' '}
                <button className="text-blue-500 hover:underline" onClick={() => changePage('login')}>
                    Login
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

export default Signup;