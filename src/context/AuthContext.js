import PropTypes from 'prop-types'
import React, {createContext, useContext, useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase/config'

const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const signin = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const signout = () => signOut(auth)

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
    }, [])
    
    

    return (
        <AuthContext.Provider value={{signup, signin, user, signout, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.any
}

export default AuthProvider