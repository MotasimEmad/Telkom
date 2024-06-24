const Services = () => {
    return (
        <section class="pattern mt-10">
        <div class="container px-6 py-8 mx-auto">
            <div className="flex justify-center my-4">
                <h1 class="text-3xl font-semibold">Our Services</h1>
            </div>
            <div class="grid grid-cols-1 gap-8 xl:gap-16 md:grid-cols-2 xl:grid-cols-3 mt-12">
                <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
                    <span class="inline-block p-3 text-white bg-primary rounded-full ">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize">Lorem ipsum, dolor</h1>

                    <p class="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores, corporis commodi inventore tenetur.				
                    </p>
                </div>

                <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
                    <span class="inline-block p-3 text-white bg-primary rounded-full ">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                        </svg>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize">Lorem ipsum, dolor</h1>

                    <p class="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores, corporis commodi inventore tenetur.				
                    </p>
                </div>

                <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl">
                    <span class="inline-block p-3 text-white bg-primary rounded-full ">
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </span>

                    <h1 class="text-xl font-semibold text-gray-700 capitalize">Lorem ipsum, dolor</h1>

                    <p class="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolores, corporis commodi inventore tenetur.				
                    </p>
                </div>
            </div>

            <button className="mt-6 text-white bg-gradient-to-r from-sky-900 to-gray-900 rounded-full p-2">View all services</button>
        </div>
    </section>
    );
};

export default Services;
