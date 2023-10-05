import { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CardContext } from "../../context/CartContext";
import SpinnerOrder from "../SpinnerOrder/SpinnerOrder";
import ClipboardJS from "clipboard";
import ('./OrderConfirm.css')

const OrderConfirm = () => {

    const { id, clearCart, dataForm } = useContext(CardContext);
    const [loadingOrder, setLoadingOrder] = useState(true)

    useEffect(()=>{
      setTimeout(()=>{
          setLoadingOrder(false)
      }, 3000)
    })

    const clipboard = new ClipboardJS('.btn')
    clipboard.on('success', function (e) {
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);
    });
  
    return (
        <>
            {loadingOrder ? 
                <SpinnerOrder /> 
            : <> 
                <div className="container-lg row bg-white border">
                    <Fade>
                        <br />
                        <div className="shake-horizontal">
                            <img src="compraExitosa.jpg" alt="compra_exitosa" className="divImg"/>
                        </div>
                        <br />
                        <h1>Tu compra se generó correctamente!</h1>
                        <h2 id="id">Tu número de orden es:</h2>
                        <br /> 
                        <h4><strong id="foo">{id}</strong><Button variant="btn btn-outline-success" className="btn" data-clipboard-target="#foo"><i id="copyIcon" className="ri-file-copy-2-line">Copiar</i></Button></h4>
                        <h5><i>Conservalo para consultar el detalle!!</i></h5>
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