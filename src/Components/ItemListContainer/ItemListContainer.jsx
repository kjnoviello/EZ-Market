import { useEffect, useState } from 'react';
import { getFetch } from '../../services/api.js';
import { useParams } from 'react-router-dom';
import SpinnerLoading from '../SpinnerLoading/SpinnerLoading.jsx';
import ItemList from '../ItemList/ItemList.jsx';
// import Item from '../Item/Item.jsx'
// import './ItemListContainer.css'

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { cid } = useParams()
  console.log(cid);
  
  useEffect(()=>{

    if (cid) {
      getFetch()
      .then(products => setProducts(products.filter(product=> cid == product.categoria)))
      .catch(err => console.log("Error en la carga de datos", err))
      .finally(()=>{console.log("este es el finally de useEffect"), setLoading(false)})
    } else {
      getFetch()
      .then(products => setProducts(products))
      .catch(err => console.log("Error en la carga de datos", err))
      .finally(()=>{console.log("este es el finally de useEffect"), setLoading(false)})
      
    }
  },[cid])
  
  return (
    <>
      {loading ? <SpinnerLoading /> : <ItemList products={products}/>} 
    </>
  )
}

export default ItemListContainer






//! copia de lo de arriba en ORIGINAL


// import { useEffect, useState } from 'react';
// import { getFetch } from '../../services/api.js';
// import SpinnerLoading from '../SpinnerLoading/SpinnerLoading.jsx';
// // import Item from '../Item/Item.jsx'
// import ItemList from '../ItemList/ItemList.jsx';
// // import './ItemListContainer.css'

// const ItemListContainer = () => {

//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)
  

//   useEffect(()=>{
//       getFetch()
//       .then(products => setProducts(products))
//       .catch(err => console.log("Error en la carga de datos", err))
//       .finally(()=>{console.log("este es el finally de useEffect"), setLoading(false)})
//   },[])

//   return (
//     <>
//       {loading ? <SpinnerLoading /> : <ItemList products={products}/>} 
//     </>
// )
// }

// export default ItemListContainer