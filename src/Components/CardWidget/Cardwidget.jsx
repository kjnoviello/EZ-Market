import '../CardWidget/Cardwidget.css'

const Cardwidget = () => {
    const cartItemCount = 5;
  return (
    <div>
        <i className="ri-shopping-cart-2-fill cart"></i>
        <sup className='cart_span'>{cartItemCount}</sup>
    </div>
  )
}

export default Cardwidget