import { NavLink } from "react-router-dom"
import { Images } from "../../Constants"

function HeaderSite() {
    return (
        <nav className="bg-[#ca5c5c] px-12 py-6 mt-0 w-full">
            <div className="container mx-auto flex items-center">
                <div className="flex text-white font-extrabold">
                    <NavLink to="/" className="flex text-white text-base no-underline hover:text-white hover:no-underline">
                        <img src={Images.Logo} alt="" />
                    </NavLink>
                </div>

                <div className="flex text-lg ml-[100px]">
                    <ul className="list-reset flex gap-[10px] justify-between flex-1 md:flex-none items-center">
                        <li>
                            <NavLink className="inline-block py-2 px-2 text-white no-underline" to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="inline-block py-2 px-2 text-white no-underline" to="/article">Article</NavLink>
                        </li>
                        <li>
                            <NavLink className="inline-block py-2 px-2 text-white no-underline" to="/area">Area</NavLink>
                        </li>
                        <li>
                            <NavLink className="inline-block py-2 px-2 text-white no-underline" to="/about">About Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderSite