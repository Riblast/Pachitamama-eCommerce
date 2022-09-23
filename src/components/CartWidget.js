import React from 'react'
import '../index.css'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCartContext } from '../CartContext'

const CartWidget = () => {
    const { totalItems, cart } = useCartContext()

    if(cart.length === 0){
        return(
            <FontAwesomeIcon className="w-6 h-6 text-black" icon={faCartShopping}/>
        )
    }
    return(
        <div className=''>
            <FontAwesomeIcon className="w-6 h-6 text-black" icon={faCartShopping}/>
            <span className='px-1 ml-[-5px] text-sm rounded-lg bg-blue-500 align-top absolute'>{totalItems()}</span>
        </div>      
    )
}
export default CartWidget