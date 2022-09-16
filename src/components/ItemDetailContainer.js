import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () =>{
    const [data, setData] = useState([])
    const {id} = useParams()
    useEffect(() => {
        const getItems = fetch('https://api.jsonbin.io/v3/b/6310e8f35c146d63ca89a884',{
            headers: {
                'X-Master-Key':
                    '$2b$10$NIzH8KUS7.zPD94h96DpIevwUPLU6IyfJ.FBJlfIR1zHJAUbZF/hW',
                'X-BIN-META': false
            }
        })
            .then((res) => res.json())
            
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(getItems)
            }, 2000)
        })
        getData.then(res => setData(res.find(item => item.id === parseInt(id))))
    }, [])
    return(
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer