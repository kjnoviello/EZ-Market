import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useCount } from '../Hooks/useCount'
import ('../ItemCount/ItemCount.css')


const ItemCount = ( {initial, stock, handleAdd}) => {
  const {count, handleDecrementCount, handleIncrementCount} = useCount(initial, stock)

  

  ItemCount.propTypes = {
    initial: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    handleAdd: PropTypes.func.isRequired,
  };
 

  return (
    <div className='divItemCount'>
        <div className='divItemCountDiv'>
          <Button variant="secondary" className="buttonHandleCount" onClick={handleDecrementCount}>-1</Button>
          <label>{count}</label>
          <Button variant="secondary" className="buttonHandleCount" onClick={handleIncrementCount}>+1</Button>
        </div>
        <div className='divItemCountDiv'>
          <Link to="/Productos">
            <Button variant="secondary">Volver atrás</Button>
          </Link>
          <Button variant="success" onClick={()=> handleAdd(count)}>Agregar al carrito</Button>
        </div>
    </div>
  )
}

export default ItemCount