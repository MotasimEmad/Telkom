import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const LoadingServiceDetails = () => {
  return (
    <section>
    <div class="container px-6 py-10 mx-auto animate-pulse">
        <h1 class="w-48 h-2 mx-auto bg-gray-200 rounded-lg "></h1>

        <p class="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg"></p>
        <p class="w-64 h-2 mx-auto mt-4 bg-gray-200 rounded-lg sm:w-80"></p>

        <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg md:h-72"></div>

                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg"></p>
            </div>

            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg md:h-72"></div>

                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg"></p>
            </div>

            <div class="w-full ">
                <div class="w-full h-64 bg-gray-300 rounded-lg md:h-72"></div>

                <h1 class="w-56 h-2 mt-4 bg-gray-200 rounded-lg"></h1>
                <p class="w-24 h-2 mt-4 bg-gray-200 rounded-lg"></p>
            </div>
        </div>
    </div>
</section>
  );
};

export default LoadingServiceDetails;
