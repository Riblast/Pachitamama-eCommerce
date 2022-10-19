import PropTypes from 'prop-types'
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { ClipLoader } from 'react-spinners'

const ProtectedRoute = ({ children }) => {

    const {user, loading} = useAuthContext()

    if(loading) return (
        <div className='min-h-screen min-w-full flex justify-center items-center'>
            <div>
                <ClipLoader />
            </div>
        </div>   
    )

    if(!user) return <Navigate to="/Login" />

    return <>{children}</>
}

ProtectedRoute.propTypes = {
    children: PropTypes.any
}

export default ProtectedRoute