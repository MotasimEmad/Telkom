import logo from "../logo.png";

const AboutUs = () => {
    return (
        <header class="bg-gradient-to-r from-cyan-50 to-cyan-50 text-start">
            <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2 lg:gap-4">
                    <div class="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
                        <span class="w-3 h-3 mx-2 bg-primary rounded-full lg:mx-0 focus:outline-none"></span>
                        <span class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none"></span>
                        <span class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none"></span>
                        <span class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none"></span>
                    </div>

                    <div class="max-w-lg lg:mx-12 lg:order-2">
                        <h1 class="text-3xl font-semibold tracking-wide text-gray-800  lg:text-4xl uppercase">About <span class="text-primary">US</span></h1>
                        <p class="mt-4 text-gray-600">
                            At <span class="text-primary font-bold">Telkom</span>, we are a pioneering Information and Communications Technology
                            (ICT) provider dedicated to delivering cutting-edge network and communication
                            services. Founded on innovation and quality, we focus on meeting our customers'

                            diverse needs with excellence and reliability. Our team of highly experienced pro-
                            fessionals with deep expertise in ICT ensures exceptional service and builds

                            strong relationships with our clients.
                        </p>
                    </div>
                </div>

                <div class="mt-8 lg:w-1/2 lg:px-16 lg:mt-0">
                    <img class="h-20"
                        src={logo}
                        alt="Video thumbnail" />
                </div>
            </div>
        </header>
    );
};

export default AboutUs;
