const AboutUs = () => {
    return (
        <div className="container mx-auto  my-20 flex flex-col lg:flex-row  items-center gap-10">
            <div className="lg:w-1/2">
                <img  src="https://i.ibb.co/svLmhK5/leisure-beautiful-health-garden-landscape.jpg" alt="" />
            </div>
            <div className="lg:w-1/2 space-y-3 px-5">
                <h2 className="text-[#c19d68] font-medium">Task Management Website</h2>
                <h3 className="md:text-3xl text-xl font-semibold text-[#1e1e1e]">LUXURY BEST HOTEL IN CITY CALIFORNIA, USA</h3>
                <p className="text-[#616161]">Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after</p>
                <p>Rapidiously myocardinate cross-platform intellectual capital after marketing model. Appropriately create interactive infrastructures after maintainable are Holisticly facilitate stand-alone inframe</p>
                <div className="bg-[#f8f6f3] p-5 text-sm md:text-lg font-semibold rounded-md">
                    <h2>102/B, Saheprotap, Narsingdi - 1212</h2>
                </div>
                <button className="btn btn-outline">About More</button>
            </div>
        </div>
    );
};

export default AboutUs;