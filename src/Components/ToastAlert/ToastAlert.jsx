import Toast from 'react-bootstrap/Toast';
import PropTypes from 'prop-types'
import('./ToastAlert.css')


function ToastAlert({count}) {

  ToastAlert.propTypes = {
    count: PropTypes.number.isRequired,
  };

  return (
    <Toast id='toastDiv'>
      <Toast.Body><strong>{`Agregado ${count} unidad/es` }</strong></Toast.Body>
    </Toast>
  );
}

export default ToastAlert;