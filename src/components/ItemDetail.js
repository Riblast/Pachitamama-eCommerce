import PropTypes from 'prop-types'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import hamburguesas from '../assets/images/hamburguesas.PNG'
import ItemCount from './ItemCount'
import { useCartContext } from '../CartContext'


const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false)

    const {addItem} = useCartContext()

    const onAdd = (quantity) => {
        setGoToCart(true)
        addItem(data, quantity)
    }
    return (
        <div className='items-center text-center w-screen h-screen'>
            <div className='w-3/4 text-center inline-block'>
                <div className="flex m-4 bg-white p-3 rounded h-3/4">
                    <img className="w-2/5" src={hamburguesas} alt={data.itemName}></img>
                    <div className='flex items-center justify-center w-full h-full'>
                        <div className='flex flex-col m-auto pl-1 items-center text-center justify-between'>
                            <h3 className="text-sm m-1 font-medium mb-2">{data.itemName}</h3>
                            <ul className=''>
                                <li><p className='text-sm text-left'>Chocolate amargo y naranja</p></li>
                                <li><p className='text-sm text-left mt-2 mb-2'>Chocolate blanco y arandanos</p></li>
                                <li><p className='text-sm text-left'>Mango, papaya y banana</p></li>
                            </ul>
                            <h3 className="h-fit">Precio: ${data.itemPrice}</h3>
                            {goToCart ? <div className=''>
                                <Link to={'/carrito'} className='p-2 border rounded-md bg-blue-500 h-10'>Terminar Compra</Link>
                                <button onClick={() => {setGoToCart(false)}} className='p-2 border rounded-md bg-blue-500 w-auto h-10'>Atras</button>
                            </div>  : <ItemCount stock={10} onAdd={onAdd}/>}
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
        itemPrice: PropTypes.any
    })
}













export default ItemDetail