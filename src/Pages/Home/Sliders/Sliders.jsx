import DisplaySlider from "./DisplaySlider";

const Sliders = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      className="md:my-20 my-10 px-2"
    >
      <h2 className="lg:text-3xl text-xl font-semibold text-center">
        LuxeNest Waiting For You?
      </h2>
      <p className="font-medium text-center mt-2 md:px-10 xl:px-96">
        A wonderful serenity has taken possession of my entire soul, like these
        royella dolor consectetur adipiscing elit dos eiusmod tempor incididunt
        resort sweet spring
      </p>
      <div className="md:hidden">
        <DisplaySlider view={2}></DisplaySlider>
      </div>
      <div className="hidden md:inline lg:hidden">
        <DisplaySlider view={3}></DisplaySlider>
      </div>
      <div className="hidden lg:inline">
        <DisplaySlider view={3}></DisplaySlider>
      </div>
    </div>
  );
};

export default Sliders;
