import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { ClipLoader } from 'react-spinners'

const Profile = () => {
    const { user, signout, loading } = useAuthContext()
    const navigate = useNavigate()
    const handleLogout = async () =>{
        await signout()
        navigate('/Login')
    }

    if(loading) return (
        <div className='min-h-screen min-w-full flex justify-center items-center'>
            <div>
                <ClipLoader />
            </div>
        </div>   
    )

    return (
        <div className='flex items-center justify-center min-h-screen min-w-full'>
            <div className='flex flex-col items-center w-fit max-w-xs m-auto'>
                <h1 className='m-4'>Welcome {user.displayName}</h1>
                <button className='bg-blue-500 text-white shadow-md rounded py-2 px-4 active:bg-blue-700' onClick={handleLogout}>Logout</button>
            </div>          
        </div>      
    )
}

export default Profile