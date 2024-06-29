import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
<script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
