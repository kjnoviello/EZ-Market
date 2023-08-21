import ItemListContainer from '../ItemListContainer/ItemListContainer.jsx'
import '../Mark/Mark.css'
import data from '../data.json';

const Mark = () => {

  return (
    <div className='main'>
        <div className='mainDivText'>
            <h3>Most Popular Right Now</h3>
        </div>
        <div className='mainDivDiv'>
            <ItemListContainer imagen={data.card1.imagen}  titulo={data.card1.titulo} autor={data.card1.autor} precio={data.card1.precio}></ItemListContainer>
            <ItemListContainer imagen={data.card2.imagen}  titulo={data.card2.titulo} autor={data.card2.autor} precio={data.card2.precio}></ItemListContainer>
            <ItemListContainer imagen={data.card3.imagen}  titulo={data.card3.titulo} autor={data.card3.autor} precio={data.card3.precio}></ItemListContainer>
            <ItemListContainer imagen={data.card4.imagen}  titulo={data.card4.titulo} autor={data.card4.autor} precio={data.card4.precio}></ItemListContainer>
            <ItemListContainer imagen={data.card5.imagen}  titulo={data.card5.titulo} autor={data.card5.autor} precio={data.card5.precio}></ItemListContainer>
            <ItemListContainer imagen={data.card6.imagen}  titulo={data.card6.titulo} autor={data.card6.autor} precio={data.card6.precio}></ItemListContainer>
        </div>
    </div>
  )
}

export default Mark