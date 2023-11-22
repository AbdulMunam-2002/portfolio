import Carousel from 'react-bootstrap/Carousel';
import image from '../assets/images/hero.png'

export const HeroSection = () => 
{
    return(
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}