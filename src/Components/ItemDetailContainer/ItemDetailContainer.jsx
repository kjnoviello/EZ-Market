import { useEffect, useState } from "react"
import { getFetch } from '../../services/api.js';
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail"
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading"
import { Fade, Zoom } from "react-awesome-reveal";

const ItemDetailContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {pid} = useParams()

  useEffect(()=>{
    getFetch()
    .then(products => setProducts(products[pid -1]))
    .catch(err => console.log("Error en la carga de datos", err))
    .finally(()=>{console.log("este es el finally de useEffect"),setLoading(false)})
  },[pid])


    //funcion que nos da firebase para traer un doc de firebase
  // useEffect(()=>{
  //   const db = getFirestore()
  // })

  return (
    <>
      {loading ? <SpinnerLoading /> : <Fade><ItemDetail titulo={products.titulo} autor={products.autor} descripcion={products.descripcion} stock={products.stock} categoria={products.categoria} imagen={products.imagen} precio={products.precio} id={products.id}></ItemDetail></Fade>} 
      {/* {loading ? <SpinnerLoading /> : <ItemDetail titulo={products.titulo} autor={products.autor} descripcion={products.descripcion} stock={products.stock} categoria={products.categoria} imagen={products.imagen} precio={products.precio} id={products.id}></ItemDetail>}  */}
    </>
  )
}

export default ItemDetailContainer



