import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cardwidget from '../CardWidget/Cardwidget';
import '../Navbar/Navbar.css'

function NavScrollExample() {
  return (
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
            <Nav.Link href="#action1">EZ Market</Nav.Link>
            <Nav.Link href="#action2">Home</Nav.Link>
            <Nav.Link href="#action3">Quienes somos</Nav.Link>
            <NavDropdown title="Productos" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action4">Novelas</NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Clásicos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6">
                Ranking
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Cardwidget></Cardwidget>
            <Button variant="outline-success">LogIn</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;