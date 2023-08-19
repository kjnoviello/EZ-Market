import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../ItemListContainer/ItemListContainer.css'

function ItemListContainer(param) {
	

	return (
		<Card style={{ width: '18rem' }} className='cardStyle'>
			<Card.Img variant="top" src="/public/upscaled.jpg" />
			<Card.Body>
			<Card.Title>{param.saludo}</Card.Title>
			<Card.Text>
				{param.cuerpo}
			</Card.Text>
			<Button variant="primary">Detalles</Button>
			</Card.Body>
		</Card>
	);
}

export default ItemListContainer;