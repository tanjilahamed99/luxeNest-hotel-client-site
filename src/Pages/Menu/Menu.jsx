import Footer from "../../Shered/Footer/Footer";
import Navbar from "../../Shered/Navbar/Navbar";
import Appetizers from "./Appetizers/Appetizers";
import Desert from "./Desert/Desert";
import Dishes from "./Dishes/Dishes";
import MenuBanner from "./MenuBanner/MenuBanner";
import MenuIntro from "./MenuIntro/MenuIntro";

const Menu = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MenuBanner></MenuBanner>
            <MenuIntro></MenuIntro>
            <Appetizers></Appetizers>
            <Dishes></Dishes>
            <Desert></Desert>
            <Footer></Footer>
        </div>
    );
};

export default Menu;