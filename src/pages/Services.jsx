import React from 'react'
import { services } from '../constant/Data';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 max-sm:!p-3 !p-10" data-aos="fade-up">
      <div className="w-full !py-6 text-[#103e91]">
        <h1 className="text-4xl !font-bold" data-aos="fade-up" data-aos-anchor-placement="center-bottom">Our Services</h1>
        <p className="text-lg !mt-2" data-aos="fade-up" data-aos-anchor-placement="center-bottom">Academic Excellence at Your Fingertips</p>
      </div>

      <div className="w-full !mx-auto !py-6 !px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={`/service${service.link}`} data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div class="h-full w-full bg-white !m-auto rounded-[1em] overflow-hidden relative group !p-2 z-0">
                  <div class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-[#103e91] group-hover:scale-[800%] duration-500 z-[-1] opacity-50"></div>

                  <div class="w-full flex flex-col gap-[14px] items-start !p-6 transition" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <div class="text-6xl text-blue-500 !mb-4">{service.icon}</div>
                    <h3 class="text-xl !font-semibold! mb-2">{service.title}</h3>
                    <p class="text-gray-600">{service.description}</p>
                    <button class="!mt-4 text-blue-600 hover:underline">Learn More</button>
                  </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <div className="w-full bg-[#103e91] rounded-2xl !py-16 text-center text-white" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
        <h2 className="text-3xl max-sm:text-lg font-bold">Need Assistance? Let&apos;s Get Started!</h2>
        <button className="!mt-4 bg-white text-blue-600 !px-6 !py-3 rounded-full !font-semibold shadow-md hover:bg-gray-200">
            <Link to={'/contact'}>
            Contact Us
            </Link>
            
        </button>
      </div>
    </div>
  );
}

export default Services