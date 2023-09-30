import { useContext } from "react";
import { Fade } from "react-awesome-reveal"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CardContext } from "../../context/CartContext";

const OrderConfirm = () => {

    const { id, clearCart, dataForm } = useContext(CardContext);
    console.log(id);
    console.log(dataForm);

    return (
        <div className="container-lg row bg-white border">
            <Fade>
                <br />
                <div className="imgCarritoVacio shake-horizontal">
                    <img src="compraExitosa.jpg" alt="compra_exitosa" />
                </div>
                <br />
                <h1>Tu compra se generó correctamente!</h1>
                <h2>Tu número de orden es: {id}</h2>
                <br />
                <div>
                    <span>Recibirás un mail a <strong>{dataForm.email}</strong> con los detalles de la compra. Muchas gracias por elegirnos!</span>
                </div>
                <br />
                <hr />
                <div>
                    <Link to="/Productos">
                        <Button variant="success" className="btnVolverCarrito" onClick={clearCart}>Volver a la tienda
                        </Button>
                    </Link>
                    <Link to="/Categoria/novedad">
                        <Button variant="success" className="btnVolverCarrito">Ir a novedades</Button>
                    </Link>
                </div>  
            </Fade>
        </div>
    )
}

export default OrderConfirm