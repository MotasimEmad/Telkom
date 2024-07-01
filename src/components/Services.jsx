import { useDispatch, useSelector } from "react-redux";
import { getTopServices } from '../redux/servicesSlice';
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Services = () => {
    const { isLoading, top_services } = useSelector((state) => state.service);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopServices());
    }, [dispatch]);

    return (
        <div class="py-6 px-8 md:px-24 sm:py-8 lg:py-12 bg-gray-100">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                    <div class="flex flex-col">
                        <h2 class="text-2xl font-bold text-slate-700 lg:text-3xl text-start font-ubuntu">Our services</h2>

                        <p class="max-w-screen-sm text-gray-600 text-start font-thin">
                            This is a section of some simple filler text,
                            also known as placeholder text. It shares some characteristics of a real written text.
                        </p>
                    </div>

                    <div class="hidden md:block relative">

                        <Link to="/services"
                            class="z-10 inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white transition-all duration-200 bg-primary border-2 border-transparent sm:w-auto rounded-md font-pj  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            role="button">
                            View all services
                        </Link>
                    </div>
                </div>

                <div class="md:hidden relative my-4">

                    <Link to="/services"
                        class="z-10 inline-flex items-center justify-center w-full px-4 py-2 text-sm text-white transition-all duration-200 bg-primary border-2 border-transparent sm:w-auto rounded-md font-pj  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button">
                        View all services
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                    {top_services.map((service, index) => (
                         <Link to={`/service/${service.id}`}
                            key={service.id}
                            href="#"
                            className={`group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg ${index === 1 || index === 2 ? 'md:col-span-2 md:h-80' : 'md:h-80'
                                }`}
                        >
                            <img
                                src={service.image}
                                loading="lazy"
                                alt={`Photo by ${service.name}`}
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{service.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
