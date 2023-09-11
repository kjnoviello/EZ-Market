// import Filter from "../Filter/Filter"
import Item from "../Item/Item"


const ItemList = ({products}) => {


  return (  
        <>
            {products.map(product=><Item key={product.id} products={products} titulo={product.titulo} autor={product.autor} imagen={product.imagen} precio={product.precio} stock={product.stock} descripcion={product.descripcion} id={product.id}></Item>)}
        </>
  )
}

export default ItemList