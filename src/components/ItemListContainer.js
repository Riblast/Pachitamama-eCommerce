import React from 'react'
import Card from './Card';
import hamburguesas from "../assets/images/hamburguesas.PNG"

const ItemListContainer = () => {
    return (
        <div className='flex justify-center'>
            <Card productName={"Hamburguesa vegana"} img={hamburguesas}/>
        </div>
        
    )
}

export default ItemListContainer;