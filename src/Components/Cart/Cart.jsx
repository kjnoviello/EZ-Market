import { useContext, useState } from "react";
import { CardContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fade} from "react-awesome-reveal";
import CartEmpty from "./CartEmpty/CartEmpty";
import CartImage from "./CartImage/CartImage";
import "./Cart.css";

const Cart = () => {
  const { cardList, deleteProduct, totalCount, totalPrice, clearCart, handleOrders } = useContext(CardContext);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  if (cardList.length === 0) {
    return  <CartEmpty />
  } else {
    return (
      <div className="container-lg row bg-white containerCart">
        <div className="product-list">
          <Fade cascade triggerOnce="true">
          <ul>
            <h2 className="cartText">Lista de compra</h2>
            <li  id="productID">
              <div className="productIDContainer">
                <div className="div4  div4Text">
                  <h6>Productos</h6>
                </div>
                <div className="div4">
                  <div className="div5 divText">
                    <h6>Cantidad</h6>
                  </div>
                  <div className="div5 divText">
                    <h6>Precio</h6>
                  </div>
                  <div className="div5 divText">
                    <h6><strong></strong></h6>
                  </div>
                  <div className="div5 divText">
                    <h6><strong></strong></h6>
                  </div>
                </div>
              </div>
            </li>
            {cardList.map((product) => (
              <>
              <li id="productID" key={product.id}>
                <div className="productIDContainer">
                  <div className="div4">
                    <div>
                      <CartImage imagen={product.imagen}></CartImage>
                    </div>
                    <div>
                      <p><strong>{product.titulo}</strong></p>
                      <p>{product.categoria}</p>
                    </div>
                  </div>
                  <div className="div4">
                    <div className="div5">
                      <p>{product.count}</p>
                    </div>
                    <div className="div5">
                      <p>$ {product.precio}</p>
                    </div>
                    <div className="div5">
                      <Button variant="secondary" onClick={() => handleShowDetails(product)}>
                        Ver Detalles
                      </Button>
                      <Button variant="dark" onClick={()=>{deleteProduct(product.id); handleCloseDetails()}}>X</Button>
                    </div>
                  </div>
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
                  <Button variant="success" onClick={handleCloseDetails}>
                  Cerrar Detalles
                  </Button>
                </Fade>
              </>
            )}
          </div>
          <li  id="productID">
              <div className="productIDContainer">
                <div className="totalBtn">
                  <Button variant="outline-success" onClick={clearCart}>Vaciar carrito</Button>
                  <Link to="/Productos"><Button variant="outline-success">Seguir comprando</Button></Link>
                </div>
                <div className="total">
                  <p><strong>Cantidad total: </strong>{totalCount()}u.</p>
                  <p><strong>Subtotal: </strong>${totalPrice()}</p>
                  <p><strong>Gastos de envio: </strong><i><s>$ 1200.00</s></i></p>
                  <hr />
                  <h3><strong>Total: </strong>${totalPrice()}</h3>
                  <hr />
                  <Button variant="success" onClick={handleOrders}>Realizar orden</Button>

                </div>
              </div>
            </li>
        </div>
      );
  }
}


export default Cart;

