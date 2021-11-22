import { NavLink } from "react-router-dom"

function MenuSite() {
    return (
        <ul className="fontTeko text-[18pt] tracking-wide flex gap-[10px] justify-between flex-1 md:flex-none items-center">
            <li>
                <NavLink className="inline-block py-2 px-4 text-white no-underline" to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="inline-block py-2 px-4 text-white no-underline" to="/articles">Articles</NavLink>
            </li>
            <li>
                <NavLink className="inline-block py-2 px-4 text-white no-underline" to="/about">About Us</NavLink>
            </li>
            <li>
                <NavLink className="inline-block py-2 px-4 text-white no-underline" to="/contact">Contact</NavLink>
            </li>
            <li>
                <NavLink className="inline-block py-2 px-4 text-white no-underline" to="/media">Media</NavLink>
            </li>
            <li>
                <NavLink className="inline-block py-2 px-4 text-white no-underline" to="/admin/dashboard">Dashboard</NavLink>
            </li>
        </ul>
    )
}

export default MenuSite