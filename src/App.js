import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailsPage from './pages/ServiceDetailsPage';
import WhatsAppButton from './components/WhatsAppButton ';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSettings } from './redux/settingSlice';
<script src="https://unpkg.com/taos@1.0.5/dist/taos.js"></script>

function App() {
const { isLoading, setting, error } = useSelector((state) => state.setting);
console.log('is_whatsapp_enable:', setting.is_whatsapp_enable);

const dispatch = useDispatch();
useEffect(() => {
  dispatch(getSettings());
}, [dispatch]);
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  return (
    <div className="App">
      {setting.is_whatsapp_enable == '1' && <WhatsAppButton />}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/service/:id" element={<ServiceDetailsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
