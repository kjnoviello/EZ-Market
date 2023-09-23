import { useContext, useState } from "react";
import { CardContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";
import "./Cart.css";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-awesome-reveal";

const Cart = () => {
  const { cardList, deleteProduct, totalCount, totalPrice } = useContext(CardContext);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  if (cardList.length === 0) {
    return  <div className="container-lg row bg-white containerDetail">
              <br />
              <h2>Tu carrito está vacio</h2>
              <div className="imgCarritoVacio shake-horizontal">
                <img src="carritoVacio.png" alt="carrito_vacio" />
              </div>
              <hr />
              <div>
                <Link to="/Productos">
                  <Button variant="success" className="btnVolverCarrito">Volver a tienda</Button>
                </Link>
                <Link to="/Categoria/novedad">
                  <Button variant="success" className="btnVolverCarrito">Ir a novedades</Button>
                </Link>
              </div>  
            </div>
  } else {
    return (
      <div className="container-lg row bg-white containerDetail">
        <div className="product-list">
          <Fade cascade triggerOnce="true">
          <ul>
            <li  id="productList">
              <div>
                <h5><strong>Cantidad total: {totalCount()}u.</strong></h5>
              </div>
              <div>
                <h5><strong>Precio total: ${totalPrice()}</strong></h5>
              </div>
            </li>
            {cardList.map((product) => (
              <>
              <li id="productID" key={product.id}>
                <div className="productID-divP">
                  <p><strong>{product.titulo}</strong></p>
                  <p><strong>{product.count}u.</strong></p>
                  <p><strong>$ {product.precio}</strong></p>
                </div>
                <div className="productID-divBtn">
                  <Button variant="success" onClick={() => handleShowDetails(product)}>
                    Ver Detalles
                  </Button>
                  <Button variant="dark" onClick={()=>{deleteProduct(product.id); handleCloseDetails()}}>X</Button>
                </div>
              </li>
              </>
            ))}
          </ul>
          </Fade>
        </div>
          <div className="product-details">
            {selectedProduct && (
              <>
                <Fade triggerOnce="true">
                <Slide direction="down" triggerOnce="true">
                <h2>Detalles del Producto</h2>
                  <div className="detalleDiv">
                    <div className="imgDiv ">
                        <img className='img' src={selectedProduct.imagen} alt="" />
                    </div>
                    <div>
                      <p><strong>Titulo:{selectedProduct.titulo} </strong></p>
                      <p><strong>Autor: {selectedProduct.autor}</strong></p>
                      <p><em>Descripción: {selectedProduct.descripcion}</em></p>
                    </div>
                  </div>
                </Slide>
                <Button variant="success" onClick={handleCloseDetails}>
                  Cerrar Detalles
                </Button>
              </Fade>
              </>
            )}
          </div>
      </div>
    );
  }
}


export default Cart;