import React from "react";
import hamburguesas from "../assets/images/hamburguesas.PNG"

const Item = ({ itemData }) =>{
    
    return(
            <div className="m-4 bg-white p-3 rounded">
                <img className="w-[150px]" src={hamburguesas} alt={itemData.itemName}></img>
                <div className="w-[150px]">
                    <h3 className="text-sm m-1 font-medium">{itemData.itemName}</h3>
                    <div className="flex justify-between items-center">
                        <h3 className="h-fit">${itemData.itemPrice}</h3>
                        <button className="border border-green-600 rounded p-1">Detalle</button>
                    </div>
                </div>
            </div>
    )
}

export default Item;