const Spa = () => {
    return (
        <div className="my-40 w-full px-5">
            <div className=" relative lg:w-[700px] md:w-[500px] mx-auto lg:mx-0 lg:ml-40">
                <img className="w-full lg:h-[460px]" src="https://i.ibb.co/GfDQSTk/tzoo-hd-33758-18074-spa-gift-certificate.jpg" alt="" />
                <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="absolute bg-gradient-to-r hidden md:block from-slate-50 to-white top-4 -right-40 lg:-right-72">
                    <div className=" w-[300px] lg:w-[480px] h-[300px]  lg:h-[430px] py-10 lg:py-32 px-10">
                        <h2 className="text-sm mb-4 font-bold">ENJOY THE SPA</h2>
                        <p className="lg:text-3xl text-2xl font-light lg:leading-10"> Spend an Unforgettable Day <br /> by Visiting the LuxeNext <br /> Hotel Spa..</p>
                        <button className="btn btn-outline  mt-5 font-light">Discover More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Spa;