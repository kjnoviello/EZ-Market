import Figure from 'react-bootstrap/Figure';

function CartImage({imagen}) {
  return (
    <Figure>
      <Figure.Image
        width={71}
        height={80}
        alt="71x80"
        src={imagen}
      />
      {/* <Figure.Caption>
        Nulla vitae elit libero, a pharetra augue mollis interdum.
      </Figure.Caption> */}
    </Figure>
  );
}

export default CartImage;