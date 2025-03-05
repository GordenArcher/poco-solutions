import React from 'react'
import { testimonials } from '../constant/Data'
import TestimonialCard from '../components/TestimonialCard'
import Back from '../layout/Back'
import { Link } from 'react-router-dom'

const Testmonials = () => {
  return (
    <div className='!p-10'>

        <Back />
        
        <div className='w-full h-full !mt-20 bg-[#f4f7fc] !py-16'>
            <div className='w-full mx-auto !px-4'>
                <h2 className='text-3xl !font-extrabold text-[#103e91]' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    Hear from Our Happy Clients
                </h2>
                
                <div className="max-lg:flex grid grid-cols-3 max-lg:justify-between max-xl:flex-col max-sm:flex-col w-full gap-8 !mt-10">
                    {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </div>

        <div className='!mt-10 relative w-full' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <div className='w-full h-[80vh] max-sm:h-[60vh] rounded bg-[#103e91] text-white flex flex-col justify-center items-center text-center'>
                    <h1 className='text-5xl max-sm:text-2xl !font-extrabold' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        Unlock Your Academic Potential with Expert Support
                    </h1>
                    <p className='text-lg max-sm:text-sm !mt-4' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        High-quality research, expert guidance, and personalized solutions tailored to your needs. Let&apos;s take your academic journey to the next level!
                    </p>
                    <div className='!mt-[70px]' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <Link to={'/service'} className='bg-[#fff] text-[#103e91] text-lg !font-bold !py-3 !px-8 rounded-lg transition-all'>
                            Learn More
                        </Link>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Testmonials
