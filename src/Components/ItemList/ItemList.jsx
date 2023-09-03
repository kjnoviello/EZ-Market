import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemModal from '../ItemModal/ItemModal';
import { useState } from 'react';
import './ItemList.css';

function ItemList(datos) {
	const [modalShow, setModalShow] = useState(false);

	return (
		<Card style={{ width: '18rem' }} className='cardStyle'>
			<img className='img' src={datos.imagen} />
			<Card.Body>
			<Card.Title>{datos.titulo}</Card.Title>
			<Card.Text>
				{datos.autor}
			</Card.Text>
			<Card.Title>
				{datos.precio}
			</Card.Title>
			<Button variant="success" onClick={() => setModalShow(true)}>Más info</Button>
			<ItemModal titulo={datos.titulo} autor={datos.autor} descripcion={datos.descripcion} show={modalShow} stock={datos.stock} onHide={() => setModalShow(false)}></ItemModal>
			</Card.Body>
		</Card>
	);
}

export default ItemList;