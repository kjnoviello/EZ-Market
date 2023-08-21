import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../ItemListContainer/ItemListContainer.css'

function ItemListContainer(greeting) {
	

	return (
		<Card style={{ width: '18rem' }} className='cardStyle'>
			<img src={greeting.imagen} />
			<Card.Body>
			<Card.Title>{greeting.titulo}</Card.Title>
			<Card.Text>
				{greeting.autor}
			</Card.Text>
			<Card.Title>
				{greeting.precio}
			</Card.Title>
			<Button variant="success">Detalles</Button>
			</Card.Body>
		</Card>
	);
}

export default ItemListContainer;