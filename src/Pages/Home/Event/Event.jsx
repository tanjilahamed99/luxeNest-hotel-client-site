const Event = () => {
    return (
        <div className="flex lg:flex-row flex-col gap-10 px-10 my-20">
            <div className="lg:w-[60%]">
                <h2 className="md:text-[80px] text-4xl text-[#ccc1bd] font-light md:leading-[80px]">Events & <br /> Activities</h2>
                <p className="text-[#797776] mt-10 lg:pl-40">
                    Welcome to LuxeNext, where luxury meets comfort in every detail. Indulge in our meticulously designed hotel rooms, featuring modern aesthetics, plush furnishings, and state-of-the-art amenities. Your retreat at LuxeNext promises a seamless blend of sophistication and relaxation, offering a haven of opulence that exceeds expectations. Immerse yourself in a world of refined elegance and unparalleled comfort at LuxeNext.
                </p>
            </div>
            <div className="lg:w-[40%]">
                <h1 className="text-sm font-bold text-[#ccc1bd]">SUBMIT YOUR EMAIL TO GET THE LATEST OFFERS</h1>
                <h2 className="text-4xl font-semibold mt-4 mb-8">Sign up for news</h2>
                <div
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    className="border border-black md:p-20 p-10 rounded-md  space-y-5">
                    <input className="block border-b border-black w-full mb-3 p-2 md:text-xl text-black" placeholder="Type Your Email" type="text" />
                    <button className="btn btn-outline font-light">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Event;