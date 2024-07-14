import { useDispatch, useSelector } from "react-redux";
import { getTopServices } from '../redux/servicesSlice';
import { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Services = () => {
    const { isLoading, top_services } = useSelector((state) => state.service);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopServices());
    }, [dispatch]);

    const settings = {
        dots: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        // speed: 3000,
        // autoplaySpeed: 3000,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1930, // Screen width less than 1024px
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 1001, // Screen width less than 768px
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 480, // Screen width less than 480px
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            }
          ]
    };

    return (
        <div class="py-6 sm:py-8 lg:py-16 bg-blue-50 mt-12">
            {isLoading ? <div className="flex items-center justify-center h-screen">
                <div className="flex items-center justify-center">
                    <TailSpin
                        height={50}
                        width={50}
                        color="blue"
                        ariaLabel="loading"
                    />
                </div>
            </div> : <div class="px-4 md:px-8">
                <div>
                    <div class="flex flex-col justify-center">
                        <h2 class="text-2xl font-bold text-slate-700 lg:text-3xl text-center font-ubuntu">We Specialize In</h2>
                        <div className="text-center">
                            <span class="inline-block w-28 h-1 bg-primary rounded-full"></span>
                            <span class="inline-block w-3 h-1 ml-1 bg-primary rounded-full"></span>
                            <span class="inline-block w-1 h-1 ml-1 bg-primary rounded-full"></span>
                        </div>
                    </div>
                </div>

                <div className="mx-16 mt-6">
                    <Slider {...settings}>
                        {top_services.map(service => (
                            <div key={service.id} className="px-1 w-full hover:cursor-grab">
                                <div className="relative rounded-md overflow-hidden shadow-md h-72 xl:h-80">
                                    <img src={service.image} alt={service.name} className="h-full object-cover" />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                                        <h3 className="text-white font-bold text-md">{service.name}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>}
        </div>
    );
};

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full cursor-pointer`}
        onClick={onClick}
        style={{ ...style, display: "block" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-primary"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full cursor-pointer`}
        onClick={onClick}
        style={{ ...style, display: "block" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6  text-primary"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </div>
    );
  };

export default Services;
