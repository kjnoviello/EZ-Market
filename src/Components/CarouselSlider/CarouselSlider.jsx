import Carousel from 'react-bootstrap/Carousel';
import './CarouselSlider.css'

function CarouselSlider() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className='sliderImg1' src='/slider1_l.jpg'></img>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          <h3 className='h3Custom'>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='sliderImg2' src='/slider2_l.jpg'></img>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='sliderImg3' src='/slider3_l.jpg'></img>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;