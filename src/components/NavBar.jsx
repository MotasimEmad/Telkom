import { useState } from "react";
import logo from '../logo.png';
import '../App.css';
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
    return (
      <nav className='scrolled bg-opacity-50 w-full px-4 md:px-16'>
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex items-center">
            <div className="flex items-center bg-white p-3 rounded-lg">
              <Link to="/"><img src={logo} alt="Logo" className="h-8" /></Link>
            </div>
          </div>
          <div className="md:flex space-x-6 font-normal text-lg ml-6">
            <Link to="/" className="text-black hover:text-primary">Home</Link>
            <Link to="/services" className="text-primary font-semibold">Services</Link>
            <a href="#" className="text-black hover:text-primary">Contact us</a>
          </div>
          <button className="text-white rounded-md px-4 py-2 bg-primary font-semibold uppercase">Get a quote</button>
        </div>

        <div className="flex md:hidden items-center">
            <div className="flex items-center bg-white p-3 rounded-lg">
              <img src={logo} alt="Logo" className="h-6" />
            </div>
          </div>
        {/* Menu icon for smaller screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-primary hover:text-primary focus:outline-none"
          >
            {/* Icon for menu */}
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Sidebar for smaller screens */}
        <div
          className={`text-start w-2/3 md:hidden fixed inset-y-0 right-0 z-50 bg-white shadow-lg transform transition-transform ease-in-out duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Close button inside sidebar */}
          <button
            onClick={toggleMenu}
            className="absolute top-0 left-0 m-4 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* Sidebar content */}
          <div className="py-8 px-4 mt-6">
            <Link href="#" className="block text-gray-800 hover:text-primary py-2">
              Home
            </Link>
            <Link to="/services" className="block text-primary font-semibold py-2">
              Services
            </Link>
            <a href="#" className="block text-gray-800 hover:text-primary py-2">
              Contact us
            </a>
            <button className="text-white rounded-md px-4 py-2 bg-primary font-semibold uppercase mt-4">
              Get a quote
            </button>
          </div>
        </div>
      </div>
    </nav>
    );
};

export default NavBar;
