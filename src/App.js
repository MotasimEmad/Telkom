import './App.css';
import AboutUs from './components/AboutUs';
import Clients from './components/Clients1';
import Header from './components/Header';
import MissionAndVision from './components/MissionAndVision';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';

<script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <MissionAndVision />

      <Clients />
      {/* <Testimonials /> */}
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
