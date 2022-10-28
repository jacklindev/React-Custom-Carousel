import { Carousel, Product } from "./Components";

import { Dresses } from "./data";
import SvgArrowLeft from "./Assets/svgs/arrow_left.svg";
import SvgArrowRight from "./Assets/svgs/arrow_right.svg";

import "./styles.css";

export default function App() {
  return (
    <Carousel
      visibleCount={4}
      renderArrowPrev={<img src={SvgArrowLeft} alt="arrow-left" />}
      renderArrowNext={<img src={SvgArrowRight} alt="arrow-right" />}
    >
      {Dresses.map((dress, index) => (
        <Product key={index} {...dress} />
      ))}
    </Carousel>
  );
}
