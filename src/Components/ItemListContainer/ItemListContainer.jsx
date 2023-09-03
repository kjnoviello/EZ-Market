import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList.jsx'
// import data from '../data.json';
import { dFetch } from '../data.js';
import './ItemListContainer.css'
import SpinnerLoading from '../SpinnerLoading/SpinnerLoading.jsx';

const ItemListContainer = () => {

const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)

useEffect(()=>{
  dFetch()
  .then(respuesta => setProducts(respuesta))
  .catch(err => console.log(err))
  .finally(()=>{setLoading(!loading)})
}, [])



  return (
    <main className='main'>
      <div className='mainDiv'>
          <div className='mainDivText'>
              <h3>Las últimas novedades!</h3>
          </div>
          <div className='mainDivContainer'>
            {loading ? <SpinnerLoading /> : products.map(product=><ItemList key={product.id} titulo={product.titulo} autor={product.autor} imagen={product.imagen} precio={product.precio} stock={product.stock} descripcion={product.descripcion}></ItemList>)} 
          </div>
      </div>
    </main>
  )
}

export default ItemListContainer