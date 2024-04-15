import { Link } from "react-router-dom";

const Food = () => {
  return (
    <div className="mb-20  w-full px-5">
      <div className=" relative lg:w-[700px] md:w-[500px] mx-auto">
        <img
          className="w-full  lg:w-full h-[200px] md:h-[300px] lg:h-[460px]"
          src="https://i.ibb.co/wgFh4Tc/HD-wallpaper-chocolate-ice-cream-close-up-sweets-ice-cream-balls-ice-cream.jpg"
          alt=""
        />
        <div
          data-aos="fade-left"
          data-aos-duration="1500"
          className="absolute bg-gradient-to-r overflow-x-hidden  from-slate-50 to-white md:top-4 md:-right-40 lg:-right-72  top-1 -right-32"
        >
          {/* main things if this component */}
          <div className=" w-[300px] lg:w-[480px] space-y-3 md:h-[270px]  lg:h-[430px] py-10 lg:py-32 px-10  h-[190px]">
            <h2 className="text-sm md:mb-4 font-bold">KITCHEN & EVENTS</h2>
            <p className="lg:text-3xl md:text-2xl font-light lg:leading-10 text-sm">
              {" "}
              Enjoy the High Quality <br /> Food Made by <br /> Hotel LuxeNext
              Chefs.
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

export default Food;
