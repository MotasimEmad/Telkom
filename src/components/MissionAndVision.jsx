const MissionAndVision = () => {
    return (
        <section class="container px-12 md:px-24 py-8 mx-auto lg:py-16">
            <div class="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2">
                <div class="p-8 space-y-3 bg-white shadow-2xl rounded-xl text-start">
                    <div className="flex items-center justify-between">
                        <h1 class="text-2xl font-semibold text-slate-700 capitalize font-ubuntu">Our mission</h1>

                        <span class=" p-2 text-blue-500 rounded-lg shrink-0 bg-blue-100/80">
                            <svg width="20" height="20" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"></path>
                            </svg>
                        </span>
                    </div>

                    <p class="text-gray-500 text-start font-thin">
                        We are committed to maintaining the highest standards of quality and reliability in all our services. With an unwavering dedication to originality, we aim to shape the future of connectivity by helping our clients achieve their technology goals.
                    </p>
                </div>

                <div class="p-8 space-y-3 bg-white shadow-2xl rounded-xl text-start">

                    <div className="flex items-center justify-between">
                        <h1 class="text-2xl font-semibold text-slate-700 capitalize font-ubuntu">Our vision</h1>


                        <span class=" p-2 text-blue-500 rounded-lg shrink-0 bg-blue-100/80">
                            <svg width="20" height="20" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                            </svg>
                        </span>
                    </div>

                    <p class="text-gray-400 text-start font-thin">
                        We aspire to be a globally recognized ICT solutions provider known for our innovation, high-quality standards, and outstanding service. At Telkom, we aim to set new benchmarks in the telecommunications industry, making a lasting impact on connectivity and fostering growth in the digital era.
                    </p>
                </div>


            </div>
        </section>

    );
};

export default MissionAndVision;
