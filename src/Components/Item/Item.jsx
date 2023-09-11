import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import ItemModal from '../ItemModal/ItemModal';
// import { useState } from 'react';
import './Item.css';
// import ItemDetail from '../ItemDetail/ItemDetail';

function Item(datos) {
	// const [modalShow, setModalShow] = useState(false);

	return (
		<Card style={{ width: '18rem' }} className='cardStyle'>
			<img className='img' src={datos.imagen} alt='Foto de portada'/>
			<Card.Body>
			<Card.Title>{datos.titulo}</Card.Title>
			<Card.Text>
				{datos.autor}
			</Card.Text>
			<Card.Title>
				{datos.precio}
			</Card.Title>
			<Link to={`/Detalle/${datos.id}`}>
				<Button variant="success">Más info</Button>
			</Link>
			{/* <Link to="/Detalle">
				<Button variant="success" onClick={() => setModalShow(true)}>Más info</Button>
			</Link> */}
			{/* <ItemModal titulo={datos.titulo} autor={datos.autor} descripcion={datos.descripcion} show={modalShow} stock={datos.stock} onHide={() => setModalShow(false)}></ItemModal> */}
			</Card.Body>
		</Card>
	);
}

export default Item;