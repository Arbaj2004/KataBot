import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const ForgotPassword = () => {

    const [data, setData] = useState({
        email: "",
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

        const URL = `${import.meta.env.VITE_APP_BACKEND_URL}/users/forgotPassword`
        try {
            const response = await axios.post(URL, {
                email: data.email,
            }
            )
            console.log("response", response);
            toast.success("Link sent on Email")
            if (response.data.status === "success") {
                localStorage.setItem('token', response?.data?.token)
                setData({
                    email: ""
                })
            }
        } catch (error) {
            toast.error("Email Not Found")
            console.log(error);
        }
        console.log(data);
    }

    return (
    <div>ForgotPassword
        <div>
        <Toaster position="top-right" reverseOrder={false} />
        <form onSubmit={handleSubmit} className="flex flex-col">
            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">EMAIL</label>
            <input 
                type="email"
                id='email'
                name='email'
                className='mb-4 h-10 p-3 border-2 border-green-800 rounded-full focus:outline-none'
                placeholder='Email'
                required
                value={data.email}
                onChange={handleOnChange}
            />
            <button type="submit" className='bg-yellow-500 text-white font-bold h-10 w-full rounded-full hover:bg-yellow-600 transition-colors duration-300'>
                LOGIN
            </button>
        </form>
        </div>
    </div>
  )
}

export default ForgotPassword