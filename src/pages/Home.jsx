import Hero from '../layout/Hero'
import Login from './Auth/Login'
import { Choose, testimonials, whatDo } from '../constant/Data'
import AboutImg from '../assets/images/illustration-1.webp'
import Jos from '../assets/images/avatar-7.png'
import { Link } from 'react-router-dom'
import Slider from '../layout/Slider'
import FaQ from '../components/FaQ'
import TestimonialCard from '../components/TestimonialCard'

const Home = () => {

  return (
    <>
        <div className='w-full h-full relative max-sm:!p-4 !p-10'>
            <Hero />

            <div className='w-full h-full !mt-[80px]'>
                <div className='flex gap-1.5 text-5xl !font-extrabold text-[#103e91]' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    <h2 className='max-sm:text-[1.5rem]'>Why us ?</h2>
                    <ion-icon name="checkmark-done-outline"></ion-icon>
                </div>
                <div className='w-full !pt-5 grid max-sm:flex max-sm:flex-col grid-cols-3 gap-[12px]' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                    {Choose.map((ch) => (
                        <section key={ch.id} className='w-full shadow-2xl hover:bg-[#103e91] group transition duration-400 border-1 border-[#0000000a] rounded h-full relative !p-5' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <div className='flex flex-col gap-[20px] items-start'>
                                <span className='relative text-[2rem]'>
                                    <ion-icon name={ch.icon}></ion-icon>
                                </span>

                                <div className='relative !mt-2'>
                                    <h3 className='!font-extrabold text-[#103e91] group-hover:text-[#fff] text-xl'>{ch.head}</h3>
                                </div>

                                <div className='!mt-1'>
                                    <p>{ch.desc}</p>
                                </div>
                            </div>
                        </section>
                    ))}
                    
                </div>
            </div>

            <div className='w-full h-full relative max-sm:!mt-[100px] !mt-[180px]'>
                <div className='grid grid-cols-2 max-xl:flex-col max-xl:flex max-sm:flex max-sm:flex-col gap-[10px]'>
                    <div className='w-full h-full'>
                        <div className='flex flex-col gap-[10px]'>
                            <div className='flex flex-col gap-[14px]'>
                                <div className='relative' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                    <h4 className='text-[#103e91] !font-extrabold'>MORE ABOUT US</h4>
                                </div>
                                <div className='!mt-2 relative' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                    <h2 className='text-3xl !font-bold'>Who We Are – Your Trusted Partner for Academic Success</h2>
                                </div>

                                <div className='!p-1' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                    <span className='text-lg'>Empowering students with expert guidance, quality research, and seamless academic support to achieve their goals with confidence.  🚀</span>
                                </div>
                            </div>

                            <div className='h-full !mt-3'>
                                <div className='flex flex-col gap-[15px]'>
                                    <div className='w-full grid max-sm:grid-cols-1 grid-cols-2'>
                                        {whatDo.map((w) => (
                                            <section key={w.id} className='w-full h-full flex relative' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                                <div className='w-full h-full flex items-center gap-[10px]'>
                                                    <span className='text-[#103e91] text-[2rem]'>
                                                        <ion-icon name="checkmark-done-circle"></ion-icon>
                                                    </span>

                                                    <p className='text-[1rem] !font-bold'>{w.wdo}</p>
                                                </div>
                                            </section>
                                        ))}
                                    </div>

                                    <div className='flex items-center max-sm:flex-col justify-between gap-[15px]'>
                                        <div className='!p-1 w-full' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                            <div className='flex gap-[10px] items-center'>
                                                <div className='relative'>
                                                    <img className='w-[50px] h-full rounded border-1' src={Jos} alt="josua's image" />
                                                </div>
                                                <div className='flex flex-col gap-1' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                                    <h3 className='text-xl'>Josua Nettey</h3>
                                                    <span className='!font-extrabold text-[#103e91]'>Founder</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='shadow !p-1 w-full' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                            <div className='flex gap-2 items-center'>
                                                <div className='relative'>
                                                    <span className='text-[#103e91] text-2xl !font-extrabold'>
                                                        <ion-icon name="call"></ion-icon>
                                                    </span>
                                                </div>

                                                <div className='flex flex-col gap-1'>
                                                    <div className='relative'>
                                                        <p className='txet-lg'>Call us anytime</p>
                                                    </div>
                                                    <div className='relative'>
                                                        <p className='text-[#103e91] !font-bold text-lg'>
                                                            <a href="tel:+233275697715">+233 27 569 7715</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full'>
                        <div className='!p-10' data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                            <img className='w-full' src={AboutImg} alt="aout" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='!mt-10 relative w-full'data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <Slider />
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

            <div className='w-full h-full !mt-20 bg-[#f4f7fc] !py-16'>
                <div className='w-full mx-auto !px-4'>
                    <h2 className='text-3xl !font-extrabold text-[#103e91]' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        Hear from Our Happy Clients
                    </h2>
                    
                    <div className="flex justify-between max-xl:flex-col max-sm:flex-col w-full gap-8 !mt-10">
                        {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </div>

            <div className='!mt-10' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <FaQ />
            </div>
            

        </div>

        
    </>
    
  )
}

export default Home