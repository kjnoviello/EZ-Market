import { Fade } from 'react-awesome-reveal';
import PropTypes from 'prop-types'
import Item from "../Item/Item"
import Filter from '../Filter/Filter';
import { Container } from 'react-bootstrap';
import ('./ItemList.css')

const handleProductFilter = ({filtered, handleFilteredChange, products}) => (
  <>
    <Container>
      <h2 id='searchTitle'>Buscador</h2>
    <input id='searchInput' placeholder="TITULO DEL LIBRO" type="text" value={filtered} onChange={handleFilteredChange} />
    </Container>
    {
      filtered == "" ? 
        products.map(product=><Fade key={product.id}><Item key={product.id} products={products} titulo={product.titulo} autor={product.autor} imagen={product.imagen} precio={product.precio} stock={product.stock} descripcion={product.descripcion} id={product.id} /></Fade> )
      :
        products.filter(product => product.titulo.toUpperCase().includes(filtered.toUpperCase())).map(product=><Fade key={product.id}><Item key={product.id} products={products} titulo={product.titulo} autor={product.autor} imagen={product.imagen} precio={product.precio} stock={product.stock} descripcion={product.descripcion} id={product.id} /></Fade>)
    }
    </>
)

const ItemList = ({products}) => {
  ItemList.propTypes = {
    products: PropTypes.array.isRequired,
  };

  return (  
        <>
          <Filter products={products}>
            {handleProductFilter}
          </Filter>
        </>
  )
}

export default ItemList