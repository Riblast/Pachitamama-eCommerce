import PropTypes from 'prop-types'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'
import { useCartContext } from '../context/CartContext'


const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false)

    const {addItem} = useCartContext()

    const onAdd = (quantity) => {
        setGoToCart(true)
        addItem(data, quantity)
    }
    if(!data.name) return (
        <div className='flex items-center justify-center w-full h-screen'>
            <div className="flex-col m-4 p-3 rounded h-fit w-fit">
                <h1 className='text-8xl font-extrabold'>404</h1>
                <p className='text-xl flex justify-center'>Page not found</p>
            </div>
        </div>
    )
    return (
        <div className='items-center text-center w-full h-screen'>
            <div className='w-3/4 text-center inline-block'>
                <div className="flex m-4 bg-white p-3 rounded h-3/4 w-fit">
                    <img className="w-1/4" src={data.image} alt={data.img}></img>
                    <div className='flex items-center justify-center w-full h-full'>
                        <div className='flex flex-col m-auto pl-1 items-center text-center justify-between'>
                            <h3 className="text-sm m-1 font-medium mb-2">{data.name}</h3>
                            <p className=''>{data.description}</p>
                            <h3 className="h-fit">Precio: ${data.price}</h3>
                            {goToCart ? <div className=''>
                                <button className='my-0 bg-blue-500 text-white shadow-md rounded py-2 px-4 active:bg-blue-700 m-2'><Link to={'/carrito'} className=''>Terminar Compra</Link></button>
                                <button onClick={() => {setGoToCart(false)}} className='my-0 bg-blue-500 text-white shadow-md rounded py-2 px-4 active:bg-blue-700 m-2'>Atras</button>
                            </div>  : <ItemCount stock={data.stock} onAdd={onAdd}/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ItemDetail.propTypes = {
    data: PropTypes.shape({
        description: PropTypes.any,
        image: PropTypes.any,
        img: PropTypes.any,
        name: PropTypes.any,
        price: PropTypes.any,
        stock: PropTypes.any
    })
}















export default ItemDetail