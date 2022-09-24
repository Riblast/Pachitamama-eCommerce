import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../CartContext'
import ItemCart from './ItemCart'
const Cart = () => {
    const { cart, totalPrice } = useCartContext()

    if(cart.length === 0){
        return(
            <div className='w-screen h-screen items-center justify-center flex'>
                <div className='flex items-center justify-center h-3/4 w-2/4 bg-white rounded-lg'>
                    <div className='flex-row'>
                        <p className='m-3'>El carrito está vacío</p>
                        <div className='flex justify-center w-auto'><button className='m-3 p-2 border rounded-md bg-blue-500 w-auto h-10'><Link to="/">Ir a comprar</Link></button></div>
                    </div>   
                </div>  
            </div>)
    }
    return (
        <div className='w-screen h-screen justify-center items-center flex flex-col'>
            <h2 className='carrito mb-4 text-lg font-bold'>Carrito</h2>
            <div className='flex items-center h-3/4 w-2/4 bg-white rounded-lg'>
                <div className='flex-row justify-center h-fit w-full'>
                    {
                        cart.map(item => <ItemCart key={item.id} item={item}/>)
                    }
                    <p className='flex justify-end px-4'>Total: ${totalPrice()}</p>
                </div>              
            </div>
        </div>
    )
}

export default Cart