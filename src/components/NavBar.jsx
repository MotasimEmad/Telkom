import React, { useEffect, useState } from 'react';
import logo2 from '../logo2.png';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isContactUsInView, setIsContactUsInView] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  

  useEffect(() => {
    const handleScroll = () => {
      const serviceIdPattern = /^\/service\/[0-9a-f-]+$/;
      const shouldScroll = window.scrollY > 50 || location.pathname === '/about-us' || location.pathname === '/services' || serviceIdPattern.test(location.pathname);
      setIsScrolled(shouldScroll);

      const contactUsSection = document.getElementById('contact-us');
      if (contactUsSection) {
        const rect = contactUsSection.getBoundingClientRect();
        const inView = rect.top <= window.innerHeight && rect.top >= 0;
        setIsContactUsInView(inView);
      }
    };

    handleScroll(); // Set the initial state based on the current location and scroll position
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

    return (
      <nav className={`px-16 h-12 md:h-28 fixed-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto flex items-center h-full">
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex items-center">
            <img src={logo2} alt="Logo" className="h-20 rounded-md" />
          </div>
          <div className="md:flex space-x-6 font-normal text-lg ml-6">
            <Link to="/" className={`nav-link ${location.pathname === '/' && !isContactUsInView ? 'active' : ''}`}>
              Home
              <span className="underline"></span>
            </Link>
            <Link to="/about-us" className={`nav-link ${location.pathname === '/about-us' && !isContactUsInView ? 'active' : ''}`}>
              About us
              <span className="underline"></span>
            </Link>
            <Link to="/services" className={`nav-link ${location.pathname === '/services' || '/service' ? 'active' : ''}`}>
              Services
              <span className="underline"></span>
            </Link>
            <a href="#contact-us" className={`nav-link ${isContactUsInView ? 'active' : ''}`}>
              Contact us
              <span className="underline"></span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-6">
      <div className="flex md:hidden items-center">
        <div className="flex items-center">
          <img src={logo2} alt="Logo" className="h-10" />
        </div>
      </div>


      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-primary hover:text-primary focus:outline-none"
        >
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
    </div>
    </nav>
    );
};

export default NavBar;
