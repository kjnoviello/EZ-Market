import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css';

function Item(datos) {

	return (
		<Card style={{ width: '18rem' }} className='cardStyle'>
			<img className='img' src={datos.imagen} alt='Foto de portada'/>
			<Card.Body className='cardBody'>
			<Card.Title>{datos.titulo}</Card.Title>
			<Card.Text>
				{datos.autor}
			</Card.Text>
			<Card.Title>
				${datos.precio.toFixed(2)}
			</Card.Title>
			<Link to={`/Detalle/${datos.id}`}>
				<Button variant="success"><i className="ri-information-line icon"></i>Más info</Button>
			</Link>
			</Card.Body>
		</Card>
	);
}

export default Item;