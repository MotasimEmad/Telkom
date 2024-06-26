
const AboutUs = () => {
    return (
        <section class="container px-12 md:px-24 py-8 mx-auto lg:py-16 text-start" id="about">
            <div class="lg:flex lg:items-center lg:-mx-4">
                <div class="lg:w-1/2 lg:px-4">
                    <h3 class="text-xl text-slate-700 md:text-5xl font-ubuntu font-semibold">Who we are ?</h3>

                    <p class="mt-6 text-gray-400 font-thin">
                        At <span class="text-primary font-bold">Telkom</span>, we are a pioneering Information and Communications Technology
                        (ICT) provider dedicated to delivering cutting-edge network and communication
                        services. Founded on innovation and quality, we focus on meeting our customers'

                        diverse needs with excellence and reliability. Our team of highly experienced pro-
                        fessionals with deep expertise in ICT ensures exceptional service and builds

                        strong relationships with our clients.
                    </p>
                </div>
                <div class="mt-8 lg:w-1/2 lg:px-4 lg:mt-0">
                    <img class="object-cover w-full rounded-xl h-96"
                        src="https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        alt="Video thumbnail" />
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
