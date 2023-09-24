import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { useParams } from 'react-router-dom';
import SpinnerLoading from '../SpinnerLoading/SpinnerLoading.jsx';
import ItemList from '../ItemList/ItemList.jsx';

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { cid } = useParams()


  useEffect(()=>{
    
    const db = getFirestore()
    const queryCollection = collection(db, 'products')

    if (cid && cid !== "novedad") {
      const queryFilter = query(queryCollection, where('categoria', '==', cid))
      getDocs(queryFilter)
      .then(resp => setProducts(resp.docs.map(prod => ({id:prod.id, ...prod.data()}))))
      .catch(err => console.log("Error en la carga de datos", err))
      .finally(()=> setLoading(false))
    } else if(cid === "novedad"){
      const queryFilter = query(queryCollection, where('novedad', '==', true))
      getDocs(queryFilter)
      .then(resp => setProducts(resp.docs.map(prod => ({id:prod.id, ...prod.data()}))))
      .catch(err => console.log("Error en la carga de datos", err))
      .finally(()=> setLoading(false))
    } else {
      getDocs(queryCollection)
      .then(resp => setProducts(resp.docs.map(prod => ({id:prod.id, ...prod.data()}))))
      .catch(err => console.log("Error en la carga de datos", err))
      .finally(()=> setLoading(false))
    }
  },[cid])

  // Esto se llama Clean Up para saber si se desmonta un comp
  useEffect(()=>{
    return()=>{
      console.log('desmontando itemlistcontainer');
    }
  })

  return (
    <>
      {loading ? <SpinnerLoading /> : <ItemList products={products}/>} 
    </>
  )
}

export default ItemListContainer



// const fetchData = async () => {
//   try {
//     const db = getFirestore()
//     const queryCollection = collection(db, 'products')
//     let queryFilter

//     if (cid && cid !== "novedad") {
//       queryFilter = query(queryCollection, where('categoria', '==', cid))
//     } else if (cid === "novedad") {
//       queryFilter = query(queryCollection, where('novedad', '==', true))
//     }

//     const querySnapshot = await getDocs(queryFilter || queryCollection)
//     const productsData = querySnapshot.docs.map(prod => ({ id: prod.id, ...prod.data() }))
    
//     setProducts(productsData)
//     setLoading(false)
//   } catch (error) {
//     console.error("Error en la carga de datos", error)
//     setLoading(false)
//   }
// }

// fetchData()