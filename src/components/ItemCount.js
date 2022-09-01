import { useState } from "react";

const ItemCount = ({stock, initial = 1, onAdd}) => {

    let [counter, setCounter] = useState(initial);
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
            <div className="flex justify-end">
                <button onClick={handlerCounterDown}>- </button>
                <p>{counter}</p>
                <button onClick={handlerCounterUp}> +</button>
            </div>
            <button className="w-full border border-black" onClick={() => {onAdd(counter)}} disabled={stock === 0 ? true : null}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount;