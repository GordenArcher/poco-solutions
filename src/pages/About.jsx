import React from 'react';
import { Link } from 'react-router-dom';
import TeamImage from '../assets/images/team.avif'
import Button from '../components/Button';
import { services } from '../constant/Data';

const About = () => {
  return (
    <div className="bg-white" data-aos="fade-up">
      <div className="max-w-7xl !mx-auto !py-16 !px-4 sm:!px-6 lg:!px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className='relative'>
            <h2 className="text-3xl !font-extrabold text-[#103e91] sm:text-4xl">Our Mission</h2>
            <p className="!mt-3 max-w-3xl text-lg text-gray-600" data-aos="fade-up" >
              At Poco Solutions, we're committed to empowering our clients with the tools and support they need to excel. 
              We believe that everyone deserves access to professional assistance that helps them navigate academic and professional challenges effectively.
            </p>
            <div className="!mt-8 flex">
              <div className="">
                <Link to={'/contact'} className="flex items-center justify-center !font-medium  text-white">
                  <Button text={"Contact Us"} />
                  
                </Link>
              </div>
              <div className="!ml-3 ">
                <Link to={'/service'} className="flex items-center justify-center !font-medium">
                  <Button text={"Our Services"} />
                  
                </Link>
              </div>
            </div>
          </div>
          <div className="!mt-10 lg:!mt-0" data-aos="fade-left">
            <img
              src={TeamImage}
              alt="Team collaboration"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div id="services" className="bg-[#103e91] !py-16" data-aos="fade-up">
        <div className="max-w-7xl !mx-auto !px-4 sm:!px-6 lg:!px-8">
          <div className="relative">
            <h2 className="text-3xl !font-extrabold text-[#fff]">What We Offer</h2>
            <p className="!mt-4 max-w-2xl text-lg text-[#ffffffa5]">
              Our comprehensive range of professional services designed to help you succeed.
            </p>
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

            
        </div>
      </div>

      <div className="max-w-7xl !mx-auto !py-16 !px-4 sm:!px-6 lg:!px-8" data-aos="fade-up">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl !!font-extrabold text-gray-900">Our Team</h2>
          <p className="!mt-4 max-w-2xl text-lg text-gray-600 !mx-auto">
            Our team consists of professionals with advanced degrees across various disciplines, each bringing specialized knowledge and experience.
          </p>
        </div>
        
        <div className="!mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden" data-aos="fade-up">
              <img 
                src="/api/placeholder/160/160" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="!mt-4 text-xl !font-medium text-gray-900" data-aos="fade-up">Dr. Sarah Johnson</h3>
            <p className="text-blue-700" data-aos="fade-up">Academic Director</p>
            <p className="!mt-2 text-gray-600 text-center" data-aos="fade-up">Ph.D. in Literature with over 15 years of experience in academic writing and research.</p>
          </div>
          
          <div className="flex flex-col items-center" data-aos="fade-up">
            <div className="w-40 h-40 rounded-full overflow-hidden" data-aos="fade-up">
              <img 
                src="/api/placeholder/160/160" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="!mt-4 text-xl !font-medium text-gray-900" data-aos="fade-up">Prof. Michael Chen</h3>
            <p className="text-blue-700" data-aos="fade-up">Research Lead</p>
            <p className="!mt-2 text-gray-600 text-center" data-aos="fade-up">Specialized in quantitative research methodologies and statistical analysis.</p>
          </div>
          
          <div className="flex flex-col items-center" data-aos="fade-up">
            <div className="w-40 h-40 rounded-full overflow-hidden" data-aos="fade-up">
              <img 
                src="/api/placeholder/160/160" 
                alt="Team member" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="!mt-4 text-xl !font-medium text-gray-900" data-aos="fade-up">Elizabeth Osei</h3>
            <p className="text-blue-700" data-aos="fade-up">Client Success Manager</p>
            <p className="!mt-2 text-gray-600 text-center" data-aos="fade-up">Dedicated to ensuring client satisfaction and project quality across all services.</p>
          </div>
        </div>
      </div>

      <div className="text-black">
        <div className="max-w-7xl !mx-auto !py-16 !px-4 sm:!px-6 lg:!px-8" data-aos="fade-up">
          <h2 className="text-3xl !font-extrabold text-[#103e91]" data-aos="fade-up">Our Approach</h2>
          
          <div className="!mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            <div className="flex flex-col items-center text-center" data-aos="fade-up">
              <div className="rounded-full bg-[#103e91] !p-3" data-aos="fade-up">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="!mt-4 text-lg !font-medium" data-aos="fade-up">Quality</h3>
              <p className="!mt-2 text-black" data-aos="fade-up">Delivering exceptional work that exceeds expectations.</p>
            </div>
            
            <div className="flex flex-col items-center text-center" data-aos="fade-up">
              <div className="rounded-full bg-[#103e91] !p-3" data-aos="fade-up">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="!mt-4 text-lg !font-medium" data-aos="fade-up">Timeliness</h3>
              <p className="!mt-2 text-black" data-aos="fade-up">Respecting deadlines and providing prompt service.</p>
            </div>
            
            <div className="flex flex-col items-center text-center" data-aos="fade-up">
              <div className="rounded-full text-white bg-[#103e91] !p-3">
                <svg className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="!mt-4 text-lg !font-medium" data-aos="fade-up">Personalization</h3>
              <p className="!mt-2 text-black" data-aos="fade-up">Tailoring our approach to meet your unique requirements.</p>
            </div>
            
            <div className="flex flex-col items-center text-center" data-aos="fade-up">
              <div className="rounded-full text-white bg-[#103e91] !p-3" data-aos="fade-up">
                <svg className="h-8 w-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="!mt-4 text-lg !font-medium" data-aos="fade-up">Integrity</h3>
              <p className="!mt-2 text-black" data-aos="fade-up">Maintaining the highest ethical standards in all our services.</p>
            </div>
            
            <div className="flex flex-col items-center text-center" data-aos="fade-up">
              <div className="rounded-full bg-[#103e91] !p-3" data-aos="fade-up">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="!mt-4 text-lg !font-medium" data-aos="fade-up">Continuous Improvement</h3>
              <p className="!mt-2 text-black" data-aos="fade-up">Constantly refining our processes to serve you better.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;