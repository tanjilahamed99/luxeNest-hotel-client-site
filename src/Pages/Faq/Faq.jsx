import { Helmet } from "react-helmet";
import Footer from "../../Shered/Footer/Footer";
import Navbar from "../../Shered/Navbar/Navbar";

const Faq = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>FAQ LuxeNest Hotel</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Navbar></Navbar>

            <div className="my-20">
                <h2 className="text-3xl text-center font-semibold mb-5">Most Common Question ABout Us</h2>
                <div className="space-y-4 w-[80%] mx-auto">
                    <div tabIndex={0} className="collapse border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            What types of rooms do you offer?
                        </div>
                        <div className="collapse-content">
                            <p>We offer a variety of room types, including standard rooms, suites, and deluxe rooms to cater to different preferences and budgets.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            What are the rates for your rooms?
                        </div>
                        <div className="collapse-content">
                            <p> Our room rates vary depending on the type of room, the time of year, and any special promotions we may have. It is best to check our website or contact our reservations team for current rates.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            Can I book a room with a specific view (e.g., ocean view or city view)?
                        </div>
                        <div className="collapse-content">
                            <p> Yes, we offer rooms with various views, and you can request a specific view when making your reservation, subject to availability</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            Are there smoking and non-smoking rooms available?
                        </div>
                        <div className="collapse-content">
                            <p> Answer: We are a non-smoking hotel, so all our rooms are smoke-free. Smoking is not permitted in any of our rooms or indoor areas.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            What amenities are included in the room?
                        </div>
                        <div className="collapse-content">
                            <p>  Our rooms come with standard amenities such as a private bathroom, TV, Wi-Fi, and a minibar. Suites may offer additional amenities like a separate living area and kitchenette.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse border border-base-300 bg-base-200">
                        <div className="collapse-title text-xl font-medium">
                            Is breakfast included in the room rate?
                        </div>
                        <div className="collapse-content">
                            <p> Our room rates may or may not include breakfast, depending on the package you choose. You can check the details when making your reservation.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Faq;