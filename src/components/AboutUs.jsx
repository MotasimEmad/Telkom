const AboutUs = () => {
    return (
        <header class="bg-white text-start">
            <div class="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                <div class="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                    <div class="flex justify-center order-2 mt-6 lg:mt-0 lg:space-y-3 lg:flex-col">
                        <span class="w-3 h-3 mx-2 bg-primary rounded-full lg:mx-0 focus:outline-none"></span>
                        <span class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none"></span>
                        <span class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none"></span>
                        <span class="w-3 h-3 mx-2 bg-gray-300 rounded-full lg:mx-0 focus:outline-none"></span>
                    </div>

                    <div class="max-w-lg lg:mx-12 lg:order-2">
                        <h1 class="text-3xl font-semibold tracking-wide text-gray-800  lg:text-4xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        <p class="mt-4 text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum totam eveniet amet, nostrum quo at nisi, saepe repellat modi eius doloremque animi! Excepturi illo doloremque expedita consectetur numquam culpa iusto.
                        </p>
                    </div>
                </div>

                <div class="mt-8 lg:w-1/2 lg:px-4 lg:mt-0">
                    <img class="object-cover w-full rounded-xl h-96"
                        src="https://images.unsplash.com/photo-1586812416094-a79ae86d22f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Video thumbnail" />
                </div>
            </div>
        </header>
    );
};

export default AboutUs;
