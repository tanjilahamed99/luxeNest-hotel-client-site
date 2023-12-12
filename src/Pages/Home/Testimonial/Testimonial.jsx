import { FaStar } from "react-icons/fa";

const Testimonial = () => {
    return (
        <div data-aos="fade-right"
            data-aos-delay="50" className="container mx-auto my-20">
            <h2 className="text-xl font-medium text-center">OUR TESTIMONIALS</h2>
            <h2 className="text-3xl font-semibold text-center my-2 text-[#1e1e1e]">Feedback From Our Guests</h2>
            <p className="font-medium text-center md:mx-10 xl:mx-96 text-[#616161]">A wonderful serenity has taken possession of my entire soul, like these royella dolor consectetur adipiscing elit dos eiusmod tempor incididunt resort sweet spring</p>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 mt-10">
                <div className="bg-[#f8f6f3] pb-5">
                    <div className="flex flex-col md:flex-row items-center gap-5 justify-between mb-5">
                        <div className="bg-slate-200 w-fit p-3">
                            <img className="w-[100px]  h-[100px] rounded-lg" src="https://i.ibb.co/5kzyH8G/pngwing-com-6.png" alt="" />
                        </div>
                        <div className="space-y-1">
                            <h2 className="font-bold text-2xl text-[#1e1e1e]">Saturu Gojo</h2>
                            <p className="text-medium text-sm text-[#1e1e1e]">Tip Advisor</p>
                        </div>
                        <div className="bg-white p-4 flex gap-2 rounded-l-2xl">
                            <FaStar className="text-2xl text-amber-400"></FaStar>
                            <FaStar className="text-2xl text-amber-400"></FaStar>
                            <FaStar className="text-2xl text-amber-400"></FaStar>
                            <FaStar className="text-2xl text-amber-400"></FaStar>
                            <FaStar className="text-2xl text-amber-400"></FaStar>
                        </div>
                    </div>
                    <p className="text-[#616161] text-lg px-10">
                        Staying at [Your Hotel Name] was an exceptional experience. The warm and welcoming staff, luxurious accommodations, and breathtaking views made our visit unforgettable. We were truly pampered from the moment we arrived. Thank you for providing us with a memorable and relaxing stay. We can not wait to return
                    </p>
                </div>
                <div className="bg-[#f8f6f3] pb-5">
                    <div className="flex flex-col md:flex-row items-center gap-5 justify-between mb-5">
                        <div className="bg-slate-200 w-fit p-3">
                            <img className="w-[100px]  h-[100px] rounded-lg" src="https://i.ibb.co/4JWn5WV/pngwing-com-7.png" alt="" />
                        </div>
                        <div className="space-y-1">
                            <h2 className="font-bold text-2xl text-[#1e1e1e]">Captain Levi</h2>
                            <p className="text-medium text-sm text-[#1e1e1e]">Tip Advisor</p>
                        </div>
                        <div className="bg-white p-4 flex gap-2 rounded-l-2xl">
                            <FaStar className="text-2xl text-amber-400"></FaStar>
                            <FaStar className="text-2xl text-amber-400"></FaStar>
                            <FaStar className="text-2xl text-amber-400"></FaStar>
                            <FaStar className="text-2xl text-amber-400"></FaStar>
                            <FaStar className="text-2xl text-amber-400"></FaStar>
                        </div>
                    </div>
                    <p className="text-[#616161] text-lg px-10 ">
                        Staying at [Your Hotel Name] was an exceptional experience. The warm and welcoming staff, luxurious accommodations, and breathtaking views made our visit unforgettable. We were truly pampered from the moment we arrived. Thank you for providing us with a memorable and relaxing stay. We can not wait to return
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;