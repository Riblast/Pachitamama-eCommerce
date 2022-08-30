import { useState } from "react";
import "../index.css"

const ItemCount = () => {

    let [counter, setCounter] = useState(0);
    const handlerCounterUp = () =>{
        setCounter(++counter)
    }
    const handlerCounterDown = () =>{
        if(counter > 0){
            setCounter(--counter)
        }
    }
    return (
        <div className="flex">
            <button onClick={handlerCounterDown}>- </button>
            <p>{counter}</p>
            <button onClick={handlerCounterUp}> +</button>
        </div>
    )
}
export default ItemCount;