import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <div className="container mx-auto text-lg px-6">
            <nav className="py-6 flex  items-center justify-between">
                <div className="">
                    <img src={logo} className="h-20" alt="" />
                </div>
                <ul className="flex items-center gap-6">
                    <li>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/course"}>Course</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/about-us"}>About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>Contact</NavLink>
                    </li>
                </ul>
                <div className=" flex justify-center items-center">
                    <button className="px-6 py-3">Sign In</button>
                    <div className="w-0.5 h-8 bg-black rotate-12"></div>
                    <button className=" ps-6 pe-0 py-3">Register</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
