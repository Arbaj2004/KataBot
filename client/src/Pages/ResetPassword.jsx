import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom'

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const { id: ResetToken } = useParams();
    const [data, setData] = useState({
        password: "",
        passwordConfirm: "",
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

        const URL = `${import.meta.env.VITE_APP_BACKEND_URL}/users/resetPassword/${ResetToken}`
        try {
            const response = await axios.patch(URL, {
                password: data.password,
                passwordConfirm:data.passwordConfirm
            }
            )
            console.log("response", response);
            toast.success("Password Reset Success")
            if (response.data.status === "success") {
                localStorage.setItem('token', response?.data?.token)
                setData({
                    password:"",
                    passwordConfirm:""
                })
            }
            navigate('/signin')
        } catch (error) {
            toast.error("ERROR Occured")
            console.log(error);
        }
        console.log(data);
    }

    return (
    <div>ForgotPassword
        <div>
        <Toaster position="top-right" reverseOrder={false} />
        <form onSubmit={handleSubmit} className="flex flex-col">
        <div className='mb-4 relative '>
                            <input 
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                placeholder='Password'
                                value={data.password}
                                onChange={handleOnChange}
                                className='w-full p-3 border-2 border-green-700 rounded-full focus:outline-none focus:border-green-700'
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
                                className='w-full p-3 border-2 border-green-700 rounded-full focus:outline-none focus:border-green-700'
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
            <button type="submit" className='bg-yellow-500 text-white font-bold h-10 w-full rounded-full hover:bg-yellow-600 transition-colors duration-300'>
                LOGIN
            </button>
        </form>
        </div>
    </div>
  )
}

export default ResetPassword