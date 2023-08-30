import { ModalHeader, ModalTitle } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import ItemCount from '../ItemCount/ItemCount';
import ('../ItemModal/ItemModal.css')


function ItemModal(props) {

  ItemModal.propTypes = {
    titulo: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    onHide: PropTypes.func.isRequired,
  };

//! INICIO DE PROMISE PARA TRAER DATOS DEL JSON


// const getData = fetch('https://64ee10061f87218271424186.mockapi.io/card')
// .then(response=> response.json())
// .then(response=> console.log(response[0].titulo))
// console.log(getData);

//! FIN DE PROMISE PARA TRAER DATOS DEL JSON

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton>
        <ModalTitle id="contained-modal-title-vcenter">
          {props.titulo}
        </ModalTitle>
      </ModalHeader>
      <Modal.Body>
        <h4>{props.autor}</h4>
        <p>
          {props.descripcion}
        </p>
        <hr />
        <div className='divDisponibilidad'>
          <p>
            Disponibilidad: 4
          </p>
          <ItemCount></ItemCount>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ItemModal
