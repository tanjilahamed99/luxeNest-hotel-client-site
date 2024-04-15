import { FaStar } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonial = () => {
  const data = [
    {
      name: "Alexander Rodriguez",
      desc: "LuxeNext sets the bar high! Exceptional service, chic decor, and  prime amenities. A lavish retreat with a welcoming staff.Five-star excellence!",
      rating: 3,
    },
    {
      name: "Alexander Rodriguez",
      desc: "LuxeNext sets the bar high! Exceptional service, chic decor, and  prime amenities. A lavish retreat with a welcoming staff.Five-star excellence!",
      rating: 4,
    },
    {
      name: "Alexander Rodriguez",
      desc: "LuxeNext sets the bar high! Exceptional service, chic decor, and  prime amenities. A lavish retreat with a welcoming staff.Five-star excellence!",
      rating: 5,
    },
    {
      name: "Alexander Rodriguez",
      desc: "LuxeNext sets the bar high! Exceptional service, chic decor, and  prime amenities. A lavish retreat with a welcoming staff.Five-star excellence!",
      rating: 4,
    },
    {
      name: "Alexander Rodriguez",
      desc: "LuxeNext sets the bar high! Exceptional service, chic decor, and  prime amenities. A lavish retreat with a welcoming staff.Five-star excellence!",
      rating: 5,
    },
  ];

  return (
    <div
      data-aos="fade-left"
      data-aos-delay="50"
      className="container mx-auto my-10 lg:my-20 overflow-x-hidden"
    >
      {/* swiper slider */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {data.map((i, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full mx-auto text-center py-24 space-y-4">
              <div className="bg-white text-amber-400 justify-center flex gap-2 rounded-xl  text-2xl">
                <FaStar className=""></FaStar>
                <FaStar className=""></FaStar>
                <FaStar className=""></FaStar>
                <FaStar className=""></FaStar>
                <FaStar className=""></FaStar>
              </div>
              <p className="lg:text-lg text-sm font-medium lg:px-40 px-12">{i.desc}</p>
              <h2 className="text-sm font-bold">{i.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
