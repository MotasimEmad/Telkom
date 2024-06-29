import React, { useEffect, useState } from 'react';
import videoBg from '../assets/videoBg.mp4';
import logo from '../logo.png';
import logo2 from '../logo .jpg';
import '../App.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="video-container">
        <video src={videoBg} autoPlay loop muted className="absolute inset-0 w-full h-full object-cover"></video>
        <div className="overlay"></div>
      </div>

      <nav className={`fixed-nav ${isScrolled ? 'scrolled' : ''} bg-opacity-50 absolute w-full px-4 md:px-16`}>
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo and regular nav items for larger screens */}
          <div className="hidden md:flex items-center justify-between w-full">
            <div className="flex items-center">
              <div className="flex items-center bg-white p-3 rounded-lg">
                <img src={logo} alt="Logo" className="h-8" />
              </div>
            </div>
            <div className="md:flex space-x-6 font-normal text-lg ml-6">
              <a href="#" className=" hover:text-primary">Home</a>
              <a href="#" className=" hover:text-primary">About us</a>
              <a href="#" className=" hover:text-primary">Services</a>
              <a href="#" className=" hover:text-primary">Contact us</a>
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
              <a href="#" className="block text-gray-800 hover:text-primary py-2">
                Home
              </a>
              <a href="#" className="block text-gray-800 hover:text-primary py-2">
                About us
              </a>
              <a href="#" className="block text-gray-800 hover:text-primary py-2">
                Services
              </a>
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

      <div className="relative flex flex-col items-center md:justify-center h-full">
        <h1 className="text-white text-4xl md:text-7xl font-bold mt-32 md:mt-20">
          <span class="relative whitespace-nowrap text-primary">
            <svg aria-hidden="true" viewBox="0 0 418 42" class="absolute top-2/3 left-0 h-[0.58em] w-full fill-primary/70" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path></svg>
            <span class="relative">Telkom</span></span> UAE
        </h1>
        <p className="text-white text-lg font-thin mt-12">
          Elevate Your Digital Presence with Telkom UAE – Where Innovation Meets Connectivity.
        </p>
        <button className="mt-8 text-white rounded-md px-6 py-4 bg-primary font-semibold uppercase">get started</button>
      </div>
    </div>
  );
};

export default Header;
