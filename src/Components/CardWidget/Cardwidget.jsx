// import { useRef } from 'react';
import { Badge } from 'react-bootstrap';
import '../CardWidget/Cardwidget.css'

const Cardwidget = () => {
    // const divRef = useRef(null)
    const cartItemCount = 9;

  return (
    <div>
      <i className="ri-shopping-cart-2-fill cart"></i>
      <sup className='cart_span'>
        <Badge bg="secondary" >{cartItemCount}</Badge>
      </sup>
    </div>
  )
}

export default Cardwidget