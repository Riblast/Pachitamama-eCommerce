import React, { useEffect, useState } from 'react'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { auth } from '../firebase/config'
import { Link, useNavigate } from 'react-router-dom'
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart'
import { toast } from 'react-toastify'
import Modal from './Modal'
const Cart = () => {
    const { cart, totalPrice, saveCart, clearCart } = useCartContext()
    const [modalState, setModalState] = useState(false)
    const [data, setData] = useState({
        nombre: '',
        apellido: '',
        telefono: ''
    })

    const user = auth.currentUser

    const navigate = useNavigate()
    const handleOnClick = () =>{
        if(user){
            setModalState(!modalState)
        }
        if(!user){
            toast.error('Inicie session para finalizar la compra', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            })
            navigate('/Login')
        }
    }

    const handleOnChange = (e) =>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault()
        const order = {
            buyer: {
                name: data.nombre,
                apellido: data.apellido,
                email: user.email,
                telefono: data.telefono
            },
            items: cart.map(product =>({id: product.id, title: product.name, price: product.price, quantity: product.quantity})),
            total: totalPrice()
        }

        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
            .then(({ id }) => toast.success('Compra finalizada su id es: ' + id), {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: 'colored',
            }
            )
        clearCart()
        navigate('/')
    }

    useEffect(() => {
        saveCart()
    }, [cart])

    if(cart.length === 0){
        return(
            <div className='w-screen h-screen items-center justify-center flex'>
                <div className='flex items-center justify-center h-3/4 w-2/4 bg-white rounded-lg'>
                    <div className='flex-row'>
                        <p className='m-3'>El carrito está vacío</p>
                        <div className='flex justify-center w-auto'><button className='bg-blue-500 text-white shadow-md rounded py-2 px-4 active:bg-blue-700 m-3'><Link to="/">Ir a comprar</Link></button></div>
                    </div>   
                </div>  
            </div>)
    }
    return (
        <div className='w-full h-screen justify-center items-center flex flex-col'>
            <div className='flex flex-col items-center h-3/4 w-2/4 bg-white rounded-lg pt-2'>
                <div className='flex-row justify-center h-3/4 w-full overflow-y-auto overflow-x-hidden'>
                    {
                        cart.map(item => <ItemCart key={item.id} item={item}/>)
                    }
                </div>  
                <div className='flex w-full justify-end my-2 px-6'><p className='text-lg font-semibold'>Total: ${totalPrice()}</p></div>
                <div className='flex w-full justify-end my-2 px-6'><button className='bg-blue-500 text-white shadow-md rounded py-2 px-4 active:bg-blue-700' onClick={handleOnClick}>Finalizar compra</button></div>           
            </div>
            <Modal state={modalState} setState={setModalState}>
                <form onSubmit={handleOnSubmit} className="w-full">
                    <label className='flex justify-center'>
                        <input className='border border-blue-400 rounded' type="text" name="nombre" placeholder='Nombre' required onChange={handleOnChange} />
                    </label>

                    <label className='flex justify-center'>
                        <input className='border border-blue-400 rounded m-2' type="text" name="apellido" placeholder='Apellido' required onChange={handleOnChange} />
                    </label>

                    <label className='flex justify-center'>
                        <input className='border border-blue-400 rounded' type="number" name="telefono" placeholder='Telefono' required onChange={handleOnChange} />
                    </label>

                    <div className='flex justify-center'>
                        <input className='bg-blue-500 text-white shadow-md rounded py-2 px-4 active:bg-blue-700 m-3' type="submit" value="Enviar" />
                    </div>
                </form>
            </Modal>
        </div>
    )
}

export default Cart