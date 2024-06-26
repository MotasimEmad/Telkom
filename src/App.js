import './App.css';
import AboutUs from './components/AboutUs';
import Clients from './components/Clients1';
import Header from './components/Header';
import MissionAndVision from './components/MissionAndVision';
import Navbar from './components/Navbar';
import Services from './components/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

<script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>

function App() {
  return (
    <div className="App">
     {/* <Navbar /> */}
      <Header />
      <AboutUs />
      <MissionAndVision />

      <Clients />
      <Services />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
