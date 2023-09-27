import { Fade } from 'react-awesome-reveal';
import PropTypes from 'prop-types'
import Item from "../Item/Item"

const ItemList = ({products}) => {
  
  ItemList.propTypes = {
    products: PropTypes.array.isRequired,
  };

  return (  
        <>
            {products.map(product=><Fade key={product.id}><Item key={product.id} products={products} titulo={product.titulo} autor={product.autor} imagen={product.imagen} precio={product.precio} stock={product.stock} descripcion={product.descripcion} id={product.id}></Item></Fade>)}
        </>
  )
}

export default ItemList