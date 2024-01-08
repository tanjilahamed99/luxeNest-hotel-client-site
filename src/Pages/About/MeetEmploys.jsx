
const MeetEmploys = () => {
    return (
        <div className="mb-20">
            <h2 className='text-center font-semibold text-2xl'>MEET THE EXPER MEMBERS</h2>
            <p className="xl:mx-96 lg:mx-20 mx-0 text-center mt-3">Proactively morph optimal infomediaries rather than accurate expertise. Intrinsicly progressive resources rather than resource-leveling</p>

            <div className="my-5 container mx-auto gap-10 grid lg:grid-cols-3 justify-center md:grid-cols-2 grid-cols-1 items-center">
                <div
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    className=" border p-5 bg-white text-center hover:text-white hover:bg-[#c19d68]">
                    <div className="bg-gray-200">
                        <img className="h-[300px] w-[200px] mx-auto" src="https://i.ibb.co/5kzyH8G/pngwing-com-6.png" alt="" />
                    </div>
                    <h2 className="font-semibold text-2xl mt-3 mb-1">Gojo Saturo</h2>
                    <p>General manager</p>
                </div>
                <div
                 data-aos="fade-up"
                 data-aos-duration="1500"
                className=" border p-5 bg-white text-center hover:text-white hover:bg-[#c19d68]">
                    <div className="bg-gray-200">
                        <img className="h-[300px] w-[200px] mx-auto" src="https://i.ibb.co/wcSVKYj/pngwing-com-10.png" alt="" />
                    </div>
                    <h2 className="font-semibold text-2xl mt-3 mb-1">Eren Yunger</h2>
                    <p>General manager</p>
                </div>
                <div
                 data-aos="fade-right"
                 data-aos-duration="1500"
                className=" border p-5 bg-white text-center hover:text-white hover:bg-[#c19d68]">
                    <div className="bg-gray-200">
                        <img className="h-[300px] w-[200px] mx-auto" src="https://i.ibb.co/M8nNyDV/pngwing-com-8.png" alt="" />
                    </div>
                    <h2 className="font-semibold text-2xl mt-3 mb-1">Captain levi</h2>
                    <p>General manager</p>
                </div>
            </div>

        </div>
    );
};

export default MeetEmploys;