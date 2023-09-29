import { useContext, useState } from "react";
import { CardContext } from "../../context/CartContext";
import { Fade } from "react-awesome-reveal";
import CartEmpty from "./CartEmpty/CartEmpty";
import CartItems from "./CartItems/CartItems";
import CartDetail from "./CartDetail/CartDetail";
import CartSummary from "./CartSummary/CartSummary";
import "./Cart.css";

const Cart = () => {
  const { cardList, id } = useContext(CardContext);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShowDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

console.log(id);

  if (cardList.length === 0) {
    return <CartEmpty />;
  } else if(id != '') {
    return <div className="container-lg row bg-white divContact"><h3>orden generada {id}</h3></div>
  } else {
    return (  
      <div className="container-lg row bg-white containerCart">
        <div className="product-list">
          <Fade cascade triggerOnce="true">
            <ul>
              <h2 className="cartText">Orden de compra</h2>
              <li id="productID" key={'list'}>
                <div className="productIDContainer" id="productContainerHeader">
                  <div className="div4 div4Text">
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
              <CartItems handleShowDetails={handleShowDetails} handleCloseDetails={handleCloseDetails}/>
            </ul>
          </Fade>
        </div>
        <div className="product-details">
          <Fade triggerOnce="true">
            <CartDetail handleCloseDetails={handleCloseDetails} selectedProduct={selectedProduct}/>
          </Fade>
        </div>
        <CartSummary />
      </div>
    );
  }
}


export default Cart;