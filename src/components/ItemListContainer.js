import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='flex justify-center'>
            <h2 className='bg-gray-800 bg-opacity-50 p-3 rounded-md font-poppins font-medium text-2xl text-white mx-3 my-6 leading-9'>{greeting}</h2>
        </div>
        
    )
}

export default ItemListContainer;