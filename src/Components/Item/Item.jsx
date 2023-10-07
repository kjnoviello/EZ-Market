import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css';
import Atropos from 'atropos/react';

function Item(datos) {

	return (
		<Atropos  activeOffset={40} shadowScale={1.05}>
			<Card style={{ width: '18rem' }} className='cardStyle' data-atropos-offset="1">
				<Link to={`/Detalle/${datos.id}`}>
					<img className='img' src={datos.imagen} alt='Foto de portada' data-atropos-offset="-4"/>
				</Link>
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
		</Atropos>
	);
}

export default Item;