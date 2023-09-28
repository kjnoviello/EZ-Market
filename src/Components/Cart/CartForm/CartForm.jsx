import { CardContext } from '../../../context/CartContext'; 
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function CartForm() {

  const { handleOrders } = useContext(CardContext);

  const [validated, setValidated] = useState(false);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        setValidated(true);
    } else {
       await handleOrders()
        event.preventDefault();
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className="productIDContainer">
        <Row className='rowForm'>
            <Form.Group as={Col} md="5" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    defaultValue=""
                />
                <Form.Control.Feedback type="invalid">
                    Ingrese un nombre válido.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="validationCustom03">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                    required
                    type="tel"
                    placeholder="Teléfono"
                    defaultValue=""
                    pattern="[0-9]{0-10}"
                />
                <Form.Control.Feedback type="invalid">
                    Ingrese un número de teléfono válido.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="10" controlId="validationCustom02">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    required
                    type="email"
                    placeholder="Email"
                    defaultValue=""
                />
                <Form.Control.Feedback type="invalid">
                    Ingrese un email válido.
                </Form.Control.Feedback>
            </Form.Group>
            {/* <Link to="/OrderConfirm"> */}
                <Button variant="success" type="submit" >
                    <i className="ri-checkbox-circle-line icon"></i>Confirmar compra
                </Button>
            {/* </Link> */}
        </Row>
    </Form>
  );
}

export default CartForm;
