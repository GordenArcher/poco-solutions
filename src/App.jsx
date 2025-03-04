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

  const location = useLocation();
  const { showLogin } = useContext(AuthContext)

  useEffect(() => {
    setShowPolicy(false);
  }, [location])

  return (
    <>
    <div className='w-full h-full z-20'>
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
