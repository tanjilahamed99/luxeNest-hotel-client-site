import PropTypes from "prop-types";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
const DisplaySlider = ({ view }) => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: view,
      spacing: 15,
    },
  });
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      ref={sliderRef}
      className="keen-slider my-5"
    >
      <img
        className="keen-slider__slide number-slide1 w-[250px]  h-[120px] md:w-[200px] md:h-[200px] lg:h-[300px]"
        src="https://i.ibb.co/fD5Q3cW/24trending-shophotels1-video-Sixteen-By-Nine-Jumbo1600.jpg"
        alt=""
      />

      <img
        className="keen-slider__slide number-slide2 w-[250px]  h-[120px]  md:w-[200px] md:h-[200px] lg:h-[300px]"
        src="https://i.ibb.co/VS2HSXF/2690978.jpg"
        alt=""
      />

      <img
        className="keen-slider__slide number-slide3 w-[250px]  h-[120px] md:w-[200px] md:h-[200px] lg:h-[300px]"
        src="https://i.ibb.co/7SnzMsX/f7d159d8c285cff9fa446520ec24ca0b.jpg"
        alt=""
      />

      <img
        className="keen-slider__slide number-slide4 w-[250px]  h-[120px] md:w-[200px] md:h-[200px] lg:h-[300px]"
        src="https://i.ibb.co/pzrpbw8/beach-hotel-room-wallpaper-preview.jpg"
        alt=""
      />

      <img
        className="keen-slider__slide number-slide5 w-[250px]  h-[120px] md:w-[200px] md:h-[200px] lg:h-[300px]"
        src="https://i.ibb.co/d5FyYms/hotel-1979406-640.jpg"
        alt=""
      />

      <img
        className="keen-slider__slide number-slide6 w-[250px]  h-[120px] md:w-[200px] md:h-[200px] lg:h-[300px]"
        src="https://i.ibb.co/TwwgXqG/istockphoto-627892060-612x612.jpg"
        alt=""
      />

      <img
        className="keen-slider__slide number-slide7 w-[250px]  h-[120px] md:w-[200px] md:h-[200px] lg:h-[300px]"
        src="https://i.ibb.co/LRXkmyR/sofa-design-yellow-curtains-wallpaper-preview.jpg"
        alt=""
      />

      <img
        className="keen-slider__slide number-slide8 w-[250px]  h-[120px] md:w-[200px] md:h-[200px] lg:h-[300px]"
        src="https://i.ibb.co/VtydTjY/hotel-room-beautiful-orange-sofa-included-43642330.webp"
        alt=""
      />
    </div>
  );
};

DisplaySlider.propTypes = {
  view: PropTypes.bool,
};

export default DisplaySlider;
