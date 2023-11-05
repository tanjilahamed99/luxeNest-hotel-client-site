const Footer = () => {
    return (
        <div>
            <footer className="footer p-10  text-base-content">
                <aside>
                    <img className="w-20" src="https://i.ibb.co/rbRG54Z/download.png" alt="" />
                    <h2 className="font-bold text-2xl">LuxeNest</h2>
                    <p>Luxury Hotel</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <hr className="border border-black" />
            <div className="footer footer-center p-4 text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by <span className="font-semibold">LuxeNest Hotel</span></p>
                </aside>
            </div>
        </div>


    );
};

export default Footer;