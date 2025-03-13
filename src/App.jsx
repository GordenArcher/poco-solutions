import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import PageRoutes from './routes/Routes'
import NavBar from './layout/NavBar'
import Footer from './layout/Footer'
import { useContext, useEffect, useState } from 'react'
import AOS from 'aos'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Pricing from './pages/Pricing'
import Privacy from './components/Privacy'
import { AuthContext } from './utils/context/Context'
import Login from './pages/Auth/Login'

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  const [showPolicy, setShowPolicy] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const { showLogin } = useContext(AuthContext)

  useEffect(() => {
    setShowPolicy(false);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location])

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 100);
      });
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className={`w-full h-full transition-all duration-500 z-20 ${isScrolled ? "fixed top-0 left-0 w-full z-50 shadow-lg" : '' }`}>
      <NavBar />
    </div>

    <PageRoutes />

    <div>
      <Footer setShowPolicy={setShowPolicy} />
    </div>

    {showPolicy && <Privacy setShowPolicy={setShowPolicy} />}
    {showLogin && <Login />}
      
    </>
  )
}

export default App
