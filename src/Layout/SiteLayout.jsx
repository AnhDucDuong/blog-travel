import { Outlet } from "react-router-dom";
import FooterSite from "../Components/FooterSite";

function SiteLayout() {
    return (
        <div>
            <Outlet />
            <FooterSite />
        </div>
    );
}



export default SiteLayout