import ItemList from '../ItemList/ItemList.jsx'
import './ItemListContainer.css'
import data from '../data.json';
import { useEffect } from 'react';

const ItemListContainer = () => {

useEffect(()=>{
  // const getData = fetch('/src/Components/data.json')
  fetch('/src/Components/data.json')
  .then(response=> response.json())
  .then(response=> console.log(response[0]))
  // console.log(`ESTO ES GET DATA ${getData}`);
}, [])

  return (
    <main className='main'>
      <div className='mainDiv'>
          <div className='mainDivText'>
              <h3>Las últimas novedades!</h3>
          </div>
          <div className='mainDivContainer'>
              <ItemList imagen={data[0].imagen} titulo={data[0].titulo} autor={data[0].autor} precio={data[0].precio} descripcion={data[0].descripcion} stock={data[0].stock}></ItemList>
              <ItemList imagen={data[1].imagen} titulo={data[1].titulo} autor={data[1].autor} precio={data[1].precio} descripcion={data[1].descripcion} stock={data[1].stock}></ItemList>
              <ItemList imagen={data[2].imagen} titulo={data[2].titulo} autor={data[2].autor} precio={data[2].precio} descripcion={data[2].descripcion} stock={data[2].stock}></ItemList>
              <ItemList imagen={data[3].imagen} titulo={data[3].titulo} autor={data[3].autor} precio={data[3].precio} descripcion={data[3].descripcion} stock={data[3].stock}></ItemList>
              <ItemList imagen={data[4].imagen} titulo={data[4].titulo} autor={data[4].autor} precio={data[4].precio} descripcion={data[4].descripcion} stock={data[4].stock}></ItemList>
              <ItemList imagen={data[5].imagen} titulo={data[5].titulo} autor={data[5].autor} precio={data[5].precio} descripcion={data[5].descripcion} stock={data[5].stock}></ItemList>
          </div>
      </div>
    </main>
  )
}

export default ItemListContainer