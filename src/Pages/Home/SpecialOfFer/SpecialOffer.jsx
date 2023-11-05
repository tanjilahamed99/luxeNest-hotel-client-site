const SpecialOffer = () => {
    return (
        <div className="my-20 container mx-auto">
            <h2 className="text-[#1e1e1e] text-3xl font-semibold mb-2 text-center">Special Offers</h2>
            <p className="mx-96 text-[#616161] text-center ">We provide seasonal special discounts for selected rooms. Let us know the room you are interested and let’s make it happen.</p>
            <div className="mt-5 flex items-center justify-center gap-10 text-black">
                <div className="bg-center bg-cover w-[300px] h-[300px] hero" style={{ backgroundImage: 'url(https://i.ibb.co/4pm06bY/markus-spiske-g5-ZIXjz-RGds-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                    <div className="text-center text-white">
                        <div className=" -mt-28 mb-36">
                            <h2 className="text-2xl font-bold ">LuxeNest</h2>
                            <p>Luxury Hotel</p>
                        </div>
                        <p className=" text-center text-xl font-bold">Dabble Room 20%</p>
                        <div className="details space-y-3 -mt-[10000px] ">
                            <h2>Dabble Room</h2>
                            <p>Mauris fermentum dictum magna. Selaoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna...</p>
                            <button className="btn btn-outline w-fit">View Detail</button>
                        </div>
                    </div>
                </div>
                <div className="bg-center bg-cover w-[300px] h-[300px] hero" style={{ backgroundImage: 'url(https://i.ibb.co/j6v90ZJ/kenny-eliason-i-Aftd-Icgp-Fc-unsplash.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="text-center text-white">
                        <div className="-mt-28 mb-36 text-center">
                            <h2 className="text-2xl font-bold ">LuxeNest</h2>
                            <p>Luxury Hotel</p>
                        </div>
                        <p className=" text-center text-xl font-bold">Hanemon Rooms 40%</p>
                        <div className="details space-y-3 -mt-[10000px] ">
                            <h2>Dabble Room</h2>
                            <p>Mauris fermentum dictum magna. Selaoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna...</p>
                            <button className="btn btn-outline w-fit">View Detail</button>
                        </div>
                    </div>
                </div>
                <div className="bg-center bg-cover w-[300px] h-[300px] hero" style={{ backgroundImage: 'url(https://i.ibb.co/dM34pVy/frames-for-your-heart-Fqqi-Av-Jejto-unsplash.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className=" text-center text-white">
                        <div className="-mt-28 mb-36">
                            <h2 className="text-2xl font-bold text-center mx-auto">LuxeNest</h2>
                            <p className="text-center">Luxury Hotel</p>
                        </div>
                        <p className="text-xl font-bold">Family Room 30%</p>
                        <div className="details space-y-3 -mt-[10000px] ">
                            <h2>Dabble Room</h2>
                            <p>Mauris fermentum dictum magna. Selaoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna...</p>
                            <button className="btn btn-outline w-fit">View Detail</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;