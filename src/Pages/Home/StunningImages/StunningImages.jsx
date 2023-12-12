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
                <div className="keen-slider__slide bg-cover bg-center number-slide1 w-full h-[100vh] image-full"
                    style={{ backgroundImage: 'url(https://i.ibb.co/m5ZRfGc/istockphoto-1334117334-612x612.jpg)' }}
                >
                    <div className="w-full">
                        <img className="w-full mx-auto   image-full" src="" alt="" />
                    </div>
                </div>
                <div className="keen-slider__slide bg-cover bg-center number-slide2 w-full h-[100vh] image-full"
                    style={{ backgroundImage: 'url(https://i.ibb.co/vsVWB7w/miami-florida-hotel-room-wallpaper-thumb.jpg)' }}
                >
                    <div className="w-full">
                        <img className="w-full mx-auto   image-full" src="" alt="" />
                    </div>
                </div>
                <div className="keen-slider__slide bg-cover bg-center number-slide3 w-full h-[100vh] image-full"
                    style={{ backgroundImage: 'url(https://i.ibb.co/SQ49gWm/f516ccf41e60b135c1fd82aa96803326.jpg)' }}
                >
                    <div className="w-full">
                        <img className="w-full mx-auto   image-full" src="" alt="" />
                    </div>
                </div>
                <div className="keen-slider__slide bg-cover bg-center number-slide4 w-full h-[100vh] image-full"
                    style={{ backgroundImage: 'url(https://i.ibb.co/8gyzsj8/istockphoto-1452529483-612x612.jpg)' }}
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