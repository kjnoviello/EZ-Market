// import { useContext, useState } from "react";
// import { CardContext } from "../../context/CartContext";
// import { Button } from "react-bootstrap";
// import "./Cart.css";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const { cardList } = useContext(CardContext);
//   console.log("esto es cartList", cardList);

//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleShowDetails = (product) => {
//     setSelectedProduct(product);
//   };

//   const handleCloseDetails = () => {
//     setSelectedProduct(null);
//   };


//   if (cardList.length === 0) {
//     return  <div className="container-lg row bg-white containerDetail">
//               <br />
//               <h2>Tu carrito está vacio</h2>
//               <div className="imgCarritoVacio shake-horizontal">
//                 <img src="carritoVacio.png" alt="carrito_vacio" />
//               </div>
//               <hr />
//               <div>
//                 <Link to="/Productos">
//                   <Button variant="success" className="btnVolverCarrito">Volver a tienda</Button>
//                 </Link>
//                 <Link to="/Productos/novedad">
//                   <Button variant="success" className="btnVolverCarrito">Ir a novedades</Button>
//                 </Link>
//               </div>
//             </div>
//   } else {
//     return (
//       <div className="container-lg row bg-white containerDetail">
//         <div className="product-list">
//           <ul>
//             {cardList.map((product) => (
//               <li key={product.id}>
//                 <span>{product.titulo}</span>
//                 <span>{product.count}</span>
//                 <span>{product.precio}</span>
//                 <span>
//                   <Button variant="success" onClick={() => handleShowDetails(product)}>
//                     Ver Detalles
//                   </Button>
//                 </span>
//                 <span>
//                   <Button variant="dark">X</Button>
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="product-details">
//           {selectedProduct && (
//             <>
//               <h2>Detalles del Producto</h2>
//                 <div className="detalleDiv">
//                   <div className="imgDiv ">
//                       <img className='img' src={selectedProduct.imagen} alt="" />
//                   </div>
//                   <div>
//                     <p><strong>Titulo:{selectedProduct.titulo} </strong></p>
//                     <p><strong>Autor: {selectedProduct.autor}</strong></p>
//                     <p><em>Descripción: {selectedProduct.descripcion}</em></p>
//                   </div>
//                 </div>
              
//               <Button variant="success" onClick={handleCloseDetails}>
//                 Cerrar Detalles
//               </Button>
//             </>
//           )}
//         </div>
//       </div>
//     );
//   }
// }


// export default Cart;



import { useContext, useState } from "react";
import { CardContext } from "../../context/CartContext";
import { Button } from "react-bootstrap";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cardList } = useContext(CardContext);
  console.log("esto es cartList", cardList);

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
                <Link to="/Productos/novedad">
                  <Button variant="success" className="btnVolverCarrito">Ir a novedades</Button>
                </Link>
              </div>
            </div>
  } else {
    return (
      <div className="container-lg row bg-white containerDetail">
        <div className="product-list">
          <ul>
            <li>
              <span>Titulos</span>
              <span>Cantidad</span>
              <span>Precio</span>
              <span></span>
              <span></span>
            </li>
            {cardList.map((product) => (
              <>
              <li key={product.id}>
                <span>{product.titulo}</span>
                <span>{product.count}</span>
                <span>{product.precio}</span>
                <span>
                  <Button variant="success" onClick={() => handleShowDetails(product)}>
                    Ver Detalles
                  </Button>
                </span>
                <span>
                  <Button variant="dark">X</Button>
                </span>
              </li>
              </>
            ))}
          </ul>
        </div>
        <div className="product-details">
          {selectedProduct && (
            <>
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
            </>
          )}
        </div>
      </div>
    );
  }
}


export default Cart;