import { Link } from "react-router-dom";

const Spa = () => {
  return (
    <div className="my-40 w-full px-5">
      <div className=" relative lg:w-[700px] md:w-[500px] mx-auto lg:mx-0 lg:ml-40">
        <img
          className="w-full  lg:w-full h-[200px] md:h-[300px] lg:h-[460px]"
          src="https://i.ibb.co/GfDQSTk/tzoo-hd-33758-18074-spa-gift-certificate.jpg"
          alt=""
        />
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="absolute bg-gradient-to-r overflow-x-hidden  from-slate-50 to-white md:top-4 md:-right-40 lg:-right-72  top-1 -right-32"
        >
          {/* main things if this component */}
          <div className=" w-[300px] lg:w-[480px] space-y-3 md:h-[270px]  lg:h-[430px] py-10 lg:py-32 px-10  h-[190px]">
            <h2 className="text-sm md:mb-4 font-bold">ENJOY THE SPA</h2>
            <p className="lg:text-3xl md:text-2xl font-light lg:leading-10 text-sm">
              {" "}
              Spend an Unforgettable Day <br /> by Visiting the LuxeNext <br />{" "}
              Hotel Spa..
            </p>
            <Link to={"/about"}>
              <button className="md:btn md:btn-outline border p-2 mt-2 rounded-xl  md:mt-5 font-light text-sm">
                Discover More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spa;
