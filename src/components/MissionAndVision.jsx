const MissionAndVision = () => {
    return (
        <section class="bg-gray-100">
    <div class="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
        <div class="flex justify-center xl:w-1/2">
            <img class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-md" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />
        </div>

        <div class="mx-4 flex items-center gap-2">
        <div class="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 class="text-xl font-semibold tracking-tight text-gray-800 xl:text-3xl ">
                Our Mission
            </h2>

            <p class="block max-w-2xl mt-4 text-gray-500 text-start text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut corporis esse dolorum, illum, consectetur earum provident alias dolore omnis quis tempore voluptatum excepturi ea numquam? Aperiam fugiat consequuntur nostrum odio. </p>
        </div>

        <div class="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
            <h2 class="text-xl font-semibold tracking-tight text-gray-800 xl:text-3xl ">
                Our Vision
            </h2>

            <p class="block max-w-2xl mt-4 text-gray-500 text-start text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut corporis esse dolorum, illum, consectetur earum provident alias dolore omnis quis tempore voluptatum excepturi ea numquam? Aperiam fugiat consequuntur nostrum odio. </p>
        </div>
        </div>
    </div>
</section>
    );
};

export default MissionAndVision;
