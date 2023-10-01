/* eslint-disable react/prop-types */
import { Fade } from "react-awesome-reveal"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

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
					<div className="detailBtn">
						<Link to={`/Detalle/${selectedProduct.id} `}>
							<Button variant="secondary" onClick={handleCloseDetails}>
							<i className="ri-search-line icon">Ver artículo</i>
							</Button>
						</Link>
						<Button variant="secondary" onClick={handleCloseDetails}>
							<i className="ri-close-line icon">Cerrar</i>
						</Button>
					</div>
				</>
			)}
		</Fade>
		</>
	)
}

export default CartDetail