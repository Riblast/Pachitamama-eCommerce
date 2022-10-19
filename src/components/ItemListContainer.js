import React, { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { Link, useParams } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(false)

    const { categoriaId } = useParams()
    useEffect(() => {
        setLoading(true)
        const querydb = getFirestore()
        const queryCollection = collection(querydb, 'productos')
        if(categoriaId){
            const queryFilter = query(queryCollection, where('category', '==', categoriaId))
            getDocs(queryFilter)
                .then(res => {
                    setItems(res.docs.map(product => ( {id: product.id, ...product.data() })))
                    setLoading(false)
                })
        }
        else{
            getDocs(queryCollection)
                .then(res => {
                    setItems(res.docs.map(product => ( {id: product.id, ...product.data() })))
                    setLoading(false)
                })
        }    
    }, [categoriaId])

    if(loading) return (
        <div className='min-h-screen min-w-full flex justify-center items-center'>
            <div>
                <ClipLoader />
            </div>
        </div>   
    )

    return(
        <div className='min-h-screen min-w-full'>
            <div className='flex justify-center'>
                <Link className='bg-blue-500 text-white shadow-md rounded py-2 px-4 active:bg-blue-700 m-4' to="/menu/dulce">Dulces</Link>
                <Link className='bg-blue-500 text-white shadow-md rounded py-2 px-4 active:bg-blue-700 m-4' to="/menu/salado">Salados</Link>
            </div>
            <div className='flex justify-center'>
                <ItemList items={items}/>
            </div>
        </div>
    )
}

export default ItemListContainer