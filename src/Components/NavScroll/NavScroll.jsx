import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import Cardwidget from '../CardWidget/Cardwidget';
import { Link, NavLink } from 'react-router-dom';
import './NavScroll.css'
import Cardwidget from '../CardWidget/Cardwidget';

function NavScroll() {
  
  return (
    <>
      <Navbar expand="xxl" className="sticky-top headerBar">
        <Container fluid>
          <img src="/public/logo_xs_small.jpg" alt="logo" className='logo' />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: '200px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">EZ Market</Nav.Link>
              <Nav.Link as={Link} to="/QuienesSomos">Quienes somos</Nav.Link>
              <NavDropdown title="Productos" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Nav.Link as={Link} to="/Productos">Novelas</Nav.Link>
                </NavDropdown.Item>
                  <NavDropdown.Item>
                  <Nav.Link as={Link} to="/Productos">Clasicos</Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Nav.Link as={Link} to="/Productos">Novedades</Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link to="/QuienesSomos">Contacto</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Cardwidget />
              <Button variant="outline-success">LogIn</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr className='hrCustom'></hr>
    </>
  );
}

export default NavScroll;