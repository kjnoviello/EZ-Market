import { Badge } from 'react-bootstrap';
import { CardContext } from "../../context/CartContext";
import { useContext } from 'react';
import '../CardWidget/Cardwidget.css'

const Cardwidget = () => {

  const {totalCount} = useContext(CardContext)
  
  return (
    <div>
      <i className="ri-shopping-cart-2-fill cart"></i>
      <sup className='sup'>
        <Badge bg="secondary" className= { (totalCount()> 0) ? "showBadge": "hideBadge"} >{totalCount()}</Badge>
      </sup>
    </div>
  )
}

export default Cardwidget