import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, Route
import App from './App'; // Import the Home component
import './index.css'; // Custom CSS file
import Navbar from './navbar';
import Alert from './blocks/alert';
import Device from './blocks/device';
import Environmental from './blocks/environment';
import Matrix from './blocks/matrix';
import MoneySaved from './blocks/money';
import Scheduling from './blocks/scheduling';
import More from './blocks/more';
import Homenew from './blocks/home';
import EnergyHistory from './blocks/energyHistory';
const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Homenew />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/Alert" element={<Alert />} />
        <Route path="/device" element={<Device />} />
        <Route path="/Environment" element={<Environmental />} />
        <Route path="/Matrix" element={<Matrix />} />
        <Route path="/MoneySaved" element={<MoneySaved />} />
        <Route path="/Setting" element={<More />} />
        <Route path="/Logout" element={<App />} />
        <Route path="/EnergyHistory" element={<EnergyHistory />} />
        <Route path="/Scheduling" element={<Scheduling />} />

        
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
