import React, { useEffect, useState } from 'react';
import videoBg from '../assets/videoBg.mp4';
import logo from '../logo.png';
import logo2 from '../logo2.png';
import '../App.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isContactUsInView, setIsContactUsInView] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const contactUsSection = document.getElementById('contact-us');
      if (contactUsSection) {
        const rect = contactUsSection.getBoundingClientRect();
        // Check if the top of the section is within the viewport
        const inView = rect.top <= window.innerHeight && rect.top >= 0;
        setIsContactUsInView(inView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen md:h-[32rem] overflow-hidden bg-header-section">
      <div className="video-container">
        <div className="overlay"></div>
      </div>

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
              <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>
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

      



      <div className="relative flex flex-col items-center md:justify-center h-full px-20">
        <h1 className="text-white text-4xl md:text-6xl font-bold mt-32 md:mt-20">
          <span className="relative whitespace-nowrap text-primary">
            <svg aria-hidden="true" viewBox="0 0 418 42" className="absolute top-2/3 left-0 h-[0.58em] w-full fill-primary/70" preserveAspectRatio="none">
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative">Telkom</span>
          </span>

        </h1>
        <p className="text-white text-lg font-thin mt-12">
          Where Innovation Meets Connectivity.
        </p>
        <a href="#about-us" className="mt-8 text-white rounded-md px-6 py-4 bg-primary font-semibold uppercase">get started</a>
      </div>
    </div>
  );
};

export default Header;
