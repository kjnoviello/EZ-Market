import { Fade } from 'react-awesome-reveal'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ('./CartEmpty.css')

const CartEmpty = () => {
  return (
    <div className="container-lg row bg-white border">
        <Fade>
            <br />
            <div className="shake-horizontal">
                <img src="carritoVacio.png" alt="carrito_vacio" />
            </div>
            <h2>Tu carrito está vacio</h2>
            <hr />
            <div>
                <Link to="/Productos">
                    <Button variant="success" className="btnVolverCarrito">Volver a la tienda</Button>
                </Link>
                <Link to="/Categoria/novedad">
                    <Button variant="success" className="btnVolverCarrito">Ir a novedades</Button>
                </Link>
            </div>  
        </Fade>
    </div>
  )
}

export default CartEmpty