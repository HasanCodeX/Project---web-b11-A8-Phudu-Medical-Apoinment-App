import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-primary underline font-semibold"
      : "hover:text-primary";

  return (
    <footer className="bg-white text-center pt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
   
        <Link
          to="/"
          className="flex justify-center items-center gap-2 text-xl font-bold mb-4"
        >
          <img src={logo} alt="logo" className="w-6 h-6" />
          Phudu
        </Link>

      
        <div className="flex justify-center flex-wrap gap-6 mb-6 text-sm text-gray-600">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/bookings" className={navLinkStyle}>
            My-Bookings
          </NavLink>
          <NavLink to="/blogs" className={navLinkStyle}>
            Blogs
          </NavLink>
          <NavLink to="/contact" className={navLinkStyle}>
            Contact Us
          </NavLink>
        </div>

     
        <hr className="mb-6 border-gray-400 w-full mx-auto" />

     
        <div className="flex justify-center gap-4 text-xl pb-10 flex-wrap">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="text-blue-600 hover:scale-110 duration-200" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaXTwitter className="text-black hover:scale-110 duration-200" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn className="text-sky-700 hover:scale-110 duration-200" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube className="text-red-600 hover:scale-110 duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
