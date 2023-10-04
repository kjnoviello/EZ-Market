/* eslint-disable react/prop-types */
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useCount } from '../Hooks/useCount'
import ('../ItemCount/ItemCount.css')

const ItemCount = ( {initial, stock, handleAdd}) => {
  const {count, handleDecrementCount, handleIncrementCount} = useCount(initial, stock)
  const navigate = useNavigate()

  return (
    <div className='divItemCount'>
        <div className='left'>
          <Button variant="secondary" onClick={handleDecrementCount}><i className="ri-subtract-line"></i>1</Button>
          <label>{count}</label>
          <Button variant="secondary" onClick={handleIncrementCount}><i className="ri-add-line"></i>1</Button>
        </div>
        <div>
          {/* <Link to="/Productos"> */}
            <Button variant="secondary" onClick={()=> navigate(-1)}><i className="ri-arrow-go-back-line icon"></i>Volver</Button>
          {/* </Link> */}
          <Button variant="success" onClick={()=> handleAdd(count)}>
            <i className="ri-shopping-cart-line icon"></i>Agregar
          </Button>
        </div>
    </div>
  )
}

export default ItemCount

