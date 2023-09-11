import { useEffect, useState } from "react"
import { getFetch } from '../../services/api.js';
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail"
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading"

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {pid} = useParams()
    console.log(pid);

  useEffect(()=>{
    getFetch()
    .then(products => setProducts(products[pid -1]))
    .catch(err => console.log("Error en la carga de datos", err))
    .finally(()=>{console.log("este es el finally de useEffect"),setLoading(false)})
},[pid])


  return (
    <>
      {loading ? <SpinnerLoading /> : <ItemDetail titulo={products.titulo} autor={products.autor} descripcion={products.descripcion} stock={products.stock} categoria={products.categoria} imagen={products.imagen}></ItemDetail>} 
    </>
  )
}

export default ItemDetailContainer