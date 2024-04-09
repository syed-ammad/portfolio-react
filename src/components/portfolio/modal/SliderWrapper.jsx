import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderSettings from "./sliderSettings";

const SliderWrapper = ({images}) => {
  // creating id
  let id = 0;
  return (
    <>
      <Slider {...sliderSettings}>
        {images.map((img) => {
          id++;
          return (
            <div id={id} className="slide_item">
              <img src={img} alt="slide 1" />
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default SliderWrapper;