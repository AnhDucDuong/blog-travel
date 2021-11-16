import { NavLink, Outlet } from "react-router-dom";
import FooterSite from "../Components/FooterSite";
import HomePage from "../Pages/SitePages/HomePage";

function SiteLayout() {
    return (
        <div>
            <Outlet />
            <FooterSite />
        </div>
    );
}



export default SiteLayout