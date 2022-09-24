import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { Link, useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const { categoriaId } = useParams()
    useEffect(() => {
        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'productos')
        
        if(categoriaId){
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => setItems(res.docs.map(product => ( {id: product.id, ...product.data() }))))
        }
        else{
            getDocs(queryCollection)
                .then(res => setItems(res.docs.map(product => ( {id: product.id, ...product.data() }))))
        }    
    }, [categoriaId])
    return(
        <div className='min-h-screen min-w-full'>
            <div className='flex justify-center'>
                <Link className='mx-2 mt-2 p-2 border rounded-md bg-blue-500 h-10' to="/menu/dulce">Dulces</Link>
                <Link className='mx-2 mt-2 p-2 border rounded-md bg-blue-500 h-10' to="/menu/salado">Salados</Link>
            </div>
            <div className='flex justify-center'>
                <ItemList items={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer