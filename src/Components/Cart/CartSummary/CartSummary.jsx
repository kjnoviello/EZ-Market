import { useContext } from "react";
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { CardContext } from "../../../context/CartContext";

const CartSummary = () => {

    const { totalCount, totalPrice, clearCart, handleOrders } = useContext(CardContext);

    return (
        <li id="productID">
        <div className="productIDContainer">
            <div className="totalBtn">
                <Link to="/Productos">
                    <Button variant="outline-success"><i className="ri-shopping-bag-line icon"></i>Seguir comprando</Button>
                </Link>
                <Button variant="outline-success" onClick={clearCart}>
                    <i className="ri-delete-bin-7-line icon"></i>Vaciar carrito</Button>
            </div>
            <div className="total">
                <p><strong>Cantidad total: </strong>{totalCount()}u.</p>
                <p><strong>Subtotal: </strong>${totalPrice()}</p>
                <p><strong>Gastos de envío: </strong><i><s>$ 1200.00</s></i></p>
                <hr />
                <h3><strong>Total: </strong>${totalPrice()}</h3>
                <hr />
                <Button variant="success" onClick={handleOrders}><i className="ri-checkbox-circle-line icon"></i>Realizar orden</Button>
                
            </div>
            {/* <p>
                <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Button with data-bs-target
                </button>
            </p>
            <div className="collapse" id="collapseExample">
                <form></form>
                <div className="card card-body">
            Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
                </div>
            </div> */}
        </div>
        </li>
    )
}

export default CartSummary