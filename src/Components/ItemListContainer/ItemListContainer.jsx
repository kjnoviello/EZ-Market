import { useEffect, useState } from 'react';
import { getFetch } from '../../services/api.js';
import { useParams } from 'react-router-dom';
import SpinnerLoading from '../SpinnerLoading/SpinnerLoading.jsx';
import ItemList from '../ItemList/ItemList.jsx';

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { cid } = useParams()


  useEffect(()=>{

    if (cid && cid !== "novedad") {
      getFetch()
      .then(products => setProducts(products.filter(product=> cid == product.categoria)))
      .catch(err => console.log("Error en la carga de datos", err))
      .finally(()=>{console.log("este es el finally de useEffect"), setLoading(false)})
    } else if (cid === "novedad"){
      getFetch()
      .then(products => setProducts(products.filter(product => product.novedad === true)))
      .catch(err => console.log("Error en la carga de datos", err))
      .finally(()=>{console.log("este es el finally de useEffect"), setLoading(false)});
    } else{
      getFetch()
      .then(products => setProducts(products))
      .catch(err => console.log("Error en la carga de datos", err))
      .finally(()=>{console.log("este es el finally de useEffect"), setLoading(false)}) 
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