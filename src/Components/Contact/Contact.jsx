// import { useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ('./Contact.css')

function Contact() {

  // const refInput = useRef(null)
  // const btnClick = () => refInput.current.focus()

  return (
    <div className="container-lg row bg-white divContact">
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab-example"
      className="mb-"
    >
      <Tab eventKey="home" title="Información">
        <div className="col contenedor">
        <Fade cascade>
          <p>
            EZ Market - Tienda de libros
          </p>
          <hr />
          <p>
            Direccion: Calle falsa 123, Rosario, Argentina.
          </p>
          <hr />
          <div className="section_social_icon">
            <div className="section_social_container">
              <a href="https://es-la.facebook.com/" title="facebook"  className="section_social">
                <i className="ri-facebook-fill"></i>
              </a>
            </div>
            <div className="section_social_container">
              <a href="https://twitter.com/?lang=es" title="twitter" className="section_social">
                <i className="ri-twitter-fill"></i>
              </a>
            </div>
            <div className="section_social_container">
              <a href="https://www.instagram.com/" title="instagram" className="section_social">
                <i className="ri-instagram-fill"></i>
              </a>
            </div>
            <div className="section_social_container">
              <a href="https://wa.me/3416851106" title="whatsapp" className="section_social">
                <i className="ri-whatsapp-fill"></i>
              </a>
            </div>
          </div>
        </Fade>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Formulario">
        <div className="col contenedorForm contenedor">     
          <div className="mb-3">
          <Fade cascade>
            <p className="form-label">Nombre y apellido</p>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre y apellido" />
            <p className="form-label">Email address</p>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            <p className="form-label">Example textarea</p>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </Fade>
          </div>
          <Button variant="success" type='submit'>Enviar</Button>
        </div>
      </Tab>
      {/* <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab> */}
    </Tabs>
    </div>
  );
}

export default Contact;