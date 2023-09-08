import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getFetch } from '../../services/api.js';
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading"

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getFetch()
    .then(products => setProducts(products[1]))
    .catch(err => console.log("Error en la carga de datos", err))
    .finally(()=>{console.log("este es el finally de useEffect"),setLoading(false)})
},[])


  return (
    <>
      {loading ? <SpinnerLoading /> : <ItemDetail titulo={products.titulo} autor={products.autor} descripcion={products.descripcion} stock={products.stock} categoria={products.categoria}></ItemDetail>} 
    </>
  )
}

export default ItemDetailContainer