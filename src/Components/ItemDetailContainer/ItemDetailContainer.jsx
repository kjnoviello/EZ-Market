// import { useEffect, useState } from "react"
// import { getFetch } from '../../services/api.js';
// import { useParams } from "react-router-dom";
// import ItemDetail from "../ItemDetail/ItemDetail"
// import SpinnerLoading from "../SpinnerLoading/SpinnerLoading"
// import { Fade } from "react-awesome-reveal";

// const ItemDetailContainer = () => {

//     const [products, setProducts] = useState([])
//     const [loading, setLoading] = useState(true)
//     const {pid} = useParams()

//   useEffect(()=>{
//     getFetch()
//     .then(products => setProducts(products[pid -1]))
//     .catch(err => console.log("Error en la carga de datos", err))
//     .finally(()=>{console.log("este es el finally de useEffect"),setLoading(false)})
//   },[pid])


//     //funcion que nos da firebase para traer un doc de firebase
//   // useEffect(()=>{
//   //   const db = getFirestore()
//   // })

//   return (
//     <>
//       {loading ? <SpinnerLoading /> : <Fade><ItemDetail titulo={products.titulo} autor={products.autor} descripcion={products.descripcion} stock={products.stock} categoria={products.categoria} imagen={products.imagen} precio={products.precio} id={products.id}></ItemDetail></Fade>} 
//       {/* {loading ? <SpinnerLoading /> : <ItemDetail titulo={products.titulo} autor={products.autor} descripcion={products.descripcion} stock={products.stock} categoria={products.categoria} imagen={products.imagen} precio={products.precio} id={products.id}></ItemDetail>}  */}
//     </>
//   )
// }

// export default ItemDetailContainer






import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { Fade } from "react-awesome-reveal";
import ItemDetail from "../ItemDetail/ItemDetail"
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading"

const ItemDetailContainer = () => {

    const [resp, setResp] = useState([])
    const [loading, setLoading] = useState(true)
    const {pid} = useParams()

  useEffect(()=>{
    const db = getFirestore()
    const queryDoc = doc(db, 'products', pid)
    getDoc(queryDoc)
    .then(resp => ({id: resp.id, ...resp.data()}))
    .then(resp=> setResp(resp))
    .catch(err => console.log("Error en la carga de datos", err))
    .finally(()=> {setLoading(false)})
  },[pid])

  return (
    <>
      {loading ? <SpinnerLoading /> : <Fade><ItemDetail titulo={resp.titulo} autor={resp.autor} descripcion={resp.descripcion} stock={resp.stock} categoria={resp.categoria} imagen={resp.imagen} precio={resp.precio} id={resp.id}></ItemDetail></Fade>}
    </>
  )
}

export default ItemDetailContainer




