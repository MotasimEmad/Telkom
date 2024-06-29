import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from '../redux/servicesSlice';
import ServiceCard from "../components/ServiceCard";
import NavBar from "../components/NavBar";

const ServicesPage = () => {
  const { isLoading, services } = useSelector((state) => state.service);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  const servicesList = services.map((service) => (
    <ServiceCard key={service.id} id={service.id} image={service.image} name={service.name} />
  ));


  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <NavBar />
      <div className="grid grid-cols-2 gap-4 mt-8 md:mt-16 md:grid-cols-3 xl:grid-cols-4 text-start px-12 py-4">
        {servicesList}
      </div>
    </section>
  );
};

export default ServicesPage;
