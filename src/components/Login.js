import React from 'react'
import { useState } from 'react'
import { useAuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Login = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
    })

    const [Error, setError] = useState('')

    const { signin } = useAuthContext()

    const navigate = useNavigate()

    const handleOnChange = ({target: {name, value}}) =>{
        setUser({...user, [name]: value})
    }

    const handleOnSubmit = async (e) =>{
        e.preventDefault()
        try {
            await signin(user.email, user.password)
            navigate('/')
        }
        catch(error) {
            switch (error.code) {
            case 'auth/email-already-exists':                
                setError('Éste email ya ha sido registrado')
                break
            case 'auth/internal-error':
                setError('Ha ocurrido un error inesperado')
                break
            case 'auth/invalid-email':
                setError('Ingrese un email válido')
                break
            case 'auth/invalid-password':
                setError('Ingrese una contraseña válida')
            }
            toast.error(Error, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            })
        }

    }
    return (
        <div className='flex items-center justify-center min-h-screen min-w-full'>
            <div className='w-full max-w-xs m-auto'>
                <form onSubmit={handleOnSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className='mb-4'>
                        <label htmlFor='email' className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input className='border rounded w-full py-2 px-3 text-gray-700 focus:outline-none' type="text" name='email' placeholder='example@email.com' required onChange={handleOnChange}/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
                        <input className='border rounded w-full py-2 px-3 text-gray-700 focus:outline-none' type="password" name='password' placeholder='******' required onChange={handleOnChange}/>
                    </div>              
                    
                    <button className='bg-blue-500 text-white shadow-md rounded py-2 px-4 active:bg-blue-700'>Login</button>
                </form>
                <button className='bg-slate-50 text-black shadow-md rounded py-2 px-4' onClick={()=>navigate('/Register')}>Register</button>
            </div>
        </div>
    )
}

export default Login