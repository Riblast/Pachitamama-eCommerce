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
            <div className="flex justify-between h-6 my-2">
                <button className='flex p-2 bg-blue-500 text-white shadow-md rounded py-2 px-4 active:bg-blue-700 items-center justify-center ' onClick={handlerCounterDown}>-</button>
                <p className='flex items-center'>{counter}</p>
                <button className='flex p-1 bg-blue-500 text-white shadow-md rounded py-2 px-4 active:bg-blue-700 items-center justify-center' onClick={handlerCounterUp}>+</button>
            </div>
            <button className="bg-blue-500 text-white shadow-md rounded py-2 px-4 active:bg-blue-700" onClick={() => {onAdd(counter)}} disabled={stock === 0 ? true : null}>Agregar al carrito</button>
        </div>
    )
}

ItemCount.propTypes = {
    initial: PropTypes.number,
    onAdd: PropTypes.func,
    stock: PropTypes.number
}
export default ItemCount