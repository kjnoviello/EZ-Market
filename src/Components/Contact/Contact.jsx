import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Swal from 'sweetalert2';
import ('./Contact.css')

function Contact() {
  const [contactDataForm, setContactDataForm] = useState({
    nombres: '',
    emails: '',
    textArea: '',
  });


  const handleOnChancheContact = (evt) => {
    setContactDataForm({
        ...contactDataForm,
        [evt.target.name]: evt.target.value,
    })
    console.log(contactDataForm);
  };


  const submitContactForm = (event) => {
    event.preventDefault();
    Swal.fire({
      icon: "success",
      text: `Enviado! Responderemos a la brevedad.`,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    })
    setContactDataForm({
      nombres: '',
      emails: '',
      textArea: '',
    })
  }

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
                  <a href="https://es-la.facebook.com/" title="facebook" className="section_social">
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
              <form onSubmit={submitContactForm}>
                <Fade cascade>
                  <p className="form-label">Nombre y apellido</p>
                  <input type="text" className="form-control"  id="nombre" placeholder="Nombre y apellido" name='nombres' value={contactDataForm.nombres} onChange={handleOnChancheContact} required />
                  <p className="form-label">Email address</p>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" value={contactDataForm.emails} onChange={handleOnChancheContact} name='emails' required />
                  <p className="form-label">Example textarea</p>
                  <textarea className="form-control" id="texto" rows="3" value={contactDataForm.textArea} onChange={handleOnChancheContact} name='textArea'></textarea>
                  <br />
                </Fade>
                <Button variant="success" type='submit'>Enviar</Button>
              </form>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Contact;
