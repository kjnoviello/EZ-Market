import { Badge } from 'react-bootstrap';
import { CardContext } from "../../context/CartContext";
import { useContext } from 'react';

import '../CardWidget/Cardwidget.css'

const Cardwidget = () => {

    const {totalCount} = useContext(CardContext) 

  return (
    <div>
      <i className="ri-shopping-cart-2-fill cart"></i>
      <sup className='cart_span'>
        <Badge bg="secondary" >{totalCount()}</Badge>
      </sup>
    </div>
  )
}

export default Cardwidget