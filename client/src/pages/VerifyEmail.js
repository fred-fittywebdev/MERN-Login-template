import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

function VerifyEmail() {
    const params = useParams()
    // Email
    const [emailVerified, setEmailVerified] = useState('')

    const verifyToken = async () => {
        try {
            toast.loading()
            const response = await axios.post('/api/auth/verifymail', { token: params.token })
            if (response.data.success) {
                setEmailVerified("true")
            } else {
                setEmailVerified("false")
            }
            toast.dismiss()
        } catch (error) {
            toast.dismiss()
            setEmailVerified("false")
        }
    }

    useEffect(() => {
        verifyToken()
    }, [])

    return (
        <div className='flex min-h-screen p-5 justify-center items-center'>
            {/* --- Email not verified yet --- */}
            {emailVerified === '' && (
                <h1 className='text-primary text-4-xl'>Please wait email verification in process...</h1>
            )}
            {/* --- Email erified --- */}
            {emailVerified === "true" && (
                <h1 className='text-primary text-4-xl'>Your Email is verified successfully...</h1>
            )}

            {/* --- Email not verified --- */}
            {emailVerified === "flase" && (
                <h1 className='text-primary text-4-xl'>Authentification failed, your email is not valid...</h1>
            )}
        </div>
    )
}

export default VerifyEmail