const HomeContact = () => {
    return (
        <div className="flex flex-col md:flex-row my-20 gap-20">
            <div className="w-1/2 pl-40 space-y-5">
                <h2 className=" font-light text-sm"> CONTACT US</h2>
                <h3 className="text-4xl leading-[45px]">If You Wish to Learn More <br /> About Our Services, <br /> Please Reach Out to Us.</h3>
                <p className="">
                    LuxeNext – a masterpiece in hospitality! Modern, luxurious, and with a staff dedicated to making your stay memorable. An absolute delight for the discerning traveler.
                </p>
                <button className="btn mt-10 btn-outline font-light">Our Location</button>
            </div>
            <div className="w-1/2 px-10">
                <h2 className="text-sm font-light txt-3xl">RESERVATION FORM</h2>
                <h3 className="text-4xl my-5 mb-7">Ask before booking</h3>
                <form
                    // data-aos="fade-left"
                    // data-aos-duration="1500"
                    className="border border-black py-20 px-10  rounded-md  space-y-7">

                    {/* <input className="" placeholder="message" type="text" /> */}
                    <textarea className="block border-b border-black w-full mb-3 p-2 text-xl text-black" placeholder="message"></textarea>
                    <input className="block border-b border-black w-full mb-3 p-2 text-xl text-black" placeholder="Your Name" type="text" />
                    <input className="block border-b border-black w-full mb-3 p-2 text-xl text-black" placeholder="Type Your Email" type="text" />
                    <button className="btn btn-outline font-light">Submit</button>

                </form>
            </div>
        </div>
    );
};

export default HomeContact;