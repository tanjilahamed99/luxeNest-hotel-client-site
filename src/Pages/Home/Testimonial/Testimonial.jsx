import { FaStar } from "react-icons/fa";

const Testimonial = () => {
    return (
        <div data-aos="fade-right"
            data-aos-delay="50" className="container mx-auto my-20">
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="w-full mx-auto text-center py-24 space-y-4">
                        <div className="bg-white text-amber-400 justify-center flex gap-2 rounded-xl  text-2xl">
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                        </div>
                        <p className="text-lg font-medium">LuxeNext sets the bar high! Exceptional service, chic decor, and prime amenities. <br /> A lavish retreat with a welcoming staff. Five-star excellence!</p>
                        <h2 className="text-sm font-bold">Olivia Thompson</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide6" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="w-full mx-auto text-center py-24 space-y-4">
                        <div className="bg-white text-amber-400 justify-center flex gap-2 rounded-xl  text-2xl">
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                        </div>
                        <p className="text-lg font-medium">Our stay at LuxeNext was perfection! Elegant design, impeccable service, and a central <br /> location. A top-tier hotel experience that I can not recommend enough</p>
                        <h2 className="text-sm font-bold">Alexander Rodriguez</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="w-full mx-auto text-center py-24 space-y-4">
                        <div className="bg-white text-amber-400 justify-center flex gap-2 rounded-xl  text-2xl">
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                        </div>
                        <p className="text-lg font-medium">Our stay at LuxeNext was perfection! Elegant design, impeccable service, and a central <br /> location. A top-tier hotel experience that I can not recommend enough</p>
                        <h2 className="text-sm font-bold">Emily Harper</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="w-full mx-auto text-center py-24 space-y-4">
                        <div className="bg-white text-amber-400 justify-center flex gap-2 rounded-xl  text-2xl">
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                        </div>
                        <p className="text-lg font-medium">Our stay at LuxeNext was perfection! Elegant design, impeccable service, and a central <br /> location. A top-tier hotel experience that I can not recommend enough</p>
                        <h2 className="text-sm font-bold">Benjamin Chen</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <div className="w-full mx-auto text-center py-24 space-y-4">
                        <div className="bg-white text-amber-400 justify-center flex gap-2 rounded-xl  text-2xl">
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                        </div>
                        <p className="text-lg font-medium">Our LuxeNext stay was a dream! Upscale elegance, warm hospitality, and a range <br /> of amenities. This hotel is a perfect blend of style and comfort.</p>
                        <h2 className="text-sm font-bold">Sophia Reynolds</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <div className="w-full mx-auto text-center py-24 space-y-4">
                        <div className="bg-white text-amber-400 justify-center flex gap-2 rounded-xl  text-2xl">
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                            <FaStar className=""></FaStar>
                        </div>
                        <p className="text-lg font-medium">
                            LuxeNext - where luxury meets comfort! The ambiance, service, and amenities are unparalleled <br />. A refined stay that promises both relaxation and sophistication.</p>
                        <h2 className="text-sm font-bold">Liam Campbell</h2>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Testimonial