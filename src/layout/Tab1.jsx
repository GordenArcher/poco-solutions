import React from 'react'
import { motion } from "framer-motion";
import TabImage from '../assets/images/tabs/tab1.svg'

const Tab1 = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }} 
    animate={{ opacity: 1, y: 0 }} 
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
  >
    <div className='w-full relative' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <div className='w-full max-xl:flex-col flex max-sm:flex-col justify-between gap-5'>
        <div className='w-full h-full'>
          <div className='flex flex-col gap-[20px]'>
            <div className='flex flex-col gap-2'>
              <h3 className='text-[2rem] text-[#103e91] !font-extrabold' data-aos="fade-up" data-aos-anchor-placement="center-bottom">Expert Academic Assistance</h3>
              <span className='relative' data-aos="fade-up" data-aos-anchor-placement="center-bottom">Receive high-quality research and writing services that are tailored to your academic needs.</span>
            </div>

            <div className='!mt-3 relative'>
              <div className='flex flex-col gap-2.5'>
                {[
                  {id:"Work with experienced professionals across various fields of study who understand the intricacies of academic writing."},
                  {id:"Benefit from well-structured, thoroughly researched, and plagiarism-free content that meets the highest academic standards."},
                  {id:"Receive personalized guidance and support for your projects, helping you develop a deeper understanding of the subject matter."}
                ].map((reg) => (
                  <section key={reg.id} className='w-full' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <div className='flex items-center gap-2' >
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
            <img className='w-[70%]'  src={TabImage} alt="tab image" />
          </div>
        </div>
      </div>
    </div>
  </motion.div>
  )
}

export default Tab1