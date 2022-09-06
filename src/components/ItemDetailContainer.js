import React, {useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'

const item = {
    'id': 1,
    'itemName': 'Cookies de avena',
    'itemPrice': 200
}

const ItemDetailContainer = () =>{
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(item)
            }, 2000)
        })
        getData.then(res => setData(res))
    }, [])


    return(
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer