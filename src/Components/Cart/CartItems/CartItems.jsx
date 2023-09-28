/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { CardContext } from "../../../context/CartContext";
import CartImage from "../CartImage/CartImage";
import ('../Cart.css')

const CartItems = ( {handleShowDetails, handleCloseDetails} ) => {

	const { cardList, deleteProduct } = useContext(CardContext)

	return (
		<>
			{cardList.map((product) => (
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
									<i className="ri-eye-line"></i>
								</Button>
								<Button variant="dark" onClick={()=>{deleteProduct(product.id); handleCloseDetails()}}>
									<i className="ri-delete-back-2-line"></i>
								</Button>
							</div>
						</div>
					</div>
				</li>
			))}
		</>
	)
}

export default CartItems