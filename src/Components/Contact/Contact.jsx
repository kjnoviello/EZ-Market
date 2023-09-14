// import { ModalBody } from "react-bootstrap"
// import ('./Contact.css')

// const Contact = () => {
//   return (
//     <div className="container-lg row bg-white" id="divContact">
//       <div className="col" id="divDetailContainer" >
//         <ModalBody>
//           <p>
//             asfasfas
//           </p>
//           <hr />
//           <p>
//             afasfasfa
//           </p>
//           <hr />
//           <div className="section_social_icon">
//             <div className="section_social_container">
//               <a href="https://es-la.facebook.com/" title="facebook"  className="section_social">
//                 <i className="ri-facebook-fill"></i>
//               </a>
//             </div>
//             <div className="section_social_container">
//               <a href="https://twitter.com/?lang=es" title="twitter" className="section_social">
//                 <i className="ri-twitter-fill"></i>
//               </a>
//             </div>
//             <div className="section_social_container">
//               <a href="https://www.instagram.com/" title="instagram" className="section_social">
//                 <i className="ri-instagram-fill"></i>
//               </a>
//             </div>
//             <div className="section_social_container">
//               <a href="https://wa.me/3416851106" title="whatsapp" className="section_social">
//                 <i className="ri-whatsapp-fill"></i>
//               </a>
//             </div>
//           </div>
//         </ModalBody>
//       </div>
//       <div className="col form">     
//         <div className="mb-3">
//           <h3>Contacto</h3>
//           <p className="form-label">Nombre y apellido</p>
//           <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre y apellido" />
//           <p className="form-label">Email address</p>
//           <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
//         </div>
//         <div className="mb-3">
//             <p className="form-label">Example textarea</p>
//             <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact




import { Button } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ('./Contact.css')

function Contact() {
  return (
    <div className="container-lg row bg-white divContact">
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-"
    >
      <Tab eventKey="home" title="Información">
        <div className="col form">
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
        </div>
      </Tab>
      <Tab eventKey="profile" title="Formulario">
        <div className="col form">     
          <div className="mb-3">
            <p className="form-label">Nombre y apellido</p>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Nombre y apellido" />
            <p className="form-label">Email address</p>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            <p className="form-label">Example textarea</p>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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