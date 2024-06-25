const MissionAndVision = () => {
    return (
        <section class="bg-white">
    <div class="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
        <div class="flex justify-center xl:w-1/2">
            <img class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-md" src="https://images.unsplash.com/photo-1557425631-f132f06f4aa1?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div class="mx-4 flex items-center gap-2">
        <div class="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 class="text-xl font-semibold tracking-tight text-gray-800 xl:text-3xl uppercase ">
                Our <span class="text-primary">Mission</span>
            </h2>

            <p class="block max-w-2xl mt-4 text-gray-500 text-start text-sm">
            We are committed to maintaining the highest standards of quality and reliability
in all our services. With an unwavering dedication to originality, we aim to shape
the future of connectivity by helping our clients achieve their technology goals. </p>
        </div>

        <div class="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 class="text-xl font-semibold tracking-tight text-gray-800 xl:text-3xl uppercase">
                Our <span class="text-primary">Vision</span>
            </h2>

            <p class="block max-w-2xl mt-4 text-gray-500 text-start text-sm">
            We aspire to be a globally recognized ICT solutions provider known for our innovation, high-quality standards, and outstanding service. At Telkom, we aim to set new benchmarks in the telecommunications industry, making a lasting impact on connectivity and fostering growth in the digital era.</p>
        </div>
        </div>
    </div>
</section>
    );
};

export default MissionAndVision;
