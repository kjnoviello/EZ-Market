import { AttentionSeeker } from 'react-awesome-reveal'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ('../ItemCountStock/ItemCountStock.css')

const ItemCountStock = ( ) => {
  const navigate = useNavigate()

  return (
    <div className='divItemCount'>
        <div className='left'>
            <AttentionSeeker effect="shakeX"><h2 className='stockText'>No hay stock</h2></AttentionSeeker>
        </div>
        <div>
          {/* <Link to="/Productos"> */}
            <Button variant="secondary" onClick={()=> navigate(-1)}>Volver</Button>
          {/* </Link> */}
        </div>
    </div>
  )
}

export default ItemCountStock

