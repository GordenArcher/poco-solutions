import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import Logo from '../assets/images/logo.jpeg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../utils/context/Context';
import Hamburger from '../components/Hamburger';

const NavBar = () => {
  const { setShowLogin } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSide, setShowSide] = useState(false);

  const location = useLocation();
  
  useEffect(() => {
    setShowSide(false);
  }, [location]); 

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 100);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openSide = useCallback(() => {
    setShowSide((prevState) => !prevState);
  }, []);

  return (
    <div className={`w-full h-[100px] transition-all duration-300 bg-[#103e91] relative !p-3 ${
      isScrolled ? "fixed top-0 left-0 w-full z-50 shadow-lg" : ""
    }`}>
      <div className='w-full h-full !p-5 flex justify-between items-center'>
        <div className='relative'>
            <Link to={'/'}>
                <img className='w-30 object-contain' src={Logo} alt="logo" />
            </Link>
          
        </div>

        <div className={`max-sm:fixed max-xl:fixed max-xl:w-[60%] max-xl:!p-[50px] transition-all duration-300 ${showSide ? 'translate-x-0 max-xl:translate-x-0' : 'max-sm:-translate-x-100 max-xl:-translate-x-full'} max-sm:!p-5 z-10 max-sm:w-[60%] bg-[#103e91] max-sm:h-screen max-xl:h-screen h-full max-sm:left-0 max-xl:left-0 max-xl:top-0 max-sm:top-0 relative`}>
          <div className=''>
            <ul className='flex max-sm:flex-col max-xl:flex-col max-sm:items-start max-xl:items-start max-sm:!mt-[50px] max-sm:gap-[40px] items-center gap-3'>
              <li className='relative'>
                <Link to={'/'} className='relative w-full'>
                  <div className='flex gap-2 items-center !px-4 !py-2 hover:bg-slate-500 rounded'>
                    <span className='text-[1.2rem] font-semibold text-[#fff] tracking-wider'>Home</span>
                  </div>
                </Link>
              </li>
              <li className='relative'>
                <Link to={'/service'} className='relative w-full'>
                  <div className='flex gap-2 items-center !px-4 !py-2 hover:bg-slate-500 rounded'>
                    <span className='text-[1.2rem] font-semibold text-[#fff] tracking-wider'>Services</span>
                  </div>
                </Link>
              </li>
              <li className='relative'>
                <Link to={'/pricing'} className='relative w-full'>
                  <div className='flex gap-2 items-center !px-4 !py-2 hover:bg-slate-500 rounded'>
                    <span className='text-[1.2rem] font-semibold text-[#fff] tracking-wider'>Pricing</span>
                  </div>
                </Link>
              </li>
              <li className='relative'>
                <Link to={'/about'} className='relative w-full'>
                  <div className='flex gap-2 items-center !px-4 !py-2 hover:bg-slate-500 rounded'>
                    <span className='text-[1.2rem] font-semibold text-[#fff] tracking-wider'>About Us</span>
                  </div>
                </Link>
              </li>
              <li className='relative'>
                <Link to={'/contact'} className='relative w-full'>
                  <div className='flex gap-2 items-center !px-4 !py-2 hover:bg-slate-500 rounded'>
                    <span className='text-[1.2rem] font-semibold text-[#fff] tracking-wider'>Contact</span>
                  </div>
                </Link>
              </li>
              <li className='relative'>
                <button onClick={() => setShowLogin(true)} className='relative w-full cursor-pointer'>
                  <div className='flex gap-2 items-center !px-4 !py-2 hover:bg-slate-500 rounded'>
                    <span className='text-[1.2rem] font-semibold text-[#fff] tracking-wider'>Login/Register</span>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className='!ml-4 max-sm:block max-xl:block hidden'>
          <Hamburger openSide={openSide} isSideOpen={showSide} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
