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
            <img className="keen-slider__slide number-slide1 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/fD5Q3cW/24trending-shophotels1-video-Sixteen-By-Nine-Jumbo1600.jpg" alt="" />

            <img className="keen-slider__slide number-slide2 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/VS2HSXF/2690978.jpg" alt="" />

            <img className="keen-slider__slide number-slide3 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/7SnzMsX/f7d159d8c285cff9fa446520ec24ca0b.jpg" alt="" />

            <img className="keen-slider__slide number-slide4 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/pzrpbw8/beach-hotel-room-wallpaper-preview.jpg" alt="" />

            <img className="keen-slider__slide number-slide5 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/d5FyYms/hotel-1979406-640.jpg" alt="" />

            <img className="keen-slider__slide number-slide6 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/TwwgXqG/istockphoto-627892060-612x612.jpg" alt="" />

            <img className="keen-slider__slide number-slide7 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/LRXkmyR/sofa-design-yellow-curtains-wallpaper-preview.jpg" alt="" />

            <img className="keen-slider__slide number-slide8 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" src="https://i.ibb.co/VtydTjY/hotel-room-beautiful-orange-sofa-included-43642330.webp" alt="" />
        </div>
    )
};

export default DisplaySlider;




{/* <img src="" alt="24trending-shophotels1-video-Sixteen-By-Nine-Jumbo1600" border="0">
<img src="" alt="2690978" border="0">
<img src="" alt="6007427-suite-design-interir-lamps-hotel-bedroom-bed-hotel-room" border="0">
<img src="https://i.ibb.co/whgKKts/beach-hotel-room-wallpaper-preview.jpg" alt="beach-hotel-room-wallpaper-preview" border="0">
<img src="" alt="Hotel-7-double-bedroom-1000x500-c" border="0">
<img src="" alt="hotel-1979406-640" border="0">
<img src="" alt="hotel-room-beautiful-orange-sofa-included-43642330" border="0">
<img src="" alt="istockphoto-627892060-612x612" border="0">
<img src="" alt="sofa-design-yellow-curtains-wallpaper-preview" border="0"></img> */}