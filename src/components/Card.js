import React from "react";
import ItemCount from "./ItemCount";

const Card = ({img, productName="Producto", productPrice="$0"}) =>{
    return(
            <div className="align-middle mt-4 bg-white p-3 rounded">
                <img className="w-[150px]" src={img} alt={productName}></img>
                <div className="w-[150px]">
                    <h3 className="">{productName}</h3>
                    <div className="flex justify-between">
                        <h3 className="">{productPrice}</h3>
                        <ItemCount/>
                    </div>
                </div>
            </div>
    )
}

export default Card;