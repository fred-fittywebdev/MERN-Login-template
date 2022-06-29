import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'


function Register() {
    // form value hooks
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const registerUser = async () => {
        if (password === confirmPassword) {
            const userObj = {
                name,
                email,
                password,
                confirmPassword,
            }
            try {
                const response = await axios.post('/api/auth/register', userObj)
                if (response.data.success) {
                    toast.success(response.data.message)
                } else {
                    toast.error(response.data.message)
                }
            } catch (error) {

            }
        } else {
            toast.error('password does not match')
        }

    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-[400px] p-7 shadow-xl'>
                <h1 className='font-semibold text-3xl py-2 text-primary'>Sign Up</h1>


                <label className="block py-2">
                    <span className="block text-sm font-medium text-slate-700">Name</span>
                    <input type="text" className="py-2 px-2 border-2 border-gray-100 rounded w-full" placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} />
                </label>
                <label className="block py-2">
                    <span className="block text-sm font-medium text-slate-700">Email</span>
                    <input type="text" className="py-2 px-2 border-2 border-gray-100 rounded w-full" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>
                <label className="block py-2">
                    <span className="block text-sm font-medium text-slate-700">Password</span>
                    <input type="password" className="py-2 px-2 border-2 border-gray-100 rounded w-full" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                </label>
                <label className="block py-2">
                    <span className="block text-sm font-medium text-slate-700">Confirm Password</span>
                    <input type="password" className="py-2 px-2 border-2 border-gray-100 rounded w-full" placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
                </label>

                <div className="flex justify-between items-end">
                    <Link className='underline text-xs text-accent' to='/login'>Already register? Click here to login.</Link>
                    <button onClick={registerUser} className='py-1 px-5 bg-accent text-primary'>Register</button>
                </div>

            </div>
        </div >
    )
}

export default Register