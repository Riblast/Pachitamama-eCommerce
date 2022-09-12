import PropTypes from 'prop-types'
import React, { useState } from 'react'

const ItemCount = ({stock, initial = 1, onAdd}) => {

    let [counter, setCounter] = useState(initial)
    const handlerCounterUp = () =>{
        if(counter < stock){
            setCounter(++counter)
        }
    }
    const handlerCounterDown = () =>{
        if(counter > 1){
            setCounter(--counter)
        }
    }
    return (
        <div>
            <div className="flex justify-between h-6">
                <button className='flex p-2 border rounded-md bg-blue-500 h-auto w-10 items-center justify-center ' onClick={handlerCounterDown}>-</button>
                <p className='flex items-center'>{counter}</p>
                <button className='flex p-1 border rounded-md bg-blue-500 h-auto w-10 items-center justify-center' onClick={handlerCounterUp}>+</button>
            </div>
            <button className="p-1 border rounded-md bg-blue-500 h-10" onClick={() => {onAdd(counter)}} disabled={stock === 0 ? true : null}>Agregar al carrito</button>
        </div>
    )
}

ItemCount.propTypes = {
    initial: PropTypes.number,
    onAdd: PropTypes.func,
    stock: PropTypes.number
}
export default ItemCount