import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/About/About';
import { useEffect, useState } from 'react';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import MyProjects from './pages/MyProjects/MyProjects';

function App() {
  const [yTall, setYTall] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    setYTall(window.scrollY);
    setShowButton(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<MyProjects />} />
      </Routes>
      {showButton && (
        <div
          onClick={scrollToTop}
          className='cursor-pointer fixed bottom-5 right-5 bg-gray-700 text-white text-3xl p-2 rounded-full w-10 h-10 flex items-center justify-center'
        >
          <p className='text-center items-center flex'>^</p>
        </div>
      )}
    </>
  );
}

export default App;
