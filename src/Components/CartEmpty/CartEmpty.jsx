import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ('./CartEmpty.css')

const CartEmpty = () => {
  return (
    <div className="container-lg row bg-white containerDetail">
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
  )
}

export default CartEmpty