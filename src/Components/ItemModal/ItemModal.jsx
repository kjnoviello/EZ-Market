import { ModalHeader, ModalTitle } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import ItemCount from '../ItemCount/ItemCount';
import ('../ItemModal/ItemModal.css')


function ItemModal(datos) {

  ItemModal.propTypes = {
    titulo: PropTypes.string.isRequired,
    autor: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    onHide: PropTypes.func.isRequired,
  };

  return (
    <Modal
      {...datos}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton>
        <ModalTitle id="contained-modal-title-vcenter">
          {datos.titulo}
        </ModalTitle>
      </ModalHeader>
      <Modal.Body>
        <h5>{datos.autor}</h5>
        <hr />
        <p>
          {datos.descripcion}
        </p>
        <hr />
        <div className='divDisponibilidad'>
          <p>
            Disponibilidad: {datos.stock}
          </p>
          <ItemCount></ItemCount>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-success" onClick={datos.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default ItemModal
