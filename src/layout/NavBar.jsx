import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import Logo from '../assets/images/logo.jpeg';
import { Link } from 'react-router-dom';
import Hamburger from '../components/Hamburger';

const NavBar = () => {
  const [showSide, setShowSide] = useState(false);

  const location = useLocation();
  
  useEffect(() => {
    setShowSide(false);
  }, [location]); 


  const openSide = useCallback(() => {
    setShowSide((prevState) => !prevState);
  }, []);

  return (
    <div className={`w-full h-[100px] bg-[#103e91] relative !p-3 `}>
      <div className='w-full h-full !p-5 flex justify-between items-center'>
        <div className='relative'>
        <Link to={'/'} className="flex gap-3 items-center">
          <img className="w-30 max-sm:hidden object-contain" src={Logo} alt="logo" />
          <div className="text-xl sm:text-2xl md:text-3xl !font-extrabold text-white tracking-wider uppercase drop-shadow-md
                    animate-float 
                    hover:animate-bounce 
                    transition-all 
                    duration-500 
                    cursor-pointer 
                    transform 
                    hover:text-yellow-300
                    hover:rotate-6
                    active:scale-90
                    group
                    relative
                    text-center">
        <span className="block transform transition-transform duration-500 
                         group-hover:translate-y-[-5px] 
                         group-hover:rotate-3
                         group-active:rotate-12">
            POCO SOLUTIONS
        </span>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-300 
                        transform scale-x-0 
                        group-hover:scale-x-100 
                        origin-left 
                        transition-transform 
                        duration-500">
        </div>
    </div>

<style jsx>{`
    @keyframes float {
        0%, 100% { transform: translateY(0) rotate(0deg); }
        50% { transform: translateY(-10px) rotate(-3deg); }
    }

    .animate-float {
        animation: float 3s ease-in-out infinite;
    }
`}</style>

      </Link>

        </div>

        <div className={`max-sm:fixed max-xl:fixed max-xl:w-[60%] max-xl:!p-[50px] transition-all duration-300 ${showSide ? 'translate-x-0 max-xl:translate-x-0' : 'max-sm:-translate-x-100 max-xl:-translate-x-full'} max-sm:!p-5 z-10 max-sm:w-[60%] bg-[#103e91] max-sm:h-screen max-xl:h-screen h-full max-sm:left-0 max-xl:left-0 max-xl:top-0 max-sm:top-0 relative`}>
          <div className=''>
            <ul className='flex max-sm:flex-col max-xl:flex-col max-sm:items-start max-xl:items-start max-sm:!mt-[50px] max-sm:gap-[10px] items-center gap-3'>
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
                <Link to={'/vacancies'} className='relative w-full cursor-pointer'>
                  <div className='flex gap-2 items-center !px-4 !py-2 hover:bg-slate-500 rounded'>
                    <span className='text-[1.2rem] font-semibold text-[#fff] tracking-wider'>Vacancies</span>
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
              {/* <li className='relative'>
                <Link to={'/login'} className='relative w-full cursor-pointer'>
                  <div className='flex gap-2 items-center !px-4 !py-2 hover:bg-slate-500 rounded'>
                    <span className='text-[1.2rem] font-semibold text-[#fff] tracking-wider'>Login/Register</span>
                  </div>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Hamburger Menu */}
        <div className='!ml-4 max-sm!p-2 max-sm:block max-xl:block hidden'>
          <Hamburger openSide={openSide} isSideOpen={showSide} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
