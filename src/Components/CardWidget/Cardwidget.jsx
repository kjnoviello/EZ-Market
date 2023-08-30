import BadgeWidget from '../BadgeWidget/BadgeWidget.jsx';
import '../CardWidget/Cardwidget.css'

//!---------------------------------
//hay que poner el useState para que renderize
//!---------------------------------


const Cardwidget = () => {
    const cartItemCount = 9;
    const newCount = cartItemCount.toString()
  return (
    <div>
        <i className="ri-shopping-cart-2-fill cart"></i>
        <sup className='cart_span'>
          <BadgeWidget badgeCount={newCount}></BadgeWidget></sup>
    </div>
  )
}

export default Cardwidget