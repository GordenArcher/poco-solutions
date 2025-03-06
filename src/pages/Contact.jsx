import React from 'react'
import Button from '../components/Button'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Contact = () => {

  const center = [ 5.6128, - 0.2343 ]

  return (
    <div className='w-full h-full relative' data-aos="fade-up">
      <div className='!mt-5 max-sm:!p-3 !p-10'>
        <div className='w-full h-full !font-extrabold flex flex-col gap-[12px]'>
          <div className='flex items-center gap-[12px]' data-aos="fade-up">
            <h2 className='text-[#103e91] text-[1.2rem]' data-aos="fade-up">Contact Us</h2>
            <div className='w-[70px] h-[3px] bg-[#103e91]'></div>
          </div>

          <div className='!mt-1' data-aos="fade-up">
            <p>Contact the founder for more datailed info</p>
          </div>
        </div>

        <div className='!mt-[50px] relative' data-aos="fade-up">
          <div className='flex flex-col gap-[35px]'>
            <div className='flex max-lg:flex-col justify-between max-sm:flex-col gap-5'>
              <div className='w-full flex justify-between max-sm:flex-col gap-[20px]' data-aos="fade-up">
                  <div className='w-full shadow !p-3 relative rounded group'>
                    <div className='flex w-full items-center flex-col gap-2'>
                      <div className='w-[70px] h-[70px] rounded-[50%] transition-all duration-200 border-[#103e91] group-hover:bg-[#103e91] border border-dashed'>
                        <div data-aos="fade-up" className='text-[#103e91] h-full flex transition-all duration-200 group-hover:text-[#fff] !font-bold text-3xl items-center justify-center'>
                          <ion-icon name="location-outline"></ion-icon>
                        </div>
                      </div>
                      <span data-aos="fade-up" className='text-xl !font-bold'>Address</span>
                      <p className='text-[#103e91] !font-bold'>Ayikai Doblo - Accra</p>
                    </div>
                  </div>

                  <div className='flex w-full shadow !p-3 relative rounded group items-center flex-col gap-2'>
                      <div className='w-[70px] h-[70px] rounded-[50%] transition-all duration-200 border-[#103e91] group-hover:bg-[#103e91] border border-dashed'>
                        <div data-aos="fade-up" className='text-[#103e91] h-full flex transition-all duration-200 group-hover:text-[#fff] !font-bold text-3xl items-center justify-center'>
                          <ion-icon name="logo-whatsapp"></ion-icon>
                        </div>
                      </div>

                      <span data-aos="fade-up" className='text-xl !font-bold'>WhatsApp Us</span>
                      <span className='text-[#103e91] !font-bold'>
                        <a href="https://wa.me/233275697715">
                          +233 275697715
                        </a>
                      </span>
                    </div>
              </div>
              

              <div className='w-full relative shadow'>
                <div className='w-full flex justify-between max-sm:flex-col gap-[20px]'>
                  <div data-aos="fade-up" className='w-full shadow !p-3 relative rounded group'>
                    <div className='flex w-full items-center flex-col gap-2'>
                      <div className='w-[70px] h-[70px] rounded-[50%] transition-all duration-200 border-[#103e91] group-hover:bg-[#103e91] border border-dashed'>
                        <div data-aos="fade-up" className='text-[#103e91] h-full flex transition-all duration-200 group-hover:text-[#fff] !font-bold text-3xl items-center justify-center'>
                          <ion-icon name="call-outline"></ion-icon>
                        </div>
                      </div>
                      <span data-aos="fade-up" className='text-xl !font-bold'>Call Us</span>
                      <span className='text-[#103e91] flex gap-1 !font-bold'>
                        <a href="tel:+233275697715">0275697715</a> / 
                        <a href="tel:+233558707856">0558707856</a>
                      </span>
                    </div>
                  </div>

                  <div data-aos="fade-up" className='w-full shadow !p-3 relative rounded group'>
                    <div className='flex w-full items-center flex-col gap-2'>
                      <div className='w-[70px] h-[70px] rounded-[50%] transition-all duration-200 border-[#103e91] group-hover:bg-[#103e91] border border-dashed'>
                        <div data-aos="fade-up" className='text-[#103e91] h-full flex transition-all duration-200 group-hover:text-[#fff] !font-bold text-3xl items-center justify-center'>
                          <ion-icon name="mail-outline"></ion-icon>
                        </div>
                      </div>
                      <span data-aos="fade-up" className='text-xl !font-bold'>Email Us</span>
                      <a href='mailto:pocosolution@gmail.com' className='text-[#103e91] !font-bold'> pocosolution@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative !mt-6' data-aos="fade-up">
              <div className='flex max-lg:flex-col gap-5 h-full max-sm:flex-col justify-between'>
                <div data-aos="fade-up" className='shadow w-full h-full'>
                  <MapContainer center={center} zoom={13} style={{ height: "560px", width: "100%" }}>
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={center}>
                      <Popup>My Office Location</Popup>
                    </Marker>
                  </MapContainer>
                </div>

                {/* <div data-aos="fade-up" className='w-full !p-4 rounded-lg shadow-md bg-[#fff] h-full'>
                  <div className="w-full mx-auto">
                      <div className="!mb-4">
                        <label className="block !mb-2 !font-bold text-[#103e91]" htmlFor="name"> Name </label>
                        <input
                          placeholder="Your Name"
                          className="w-full border-1 h-[55px] !p-2 border-slate-400 rounded bg-transparent outline-none focus:border-b-2 focus:border-slate-600"
                          type="text"
                        />
                      </div>
                      <div className="!mb-4">
                        <label className="block !mb-2 !font-bold text-[#103e91]" htmlFor="email"> Email </label>
                        <input
                          placeholder="Your Email"
                          className="w-full border-1 h-[55px] !p-2 border-slate-400 rounded bg-transparent outline-none focus:border-b-2 focus:border-slate-600"
                          name="email"
                          id="email"
                          type="email"
                        />
                      </div>

                      <div className="!mb-4">
                        <label className="block !mb-2 !font-bold text-[#103e91]" htmlFor="email"> Subject </label>
                        <input
                          placeholder="Subject"
                          className="w-full border-1 h-[55px] !p-2 border-slate-400 rounded bg-transparent outline-none focus:border-b-2 focus:border-slate-600"
                          name="email"
                          id="email"
                          type="email"
                        />
                      </div>

                      <div className="!mb-4">
                        <label className="block !mb-2 !font-bold text-[#103e91]" htmlFor="message"> Message </label>
                        <textarea
                          placeholder="Your Message"
                          className="w-full h-[100px] !p-2 border-1 resize-none border-slate-400 bg-transparent outline-none focus:border-b-2 focus:border-slate-600"
                          rows="4"
                          name="message"
                          id="message"
                        ></textarea>
                      </div>
                      <div className="!mb-4 flex gap-2 z-10">
                        <a href="mailto:pocosolution@gmail.com">
                          <Button text={"Send Mail"} />
                        </a>
                        
                        <div>
                          <a href="https://wa.me/233275697715">
                            <Button text={"Send WhatsApp Message"} />
                          </a>
                        </div>
                        
                      </div>
                  </div>

                </div> */}
              </div>
            </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Contact