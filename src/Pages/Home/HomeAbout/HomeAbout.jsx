import { Link } from "react-router-dom";

const HomeAbout = () => {
    return (
        <div className="my-20 mb-40 w-full px-5">
            <div className=" relative lg:w-[700px] md:w-[500px] mx-auto">
                <img className="w-full lg:h-[460px]" src="https://i.ibb.co/rGf0p6m/hotel-7.png" alt="" />
                <div
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className="absolute bg-gradient-to-r hidden md:block from-slate-50 to-white top-4 -right-40 lg:-right-72">
                    <div className=" w-[300px] lg:w-[480px] h-[300px]  lg:h-[430px] py-10 lg:py-32 px-10">
                        <h2 className="text-sm mb-4 font-bold">ABOUT US </h2>
                        <p className="lg:text-3xl text-2xl font-light lg:leading-10"> Enjoy the Uniquely- <br />Inviting Ambience of <br /> Hotel LuxeNext.</p>
                        <Link to={'/about'}><button className="btn btn-outline  mt-5 font-light">Discover More</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;
