import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
    // form value hooks
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginUser = () => {
        const userObj = {
            email,
            password,
        }
        console.log(userObj);
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-[400px] p-5 shadow-xl'>
                <h1 className='font-semibold text-3xl py-2 text-primary'>Sign In</h1>



                <label className="block py-2">
                    <span className="block text-sm font-medium text-slate-700">Email</span>
                    <input type="text" className="py-2 px-2 border-2 border-gray-100 rounded w-full" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>
                <label className="block py-2">
                    <span className="block text-sm font-medium text-slate-700">Password</span>
                    <input type="text" className="py-2 px-2 border-2 border-gray-100 rounded w-full" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} />
                </label>

                <div className="flex justify-between items-end">
                    <Link className='underline text-xs text-accent' to='/register'>Don't have an account? Register here.</Link>
                    <button onClick={loginUser} className='py-1 px-5 bg-accent text-primary'>Login</button>
                </div>

            </div>
        </div >
    )
}

export default Login