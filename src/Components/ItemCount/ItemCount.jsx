import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useCount } from '../Hooks/useCount'
import { useState } from 'react'
import ToastAlert from '../ToastAlert/ToastAlert'
import PropTypes from 'prop-types'
import ('../ItemCount/ItemCount.css')

const ItemCount = ( {initial, stock, handleAdd}) => {
  const {count, handleDecrementCount, handleIncrementCount} = useCount(initial, stock)
  const [showToastAlert, setShowToastAlert] = useState(false)
  const [isButton, setIsButton] = useState(true)


  const handleShowToastAlert = () =>{
      setShowToastAlert(true)
      setIsButton(false)
      setTimeout(function(){
        setShowToastAlert(false)
        setIsButton(true)
      }, 2000);
    }
  
  //funcion para mostrar el toast

    //! Establecer el estado de nuevo para el re-render

  ItemCount.propTypes = {
    initial: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    handleAdd: PropTypes.func.isRequired,
  };

  return (
    <div className='divItemCount'>
        <div className='left'>
          <Button variant="secondary" onClick={handleDecrementCount}><i className="ri-subtract-line"></i>1</Button>
          <label>{count}</label>
          <Button variant="secondary" onClick={handleIncrementCount}><i className="ri-add-line"></i>1</Button>
        </div>
        <div>
          <Link to="/Productos">
            <Button variant="secondary"><i className="ri-arrow-go-back-line icon"></i>Volver</Button>
          </Link>
           { isButton && ( <Button variant="success" onClick={()=>{ handleAdd(count); handleShowToastAlert()}}><i className="ri-shopping-cart-line icon"></i>Agregar </Button> )}
            {showToastAlert && <ToastAlert count={count}></ToastAlert>}          
        </div>
    </div>
  )
}

export default ItemCount

