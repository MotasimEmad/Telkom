import AboutUs from '../components/AboutUs';
import Clients from '../components/Clients1';
import Header from '../components/Header';
import MissionAndVision from '../components/MissionAndVision';
import Services from '../components/Services';
import ContactUs from '../components/ContactUs';

const HomePage = () => {
  return (
    <section>
      <Header />
      <AboutUs />
      <MissionAndVision />
      <Clients />
      <Services />
      <ContactUs />
    </section>
  );
};

export default HomePage;
