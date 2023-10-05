import Carousel from 'react-bootstrap/Carousel';

function CarouselSlider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src='/banner01.jpg' alt='Banner 1' className='img-fluid' />
      </Carousel.Item>
      <Carousel.Item>
        <img src='/banner02.jpg' alt='Banner 2' className='img-fluid' />
      </Carousel.Item>
      <Carousel.Item>
        <img src='/banner03.jpg' alt='Banner 3' className='img-fluid' />
      </Carousel.Item>
      <Carousel.Item>
        <img src='/banner04.jpg' alt='Banner 4' className='img-fluid' />
      </Carousel.Item>
      <Carousel.Item>
        <img src='/banner05.jpg' alt='Banner 5' className='img-fluid' />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;