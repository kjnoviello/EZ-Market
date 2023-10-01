import { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CardContext } from "../../context/CartContext";
import SpinnerOrder from "../SpinnerOrder/SpinnerOrder";

const OrderConfirm = () => {

    const { id, clearCart, dataForm } = useContext(CardContext);
    const [loadingOrder, setLoadingOrder] = useState(true)

    useEffect(()=>{
      setTimeout(()=>{
          setLoadingOrder(false)
      }, 3000)
    })

    return (
        <>
        {loadingOrder ? <SpinnerOrder /> : <> <div className="container-lg row bg-white border">
            <Fade>
                <br />
                <div className="imgCarritoVacio shake-horizontal">
                    <img src="compraExitosa.jpg" alt="compra_exitosa" />
                </div>
                <br />
                <h1>Tu compra se generó correctamente!</h1>
                <h2>Tu número de orden es: <strong>{id}</strong></h2>
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
                </div>  
            </Fade>
        </div> 
        </>}
        </>
    )
}

export default OrderConfirm