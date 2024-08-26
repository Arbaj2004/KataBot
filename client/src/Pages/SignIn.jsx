import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import teamwork from "../assets/login.png";

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        e.stopPropagation()

        const URL = `${import.meta.env.VITE_APP_BACKEND_URL}/users/login`
        try {
            const response = await axios.post(URL, {
                email: data.email,
                password: data.password,
            }, {
                withCredentials: true
            }
            )
            console.log("response", response);
            toast.success("Successful login")
            if (response.data.status === "success") {
                localStorage.setItem('token', response?.data?.token)
                setData({
                    password: "",
                    email: ""
                })
                navigate('/')
            }
        } catch (error) {
            toast.error("Please check your email and password")
            console.log(">>",error);
        }
        console.log(data);
    }

    return (
        <div className="relative h-screen flex flex-col lg:flex-row">
            <div className="absolute top-4 right-4 flex space-x-2 z-10">
    <Link to="/signin">
        <button
            className="px-4 py-2 rounded-full bg-gray-200 hover:bg-pink-400 shadow-md text-gray-700 text-sm transition-colors duration-300"
        >
            Sign In
        </button>
    </Link>
    <Link to="/signup">
        <button
            className="px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 shadow-md text-sm transition-colors duration-300"
        >
            Sign Up
        </button>
    </Link>
</div>

            <div className="absolute top-4 left-4 z-10">
            <Toaster position="top-right" reverseOrder={false} />
                <button
                    onClick={() => navigate('/')} 
                    className="text-sm px-4 py-2 bg-gray-200 hover:bg-pink-400 rounded-lg shadow-md transition-colors duration-300"
                >
                    Back
                </button>
            </div>

            <div className="w-full lg:w-1/2 hidden lg:flex justify-center items-center">
                <img 
                    src={teamwork} 
                    alt="Teamwork" 
                    className="rounded shadow-md w-full h-full object-cover" 
                />
            </div>

            <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
                <div className="w-full max-w-sm">
                    <h1 className="text-4xl font-bold text-black-800 tracking-widest mb-6 text-center">LOGIN</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">EMAIL</label>
                        <input 
                            type="email"
                            id='email'
                            name='email'
                            className='mb-4 h-10 p-3 border-2 border-black-800 rounded-full focus:outline-none'
                            placeholder='Email'
                            required
                            value={data.email}
                            onChange={handleOnChange}
                        />
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">PASSWORD</label>
                        <div className='relative mb-4'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id='password'
                            name='password'
                            className='p-2 border-2 border-black-800 rounded-full focus:outline-none w-full'
                            placeholder='PASSWORD'
                            required
                            value={data.password}
                            onChange={handleOnChange}
                        />
                        <div className='absolute inset-y-0 right-0 flex items-center pr-3 '>
                            <input
                            type="checkbox"
                            id="show-password"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                            className=' hidden'
                            />
                            <label htmlFor="show-password" className='text-sm cursor-pointer mr-2'>
                            {
                                showPassword && (
                                    <FaEye size={20}/>
                                )
                            }{
                                !showPassword && (
                                    <FaEyeSlash size={20}/>
                                )
                            }
                            </label>
                        </div>
                        </div>
                        <div className="flex justify-end mb-4">
                            <a href="/forgot-password" className="text-sm text-gray-600 hover:text-gray-800">FORGOT PASSWORD?</a>
                        </div>
                        <button type="submit" className='bg-pink-500 text-white font-bold h-10 w-full rounded-full hover:bg-yellow-600 transition-colors duration-300'>
                            LOGIN
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            DON’T HAVE AN ACCOUNT?{" "}
                            <Link to={"/signup"} className="text-black-800 font-bold">
                                SIGN UP
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;











