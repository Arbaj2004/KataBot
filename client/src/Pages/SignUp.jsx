import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import uploadFile from '../helper/UploadFiles';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import teamwork from "../assets/login.png";
import { CiImageOn } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const SignUp = ({ role }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        role:"",
        address:" "
    })
    useEffect(() => {
        setData(prevData => ({
            ...prevData,
            role: role
        }));
    }, [role]);
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

        const URL = `${import.meta.env.VITE_APP_BACKEND_URL}/users/signup`
        try {
            const response = await axios.post(URL, data)
            console.log("data", data);
            console.log("response", response);
            console.log(response.data.status);
            if (response.data.status === "success") {
                toast.success("new user created")
                console.log(">>>>",response);
                localStorage.setItem('token', response?.data?.token)
                setData({
                    name: "",
                    email: "",
                    password: "",
                    passwordConfirm: "",
                    address: "",
                    // phone:""
                })
                navigate('/verifyOtp')
            }
        } catch (error) {
            toast.error("error to register")
            console.log("error>>>>>>>>>><<<<<<<<<<<",error);
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
                <div className='w-full max-w-sm'>
                    <Toaster position="top-right" reverseOrder={false} />
                    <h1 className='text-4xl font-bold text-black-700 mb-6 text-center'>CREATE ACCOUNT</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <input 
                                type="text"
                                name='name'
                                placeholder='Name'
                                value={data.name}
                                onChange={handleOnChange}
                                className='w-full p-3 border-2 border-black-700 rounded-full focus:outline-none focus:border-black-700'
                                required
                            />
                        </div>
                        
                        <div className='mb-4'>
                            <input 
                                type="email"
                                name='email'
                                placeholder='E-mail'
                                value={data.email}
                                onChange={handleOnChange}
                                className='w-full p-3 border-2 border-black-700 rounded-full focus:outline-none focus:border-black-700'
                                required
                            />
                        </div>
                        <div className='mb-4 relative '>
                            <input 
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                placeholder='Password'
                                value={data.password}
                                onChange={handleOnChange}
                                className='w-full p-3 border-2 border-black-700 rounded-full focus:outline-none focus:border-black-700'
                                required
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
                        <div className='mb-6 relative '>
                            <input 
                                type={showPasswordConfirm ? 'text' : 'password'}
                                name='passwordConfirm'
                                placeholder='Confirm Password'
                                value={data.passwordConfirm}
                                onChange={handleOnChange}
                                className='w-full p-3 border-2 border-black-700 rounded-full focus:outline-none focus:border-black-700'
                                required
                            />
                            <div className='absolute inset-y-0 right-0 flex items-center pr-3 '>
                            <input
                            type="checkbox"
                            id="show-password-conf"
                            checked={showPasswordConfirm}
                            onChange={() => setShowPasswordConfirm(!showPasswordConfirm)}
                            className=' hidden'
                            />
                            
                            <label htmlFor="show-password-conf" className='text-sm cursor-pointer mr-2'>
                            {
                                showPasswordConfirm && (
                                    <FaEye size={20}/>
                                )
                            }{
                                !showPasswordConfirm && (
                                    <FaEyeSlash size={20}/>
                                )
                            }
                            </label>
                        </div>
                        </div>
                        <div className='mb-4'>
                        <input 
                                type="text"
                                name='address'
                                placeholder='address'
                                value={data.address}
                                onChange={handleOnChange}
                                className='w-full p-3 border-2 border-black-700 rounded-full focus:outline-none focus:border-black-700'
                                required
                            />
                        </div>
                        <button 
                            type="submit"
                            className='w-full py-3 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition-colors duration-300'
                        >
                            Create Account
                        </button>
                    </form>
                    <div className='mt-6 text-center'>
                        <p className='text-sm text-gray-600'>
                            Already have an account? <Link to={"/signin"} className='text-black-800 font-bold'>Sign In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;