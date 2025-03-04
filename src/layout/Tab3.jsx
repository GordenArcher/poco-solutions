import React from 'react'
import { motion } from "framer-motion";
import TabImage from '../assets/images/tabs/tab3.svg'

const Tab3 = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    <div className='w-full relative' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <div className='w-full max-sm:flex max-xl:flex-col max-sm:flex-col flex gap-5'>
        <div className='w-full h-full'>
          <div className='flex flex-col gap-[20px]'>
            <div className='flex flex-col gap-2'>
              <h3 className='text-[2rem] text-[#103e91] !font-extrabold' data-aos="fade-up" data-aos-anchor-placement="center-bottom">100% Confidential & Secure</h3>
              <span className='relative' data-aos="fade-up" data-aos-anchor-placement="center-bottom">Your privacy and data security are our top priorities, ensuring a worry-free experience for you.</span>
            </div>

            <div className='!mt-3 relative'>
              <div className='flex flex-col gap-2.5'>
                {[
                  {id:"We guarantee the confidentiality of your academic work, making sure it remains your intellectual property at all times."},
                  {id:"Secure and trusted payment and communication channels ensure that your details and transactions are protected."},
                  {id:"Rest assured that no personal or project information will be shared, ensuring complete privacy throughout the process."}
                ].map((reg) => (
                  <section key={reg.id} className='w-full' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <div className='flex items-center gap-2'>
                      <p className='text-[#103e91] text-2xl' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <ion-icon name="checkmark-done-outline"></ion-icon>
                      </p>
                      <span className='text-lg' data-aos="fade-up" data-aos-anchor-placement="center-bottom">{reg.id}</span>
                    </div>
                  </section>
                ))
                }
              </div>
            </div>
          </div>
        </div>

        <div className='w-full relative'>
          <div className='!p-6 flex w-full justify-center items-center' data-aos="fade-left" data-aos-anchor-placement="center-bottom">
            <img className='w-[70%]' src={TabImage} alt="tab image" />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
  )
}

export default Tab3