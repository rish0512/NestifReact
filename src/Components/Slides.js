import { Carousel } from "react-bootstrap";
import img1 from "../Assets/asset 1.jpeg";
import img2 from "../Assets/asset 2.jpeg";
import img3 from "../Assets/asset 3.jpeg";
import img4 from "../Assets/asset 4.jpeg";

function Slides() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img4} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slides;
