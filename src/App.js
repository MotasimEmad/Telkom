import './App.css';
import AboutUs from './components/AboutUs';
import Clients from './components/Clients1';
import Header from './components/Header';
import MissionAndVision from './components/MissionAndVision';
import Navbar from './components/Navbar';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App font-ubuntu">
     <Navbar />
      <Header />
      <AboutUs />
      <MissionAndVision />

      <Clients />
      <Services />
      <ContactUs />
    </div>
  );
}

export default App;
