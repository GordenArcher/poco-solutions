import React from 'react'
import { motion } from "framer-motion";
import TabImage from '../assets/images/tabs/tab2.svg'

const Tab2 = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    <div className='w-full relative' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <div className='w-full flex max-xl:flex-col max-sm:flex-col items-center justify-between gap-5'>
        <div className='w-full h-full'>
          <div className='flex flex-col gap-[20px]'>
            <div className='flex flex-col gap-2'>
              <h3 className='text-[2rem] text-[#103e91] !font-extrabold' data-aos="fade-up" data-aos-anchor-placement="center-bottom">Fast & Reliable Delivery</h3>
              <span className='relative' data-aos="fade-up" data-aos-anchor-placement="center-bottom">Get your work delivered on time without compromising on quality.</span>
            </div>

            <div className='!mt-3 relative'>
              <div className='flex flex-col gap-2.5'>
                {[
                  {id:"Enjoy quick turnaround times that ensure you meet even the tightest deadlines without stress."},
                  {id:"Stay informed with real-time progress updates so you can track the development of your work."},
                  {id:"Have urgent requests handled with precision and expertise, ensuring your academic goals are met no matter the urgency."}
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
          <div className='!p-6' data-aos="fade-left" data-aos-anchor-placement="center-bottom">
            <img className='w-[70%]' src={TabImage} alt="tab image" />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
  )
}

export default Tab2