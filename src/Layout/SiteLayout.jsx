import { NavLink, Outlet } from "react-router-dom";
import HomePage from "../Pages/SitePages/HomePage";

function SiteLayout() {
    return (
        <Outlet />
    );
}



export default SiteLayout