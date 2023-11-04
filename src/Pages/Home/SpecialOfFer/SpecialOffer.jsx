const SpecialOffer = () => {
    return (
        <div className="my-20 container mx-auto">
            <h2 className="text-[#1e1e1e] text-3xl font-semibold mb-2 text-center">Special Offers</h2>
            <p className="mx-96 text-[#616161] text-center ">We provide seasonal special discounts for selected rooms. Let us know the room you are interested and let’s make it happen.</p>
            <div className="mt-5">
                <div className="bg-center bg-cover w-[300px] h-[300px]" style={{ backgroundImage: 'url(https://i.ibb.co/bFKdgVW/manuel-moreno-DGa0-LQ0y-DPc-unsplash.jpg)' }}>
                    <div className="text- text-center mb-40">
                        <h2 className="text-2xl font-bold pt-8">LuxeNest</h2>
                        <p>Luxury Hotel</p>
                    </div>
                    <p className="text-white text-center text-xl font-bold">Dabble Room 20%</p>
                    <div className="details space-y-3 -mt-[10000px] ">
                        <h2>Dabble Room</h2>
                        <p>Mauris fermentum dictum magna. Selaoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna...</p>
                        <button className="btn btn-outline w-fit">View Detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;