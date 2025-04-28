import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-primary underline font-semibold"
      : "hover:text-primary";

  return (
    <div className="bg-base-200 shadow">
      <div className="navbar max-w-7xl mx-auto px-4 relative justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 text-xl font-bold">
            <img src={logo} alt="logo" className="w-8 h-8" />
            Phudu
          </Link>
        </div>

        
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-x-6">
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

       
        <div className="hidden lg:flex items-center">
          <button className="btn btn-primary rounded-full px-6">
            Emergency
          </button>
        </div>

      
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/" className={navLinkStyle}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/bookings" className={navLinkStyle}>
                My-Bookings
              </NavLink>
            </li>
            <li>
              <NavLink to="/blogs" className={navLinkStyle}>
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkStyle}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
