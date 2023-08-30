import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';
import ItemModal from '../ItemModal/ItemModal';
import './ItemList.css';
import data from '../data.json';

function ItemList(greeting) {
	const [modalShow, setModalShow] = React.useState(false);
	

	return (
		<Card style={{ width: '18rem' }} className='cardStyle'>
			<img className='img' src={greeting.imagen} />
			<Card.Body>
			<Card.Title>{greeting.titulo}</Card.Title>
			<Card.Text>
				{greeting.autor}
			</Card.Text>
			<Card.Title>
				{greeting.precio}
			</Card.Title>
			<Button variant="success" onClick={() => setModalShow(true)}>Más info</Button>
			<ItemModal titulo={data.card1.titulo} autor={data.card1.autor} descripcion={data.card1.descripcion} show={modalShow} onHide={() => setModalShow(false)}></ItemModal>
			</Card.Body>
		</Card>
	);
}

export default ItemList;