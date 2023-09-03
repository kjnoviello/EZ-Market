import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList.jsx'
// import { dFetch } from '../data.js';
import './ItemListContainer.css'
import SpinnerLoading from '../SpinnerLoading/SpinnerLoading.jsx';

const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const getFetch = async ()=>{  
      try{
          const url = 'https://64ee10061f87218271424186.mockapi.io/data'
          const bookJson = await fetch(url)
          const book = await bookJson.json()

          // setProducts(products)
          return book
      }
      catch (err) {
          console.log(err);
      }
  }

  useEffect(()=>{
      getFetch()
      .then(products => setProducts(products))
      .catch(err => err)
      .finally(()=>{console.log("este es el finally de api2"), setLoading(!loading)})
  },[])

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