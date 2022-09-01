import React, { useState, useEffect } from "react";
import Item from './Item';

import ItemList from './ItemList';


const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const response = await fetch(
            "https://api.jsonbin.io/v3/b/6310e8f35c146d63ca89a884",
            {
                headers: {
                    "X-Master-Key":
                        "$2b$10$NIzH8KUS7.zPD94h96DpIevwUPLU6IyfJ.FBJlfIR1zHJAUbZF/hW",
                    "X-BIN-META": false
                },
            }
        );
        const data = await response.json();
        return data;
    }
    useEffect(() => {
        fetchItems().then((data) => setItems(data));
    }, []);

    return(
        <div className='flex justify-center'>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer;