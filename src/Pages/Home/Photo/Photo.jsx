const Photo = () => {
    return (
        <div className="my-20 w-full h-[300px] md:h-[600px] bg-cover bg-center bg-no-repeat grid grid-cols-2"
            style={{ backgroundImage: 'url(https://i.ibb.co/hKb2hZY/hotel-9.webp)' }}
        >
            <div className="hidden md:flex"></div>
            <div className="text-center bg-black  col-span-2 md:col-span-1 text-white  bg-opacity-40">
                <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    className="md:top-[33%] top-5 relative space-y-5">
                    <img className="w-40 mx-auto" src="https://i.ibb.co/dB7Hhyg/pngwing-com-23.png" alt="" />
                    <h2 className="lg:text-3xl text-xl font-bold ">Certificate of Excellence Based <br /> on 329 Reviews</h2>
                    <button className="btn btn-outline font-light text-white">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Photo;