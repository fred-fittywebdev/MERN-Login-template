import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast';
import axios from 'axios';

function Home() {
    const [userInfo, setuserInfo] = useState(null)
    const navigate = useNavigate()

    const getData = async () => {
        toast.loading('Fetching data..')
        try {
            const token = localStorage.getItem('user');
            const response = await axios.get('/api/user/get-user-info', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            toast.dismiss()
            if (response.data.success) {
                setuserInfo(response.data.data)
                console.log(userInfo)
            } else {
                localStorage.removeItem('user')
                navigate('/login')
                toast.error('something went wrong')
            }
        } catch (error) {
            localStorage.removeItem('user')
            navigate('/login')
            toast.error('something went wrong')
        }
    }

    useEffect(() => {
        if (userInfo === null) {
            getData()
        }
    }, [userInfo])

    return (
        userInfo !== null && (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <p className="text-2xl"> <strong>Name:</strong>  {userInfo?.name} </p>
                <p className="text-2xl"> <strong>Email:</strong>  {userInfo?.email} </p>
            </div >
        )

    )
}

export default Home