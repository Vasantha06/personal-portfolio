import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  const [darkMode, setDarkMode] = useState(true); // default dark

  return (
    // 'dark' class on div enables Tailwind dark mode
    <div className={darkMode ? 'dark' : ''}>
      <BrowserRouter>
        <div className="bg-dark min-h-screen text-white">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;