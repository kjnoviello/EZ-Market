import { AttentionSeeker } from 'react-awesome-reveal'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ('../ItemCountStock/ItemCountStock.css')

const ItemCountStock = ( ) => {

  return (
    <div className='divItemCount'>
        <div className='left'>
            <AttentionSeeker effect="shakeX"><h2 className='stockText'>No hay stock</h2></AttentionSeeker>
        </div>
        <div>
          <Link to="/Productos">
            <Button variant="secondary">Volver a la tienda</Button>
          </Link>
        </div>
    </div>
  )
}

export default ItemCountStock

