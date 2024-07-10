import AboutUs from '../components/AboutUs';
import Header from '../components/Header';
import MissionAndVision from '../components/MissionAndVision';
import Services from '../components/Services';
import ContactUs from '../components/ContactUs';
import Values from '../components/Values';

const HomePage = () => {
  return (
    <section>
      <Header />
      <AboutUs />
      <MissionAndVision />
      <Services />
      <Values />
      <ContactUs />
    </section>
  );
};

export default HomePage;
