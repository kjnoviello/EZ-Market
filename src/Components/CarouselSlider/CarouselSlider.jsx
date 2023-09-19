import Carousel from 'react-bootstrap/Carousel';
import './CarouselSlider.css'

function CarouselSlider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src='/banner01.png'></img>
        {/* <ExampleCarouselImage text="First slide" /> */}
        {/* <Carousel.Caption>
          <h3 className='h3Custom'>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src='/banner02.png'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/banner03.jpg'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/banner04.png'></img>
      </Carousel.Item>
      <Carousel.Item>
        <img src='/banner05.png'></img>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;