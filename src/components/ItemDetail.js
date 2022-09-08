import PropTypes from 'prop-types'
import React from 'react'
import hamburguesas from '../assets/images/hamburguesas.PNG'

const ItemDetail = ({ data }) => {
    return (
        <div className='items-center text-center w-screen h-screen'>
            <div className='w-2/3 text-center inline-block'>
                <div className="flex m-4 bg-white p-3 rounded h-56">
                    <img className="" src={hamburguesas} alt={data.itemName}></img>
                    <div className='flex items-center justify-center w-full h-full'>
                        <div className='flex flex-col m-auto h-full pl-1 items-center text-center justify-between'>
                            <h3 className="text-sm m-1 font-medium mb-2">{data.itemName}</h3>
                            <ul className=''>
                                <li><p className='text-sm text-left'>Chocolate amargo y naranja</p></li>
                                <li><p className='text-sm text-left mt-2 mb-2'>Chocolate blanco y arandanos</p></li>
                                <li><p className='text-sm text-left'>Mango, papaya y banana</p></li>
                            </ul>
                            <h3 className="h-fit">Precio: ${data.itemPrice}</h3>
                            <button className='p-2 border rounded-md bg-blue-500'>Agregar al Carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ItemDetail.propTypes = {
    data: PropTypes.shape({
        itemName: PropTypes.any,
        itemPrice: PropTypes.any,
        variation1: PropTypes.any,
        variation2: PropTypes.any,
        variation3: PropTypes.any,
        variations: PropTypes.any
    })
}



export default ItemDetail