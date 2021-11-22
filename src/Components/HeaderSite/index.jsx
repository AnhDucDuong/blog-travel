import { NavLink } from "react-router-dom"
import { Images } from "../../Constants"
import MenuSite from "../MenuSite"

function HeaderSite() {
    return (
        <nav className="bg-gray-700 px-12 py-6 mt-0 w-full">
            <div className="container mx-auto flex items-center">
                <div className="flex text-white font-extrabold">
                    <NavLink to="/" className="flex text-white text-base no-underline hover:text-white hover:no-underline">
                        <img src={Images.Logo} alt="" />
                    </NavLink>
                </div>

                <div className="flex text-lg ml-[100px]">
                    <MenuSite />
                </div>
            </div>
        </nav>
    )
}

export default HeaderSite