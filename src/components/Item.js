import PropTypes from 'prop-types'
import React from 'react'
import hamburguesas from '../assets/images/hamburguesas.PNG'


const Item = ({ itemData }) =>{
    
    return(
        <div className="m-4 bg-white p-3 rounded h-56">
            <img className="w-[150px]" src={hamburguesas} alt={itemData.itemName}></img>
            <h3 className="text-sm m-1 font-medium">{itemData.itemName}</h3>
            <div className="flex justify-between h-max items-center place-self-end">
                <h3 className="h-fit">${itemData.itemPrice}</h3>
                <button className="border border-green-600 rounded p-1 h-fit">Detalle</button>
            </div>
        </div>
    )
}

Item.propTypes = {
    itemData: PropTypes.shape({
        itemName: PropTypes.any,
        itemPrice: PropTypes.any
    })
}

export default Item