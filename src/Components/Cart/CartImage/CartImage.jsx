import Figure from 'react-bootstrap/Figure';
// eslint-disable-next-line react/prop-types
function CartImage({imagen}) {

  return (
    <Figure>
      <Figure.Image
        width={71}
        height={80}
        alt="71x80"
        src={imagen}
      />
    </Figure>
  );
}

export default CartImage;