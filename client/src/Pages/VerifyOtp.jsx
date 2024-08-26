import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const VerifyOtp = () => {
    const token = localStorage.getItem('token')
    console.log(token)
    const [otp, setOtp] = useState("")
    const navigate = useNavigate()
    const handleOnChange = (e) => {
        const { value } = e.target
        setOtp((prev) => {
            return {
                ...prev,
                value
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        e.stopPropagation()

        const URL = `${import.meta.env.VITE_APP_BACKEND_URL}/users/verifySignupEmailOTP`
        console.log(">>>>>>>>>><<<<<<<<<,",URL,token,otp)
        try {
            const response = await axios.post(
                URL,
                { "Emailotp": otp.value },
                { 
                  headers: { 
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json' // Explicitly set the Content-Type
                  } 
                }
              );
            console.log("response", response);
            toast.success(response.data.status)
            if (response.data.status === "success") {
                localStorage.setItem('token', response?.data?.token)
                setOtp("")
                navigate('/')
            }
        } catch (error) {
            toast.error(error?.response?.data?.message)
            console.log(error);
        }
    }

    return (
    <div className='flex min-h-screen bg-slate-300 justify-center items-center flex-col'>
        hey
        <form action="" className='flex flex-col justify-center item-center mt-3' onSubmit={handleSubmit}>
        <div>
        <input type="text"
        id='otp'
        name='otp'
        className=' mt-1 w-80 h-10 rounded mb-4 p-3'
        placeholder='OTP*'
        required
        onChange={handleOnChange}
        />
        </div>
        <button className={`bg-purple-700 mt-5 text-white font-semibold rounded h-10 w-full hover:bg-blue-950`} >
                        Verify OTP
                    </button>
        </form>
    </div>
  )
}

export default VerifyOtp