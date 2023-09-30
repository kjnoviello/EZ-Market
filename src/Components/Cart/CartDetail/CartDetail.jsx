/* eslint-disable react/prop-types */
import { Fade } from "react-awesome-reveal"
import { Button } from "react-bootstrap"

const CartDetail = ({ handleCloseDetails, selectedProduct }) => {
	
	return (
		<>
		<Fade>
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
					<Button variant="secondary" onClick={handleCloseDetails}>
						<i className="ri-close-line"></i>
					</Button>
				</>
			)}
		</Fade>
		</>
	)
}

export default CartDetail