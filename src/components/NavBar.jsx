import React, { useEffect, useState } from 'react';
import logo2 from '../logo2.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import { getServices } from '../redux/servicesSlice';
import { useDispatch, useSelector } from 'react-redux';


const scrollToContactUs = () => {
  // Scroll to the "contact-us" section
  const contactUsSection = document.getElementById('contact-us');
  if (contactUsSection) {
    contactUsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [isContactUsInView, setIsContactUsInView] = useState(false);
  const { isLoading, services } = useSelector((state) => state.service);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const servicesList = services.map((service) => (
    <Link to={`/service/${service.id}`} className="text-start text-sm block px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-gray-100 border-b-2 border-gray-100">
      {service.name}
    </Link>
  ));

  const DropdownMenu = ({ setIsDropdownOpen }) => {
    return (
      <div
        className="absolute bg-white border rounded shadow-lg mt-2 w-48"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <ul className="py-2">
          <li>
            {isLoading ? 'loading ...' : servicesList}
          </li>
        </ul>
      </div>
    );
  };

  const timeoutRef = React.useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

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

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const handleContactUsClick = (e) => {
    e.preventDefault();
    if (window.location.pathname === '/') {
      scrollToContactUs();
    } else {
      navigate('/', { replace: true });
      setTimeout(scrollToContactUs, 100);
    }
  };

  return (
    <>
      <nav className={`hidden md:block px-16 h-12 md:h-28 fixed-nav ${isScrolled ? 'scrolled' : ''}`}>
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
              <div
                className={`nav-link ${location.pathname.startsWith('/service') ? 'active' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/services">
                  Services
                  <span className="underline"></span>
                </Link>
                {isDropdownOpen && <DropdownMenu setIsDropdownOpen={setIsDropdownOpen} />}
              </div>
              <a href="/" onClick={handleContactUsClick} className={`nav-link ${isContactUsInView ? 'active' : ''}`}>
                Contact us
                <span className="underline"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="block md:hidden">
        <nav className={`flex items-center justify-between px-6 fixed-nav ${isScrolled ? 'scrolled' : ''}`}>
          <div className="flex items-center">
            <img src={logo2} alt="Logo" className="h-12 rounded-md" />
          </div>
          <button
            onClick={toggleMenu}
            className={`text-primary hover:text-primary focus:outline-none ${isScrolled ? 'scrolled-button' : ''}`}
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
          <div className={`side-menu ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleMenu} className="close-button">
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
            <div className="menu md:flex font-normal text-lg py-12 px-4">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                Home
                <span className="underline"></span>
              </Link>
              <Link to="/about-us" className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`}>
                About us
                <span className="underline"></span>
              </Link>
              <div
                className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/services">
                  Services
                  <span className="underline"></span>
                </Link>
                {isDropdownOpen && <DropdownMenu setIsDropdownOpen={setIsDropdownOpen} />}
              </div>
              <a href="/" onClick={handleContactUsClick} className={`nav-link ${location.hash === '#contact-us' ? 'active' : ''}`}>
                Contact us
                <span className="underline"></span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
