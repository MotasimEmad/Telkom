import logo from "../logo.png";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full p-4 bg-white bg-opacity-10 backdrop-blur-md z-50 flex items-center justify-between">
            <img src={logo} className="h-6" />
            <ul className="flex justify-center space-x-8">
                <li><a href="#home" className="font-thin text-sm text-white hover:text-gray-300">Home</a></li>
                <li><a href="#about" className="font-thin text-sm text-white hover:text-gray-300">About</a></li>
                <li><a href="#services" className="font-thin text-sm text-white hover:text-gray-300">Services</a></li>
                <li><a href="#contact" className="font-thin text-sm text-white hover:text-gray-300">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
