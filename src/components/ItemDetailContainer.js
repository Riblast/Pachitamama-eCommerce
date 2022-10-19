import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import { ClipLoader } from 'react-spinners'

const ItemDetailContainer = () =>{
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const {id} = useParams()
    useEffect(() => {
        setLoading(true)
        const querydb = getFirestore()
        const queryDoc = doc(querydb, 'productos', id)
        getDoc(queryDoc)
            .then(res => {
                setData({id: res.id, ...res.data()})
                setLoading(false)
            })
    }, [id])

    if(loading) return (
        <div className='min-h-screen min-w-full flex justify-center items-center'>
            <div>
                <ClipLoader />
            </div>
        </div>   
    )

    return(
        <ItemDetail data={data}/>
    )
}

export default ItemDetailContainer