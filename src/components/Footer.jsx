import logo from "../logo.png";

const Footer = () => {
    return (
        <footer class="bg-gradient-to-r from-sky-900 to-gray-900">
            <div class="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
                <a href="#">
                    <img class="w-auto h-7" src={logo} alt="logo" />
                </a>

            
                <p class="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">© Copyright 2024 TELKOM. </p>
            </div>
        </footer>
    );
};

export default Footer;
