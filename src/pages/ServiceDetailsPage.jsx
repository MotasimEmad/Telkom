import { useDispatch, useSelector } from "react-redux";
import { getServiceById } from '../redux/serviceDetailsSlice';
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { formatDate } from "../components/DateUtils";
import NavBar from "../components/NavBar";

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
        <div>Loading...</div>
      ) :
        <div className="font-sans">
          <NavBar />
          <div className="p-6 mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
              <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
                <div className="bg-gray-100 rounded-xl">
                <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-96 rounded object-cover"
                    />
                </div>
              </div>

              <div className="lg:col-span-2 text-start">
                <div className="flex justify-between">
                  <h2 className="text-3xl font-semibold text-gray-800 text-start">
                    {service.name}
                  </h2>

                  <p className="text-gray-500 text-sm">
                  {formatDate(service.created_at)}
                  </p>
                </div>

                <p className="text-gray-500 my-8">
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
