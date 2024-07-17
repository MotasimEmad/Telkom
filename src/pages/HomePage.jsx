import AboutUs from '../components/AboutUs';
import Header from '../components/Header';
import MissionAndVision from '../components/MissionAndVision';
import Services from '../components/Services';
import SimpleContactUs from '../components/SimpleContactUs';
import Values from '../components/Values';

const HomePage = () => {
  return (
    <section>
      <Header />
      <AboutUs />
      <MissionAndVision />
      <Services />
      <Values />
     <div id="contact-us">
     <SimpleContactUs />
     </div>
    </section>
  );
};

export default HomePage;
