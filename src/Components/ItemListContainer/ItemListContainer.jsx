import { useEffect, useState } from 'react';
import { getFetch } from '../../services/api.js';
import SpinnerLoading from '../SpinnerLoading/SpinnerLoading.jsx';
import ItemList from '../ItemList/ItemList.jsx'
// import './ItemListContainer.css'

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
      getFetch()
      .then(products => setProducts(products))
      .catch(err => console.log("Error en la carga de datos", err))
      .finally(()=>{console.log("este es el finally de useEffect"), setLoading(false)})
  },[])

  return (
    <>
      {loading ? <SpinnerLoading /> : products.map(product=><ItemList key={product.id} titulo={product.titulo} autor={product.autor} imagen={product.imagen} precio={product.precio} stock={product.stock} descripcion={product.descripcion}></ItemList>)} 
    </>
)
}

export default ItemListContainer