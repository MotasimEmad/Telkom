import { useDispatch, useSelector } from "react-redux";
import { getServiceById } from '../redux/serviceDetailsSlice';
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { formatDate } from "../components/DateUtils";
import NavBar from "../components/NavBar";
import Loading from "../components/Loading";

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const { isLoading, service, error } = useSelector((state) => state.serviceDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServiceById(id));
  }, [dispatch, id]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      {isLoading ? (
        <Loading />
      ) :
        <div className="font-sans">
          <NavBar />
          <section
            className="h-72 flex items-center justify-center bg-gradient-to-r from-sky-900 to-gray-900"
          >
            <div className="flex flex-col">
              <div className="text-white text-2xl font-ubuntu font-bold">{service.name}</div>
              <div class="flex items-center py-4 text-sm font-bold">
                <Link to="/" class="text-white font-semibold">
                  Home
                </Link>

                <span class="mx-1 text-white rtl:-scale-x-100">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </span>

                <a href="#" class="text-white">
                  {service.name}
                </a>
              </div>
            </div>
          </section>


          <div className="p-6 mx-auto">

            <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                <div className="bg-gray-100 rounded-xl">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-96 rounded-md "
                  />
                </div>
              </div>

              <div className="lg:col-span-2 text-start mt-4">
                <div className="flex justify-between">
                  <h2 className="text-xl md:text-2xl font-semibold font-ubuntu text-gray-800 text-start">
                    {service.name}
                  </h2>

                  <p className="text-gray-500 text-sm">
                    {formatDate(service.created_at)}
                  </p>
                </div>

                <p className="text-gray-500 my-8 text-sm md:text-md">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      }
    </section>
  );
};

export default ServiceDetailsPage;
