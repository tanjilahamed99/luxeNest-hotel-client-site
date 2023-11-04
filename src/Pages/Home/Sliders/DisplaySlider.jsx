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
        <div ref={sliderRef} className="keen-slider my-5">
            <img className="keen-slider__slide number-slide1 w-[300px] h-[300px]" src="https://i.ibb.co/FgJjZqx/paolo-nicolello-2g-Ox-Kj594n-M-unsplash.jpg" alt="" />
            <img className="keen-slider__slide number-slide2 w-[300px] h-[300px]" src="https://i.ibb.co/Qfg12zw/edvin-johansson-rlw-E8f8an-Oc-unsplash.jpg" alt="" />
            <img className="keen-slider__slide number-slide3 w-[300px] h-[300px]" src="https://i.ibb.co/svLmhK5/leisure-beautiful-health-garden-landscape.jpg" alt="" />
            <img className="keen-slider__slide number-slide4 w-[300px] h-[300px]" src="https://i.ibb.co/XF74Hc8/jason-briscoe-e-Lf-QTm-Df-Lk-unsplash.jpg" alt="" />
            <img className="keen-slider__slide number-slide5 w-[300px] h-[300px]" src="https://i.ibb.co/JnYqKLK/tholaal-mohamed-8s-KTHe-Ggr-UM-unsplash.jpg" alt="" />
            <img className="keen-slider__slide number-slide6 w-[300px] h-[300px]" src="https://i.ibb.co/nRV2Jzm/will-truettner-7-ZZ-Fm-Vel-QY-unsplash.jpg" alt="" />
            <img className="keen-slider__slide number-slide7 w-[300px] h-[300px]" src="https://i.ibb.co/b5TJfCQ/david-hieb-n9-Qv-Thin-U0-unsplash.jpg" alt="" />
            <img className="keen-slider__slide number-slide8 w-[300px] h-[300px]" src="https://i.ibb.co/tCGXdSd/kelsey-curtis-27u-Gzl-AFw-unsplash.jpg" alt="" />
        </div>
    )
};

export default DisplaySlider;