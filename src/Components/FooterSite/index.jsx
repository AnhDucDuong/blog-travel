import { NavLink } from "react-router-dom"
import { Images } from "../../Constants"
import MenuSite from "../MenuSite"

function FooterSite() {
    return (
        <footer className="bg-gray-700 py-[15px]">
            <div className="container max-w-6xl mx-auto flex-col justify-center items-center px-2 py-8">
                <div className="flex justify-center">
                    <NavLink to="/" className="text-white text-base no-underline hover:text-white hover:no-underline">
                        <img src={Images.Logo} alt="" />
                    </NavLink>
                </div>

                <div className="flex text-lg items-center justify-center my-[50px]">
                    <MenuSite />
                </div>

                <div className="mx-auto">
                    <p className="text-center text-[12pt] font-thin text-white">
                        ©2021 TraveLove Blog. <br /> All rights reserved. Disclaimer
                        Crafted with love by <span className="text-[#ca5c5c]">Duong Duc Anh</span>.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default FooterSite