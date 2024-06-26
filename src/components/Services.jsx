const Services = () => {


    return (
        <div class="py-6 px-8 md:px-24 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                    <div class="flex flex-col">
                        <h2 class="text-2xl font-bold text-slate-700 lg:text-3xl text-start font-ubuntu">Our services</h2>

                        <p class="max-w-screen-sm text-gray-400 text-start font-thin">
                            This is a section of some simple filler text,
                            also known as placeholder text. It shares some characteristics of a real written text.
                        </p>
                    </div>

                    <div class="hidden md:block relative">
                        <div class="absolute -inset-5">
                            <div
                                class="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                            </div>
                        </div>
                        <a href="#" title=""
                            class="relative z-10 inline-flex items-center justify-center w-full px-4 py-1 text-sm text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button">
                            View all services
                        </a>
                    </div>
                </div>

                <div class="md:hidden relative my-4">
                        <div class="absolute -inset-5">
                            <div
                                class="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600">
                            </div>
                        </div>
                        <a href="#" title=""
                            class="relative z-10 inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button">
                            View all services
                        </a>
                    </div>

                <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                    <a href="#"
                        class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                        <img src="https://plus.unsplash.com/premium_photo-1675024226990-36dcb7252c62?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="Photo by Minh Pham" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                        <div
                            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">ICT Services</span>
                    </a>

                    <a href="#"
                        class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                        <img src="https://plus.unsplash.com/premium_photo-1663047651336-76612c1718af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="Photo by Magicle" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                        <div
                            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Call Center Solution</span>
                    </a>

                    <a href="#"
                        class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                        <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="Photo by Martin Sanchez" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                        <div
                            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Software Development</span>
                    </a>

                    <a href="#"
                        class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                        <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="Photo by Lorenzo Herrera" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                        <div
                            class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                        </div>

                        <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">IT Support</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Services;
