import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../CartContext'
import ItemCart from './ItemCart'
const Cart = () => {
    const { cart, totalPrice } = useCartContext()

    if(cart.length === 0){
        return(<div className='w-screen h-screen items-center justify-center flex'>
            <div className='flex-row'>
                <p className='m-3'>El carrito está vacío</p>
                <div className='flex justify-center w-auto'><button className='m-3 p-2 border rounded-md bg-blue-500 w-auto h-10'><Link to="/">Ir a comprar</Link></button></div>
            </div>   
        </div>)

    }
    return (
        <div className='w-screen h-screen'>
            {
                cart.map(item => <ItemCart key={item.id} item={item}/>)
            }
            <p>Total: ${totalPrice()}</p>
        </div>
    )
}

export default Cart