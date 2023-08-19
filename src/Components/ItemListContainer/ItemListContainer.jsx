import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../ItemListContainer/ItemListContainer.css'

function ItemListContainer(greeting) {
	

	return (
		<Card style={{ width: '18rem' }} className='cardStyle'>
			<Card.Img variant="top" src="/public/upscaled.jpg" />
			<Card.Body>
			<Card.Title>{greeting.saludo}</Card.Title>
			<Card.Text>
				{greeting.cuerpo}
			</Card.Text>
			<Button variant="primary">Detalles</Button>
			</Card.Body>
		</Card>
	);
}

export default ItemListContainer;