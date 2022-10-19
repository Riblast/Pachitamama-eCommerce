import PropTypes from 'prop-types'
import React from 'react'
import { useCartContext } from '../context/CartContext'

const ItemCart = ({ item }) => {
    const { removeItem } = useCartContext()
    return (
        <div className='m-4 px-6 flex justify-between bg-gray-100 rounded '>
            <div className="flex items-center justify-between w-full">
                <img className='w-24 h-20' src={item.image}/>
                <div className='flex flex-col items-center'>
                    <p className="font-bold">{item.name}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: $U{item.price}</p>
                    <p>Subtotal: $U{item.quantity * item.price}</p>
                </div>
                <button className="bg-blue-500 text-white shadow-md rounded py-2 px-4 active:bg-blue-700" onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
        </div>
    )
}

ItemCart.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.any,
        image: PropTypes.any,
        name: PropTypes.any,
        price: PropTypes.number,
        quantity: PropTypes.number
    })
}





export default ItemCart