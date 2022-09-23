import PropTypes from 'prop-types'
import React, { useState, useContext } from 'react'
const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)


const CartProvider = ({ children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) =>{
        if(isInCart(item.id)){
            setCart(cart.map(product =>{
                return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }))
        }
        else{
            setCart([...cart, { ...item, quantity }])
        }
    }

    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (id) =>{
        return cart.find(product => product.id === id) ? true : false
    }

    const removeItem = (id) =>{
        return setCart(cart.filter(item => item.id !== id))
    }

    const totalPrice = () =>{
        return cart.reduce((prev, act) => prev + act.quantity * act.itemPrice, 0)
    }

    const totalItems = () =>{
        return cart.reduce((prev, act) => prev + act.quantity, 0)
    }
    console.log(cart) 
    return (
        <CartContext.Provider value={{addItem, clearCart, isInCart, removeItem, totalPrice, totalItems, cart}}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.any
}

export default CartProvider