import PropTypes from 'prop-types'
import React from 'react'
import { useCartContext } from '../CartContext'

const ItemCart = ({ item }) => {
    const { removeItem } = useCartContext()
    return (
        <div className='my-2 px-6 flex justify-center'>
            <div className="flex items-center justify-items-start justify-between w-1/2">
                <div>
                    <p className="font-bold">{item.itemName}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: $U{item.itemPrice}</p>
                    <p>Subtotal: $U{item.quantity * item.itemPrice}</p>
                </div>
                <button className="p-2 border rounded-md bg-blue-500 w-auto h-10" onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
        </div>
    )
}

ItemCart.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.any,
        img: PropTypes.any,
        itemName: PropTypes.any,
        itemPrice: PropTypes.number,
        quantity: PropTypes.number
    })
}



export default ItemCart