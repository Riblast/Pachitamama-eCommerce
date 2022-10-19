import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ itemData }) =>{
    return(
        <div className="m-4 bg-white p-3 rounded h-56 flex flex-col justify-between max-w-[150px]">
            <div>
                <img className="w-[150px] h-[112.5px] m-auto" src={itemData.image} alt={itemData.name}></img>
                <h3 className="text-sm m-1 font-medium">{itemData.name}</h3>
            </div>          
            <div className="flex flex-row justify-between h-max w-full items-center place-self-end">
                <h3 className="h-fit">${itemData.price}</h3>
                <Link to={`/item/${itemData.id}`}><button className="border border-green-600 active:bg-green-600 rounded p-1 h-fit">Detalle</button></Link>
            </div>
        </div>
    )
}

Item.propTypes = {
    itemData: PropTypes.shape({
        id: PropTypes.any,
        image: PropTypes.any,
        name: PropTypes.any,
        price: PropTypes.any
    })
}



export default Item