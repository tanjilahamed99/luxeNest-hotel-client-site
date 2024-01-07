import { Link } from "react-router-dom";

const HomeAbout = () => {
    return (
        <div className="my-20">
            <div className=" pl-40 relative">
                <img className="h-[500px] w-1/2" src="https://i.ibb.co/QnC2VBJ/download-40.jpg" alt="" />
                <div className="absolute right-96 pl-10 bg-gradient-to-r from-slate-50 to-white  py-28 top-6 ">
                    <h2 className="text-sm mb-4 font-bold">ABOUT US </h2>
                    <p className="text-3xl font-light leading-10"> Enjoy the Uniquely- <br />Inviting Ambience of <br /> Hotel LuxeNext.</p>
                   <Link to={'/about'}><button className="btn btn-outline mt-5 font-light">Discover More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeAbout;