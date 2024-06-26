import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const StunningImages = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 2000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <>
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide bg-cover bg-center number-slide1 w-full lg:h-[100vh] h-[50vh] md:h-[80vh] image-full"
                    style={{ backgroundImage: 'url(https://i.ibb.co/TgJYG0T/hotel-1.jpg)' }}
                >
                    <div className="w-full">
                        <img className="w-full mx-auto   image-full" src="" alt="" />
                    </div>
                </div>
                <div className="keen-slider__slide bg-cover bg-center number-slide2 w-full lg:h-[100vh] h-[50vh] md:h-[80vh] image-full"
                    style={{ backgroundImage: 'url(https://i.ibb.co/1GzytYW/hotel-2.jpg)' }}
                >
                    <div className="w-full">
                        <img className="w-full mx-auto   image-full" src="" alt="" />
                    </div>
                </div>
                <div className="keen-slider__slide bg-cover bg-center number-slide3 w-full lg:h-[100vh] h-[50vh] md:h-[80vh] image-full"
                    style={{ backgroundImage: 'url(https://i.ibb.co/SQ49gWm/f516ccf41e60b135c1fd82aa96803326.jpg)' }}
                >
                    <div className="w-full">
                        <img className="w-full mx-auto   image-full" src="" alt="" />
                    </div>
                </div>
                <div className="keen-slider__slide bg-cover bg-center number-slide4 w-full lg:h-[100vh] h-[50vh] md:h-[80vh] image-full"
                    style={{ backgroundImage: 'url(https://i.ibb.co/B23hGTY/hotel-5.jpg)' }}
                >
                    <div className="w-full">
                        <img className="w-full mx-auto   image-full" src="" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
};

export default StunningImages;