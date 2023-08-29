import ItemList from '../ItemList/ItemList.jsx'
import './Main.css'
import data from '../data.json';

const Main = () => {

//! fetch

const getData = fetch('/src/Components/data.json')
.then(response=> response.json())
.then(response=> console.log(response.card1.autor))
console.log(getData);

//! fetch



  return (
    <main className='main'>
      <div className='mainDiv'>
          <div className='mainDivText'>
              <h3>Las últimas novedades!</h3>
          </div>
          <div className='mainDivContainer'>
              <ItemList imagen={data.card1.imagen}  titulo={data.card1.titulo} autor={data.card1.autor} precio={data.card1.precio}></ItemList>
              <ItemList imagen={data.card2.imagen}  titulo={data.card2.titulo} autor={data.card2.autor} precio={data.card2.precio}></ItemList>
              <ItemList imagen={data.card3.imagen}  titulo={data.card3.titulo} autor={data.card3.autor} precio={data.card3.precio}></ItemList>
              <ItemList imagen={data.card4.imagen}  titulo={data.card4.titulo} autor={data.card4.autor} precio={data.card4.precio}></ItemList>
              <ItemList imagen={data.card5.imagen}  titulo={data.card5.titulo} autor={data.card5.autor} precio={data.card5.precio}></ItemList>
              <ItemList imagen={data.card6.imagen}  titulo={data.card6.titulo} autor={data.card6.autor} precio={data.card6.precio}></ItemList>
          </div>
      </div>
    </main>
  )
}

export default Main