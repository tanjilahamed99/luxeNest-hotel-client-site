import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
const DisplaySlider = () => {
    const [sliderRef] = useKeenSlider({
        loop: true,
        mode: "free",
        slides: {
            perView: 3,
            spacing: 15,
        },
    })
    return (
        <div data-aos="fade-up" data-aos-duration="500" ref={sliderRef} className="keen-slider my-5">
            <img className="keen-slider__slide number-slide1 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/ypjcKHf/images-24.jpg" alt="" />
            <img className="keen-slider__slide number-slide2 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/PG6mYvH/images-23.jpg" alt="" />
            <img className="keen-slider__slide number-slide3 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/WDFLVkC/images-22.jpg" alt="" />
            <img className="keen-slider__slide number-slide4 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/j3NJq91/images-21.jpg" alt="" />
            <img className="keen-slider__slide number-slide5 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/Qnj5jK7/download-38.jpg" alt="" />
            <img className="keen-slider__slide number-slide6 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/Wf3Jz5t/download-37.jpg" alt="" />
            <img className="keen-slider__slide number-slide7 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/ynhMWT9/download-36.jpg" alt="" />
            <img className="keen-slider__slide number-slide8 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/tCGXdSd/kelsey-curtis-27u-Gzl-AFw-unsplash.jpg" alt="" />
        </div>
    )
};

export default DisplaySlider;