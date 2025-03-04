import { useContext } from 'react'
import HeroImg from '../assets/images/hero.svg'
import Button from '../components/Button'
import { AuthContext } from '../utils/context/Context'

const Hero = () => {

    const { setShowLogin } = useContext(AuthContext)


  return (
    <div className='w-full h-full max-sm:!mt-5 !mt-10' data-aos="fade-up" >
        <section className='w-full flex max-sm:gap-[60px] max-xl:flex-col gap-3 max-sm:flex-col items-center justify-between'>
            <div className='w-full flex flex-col gap-[13px] tracking-tight'>
                <div className='relative' data-aos="fade-up" >
                    <h1 className='w-full text-[#103e91] max-sm:text-[2rem] flex text-[4rem]/normal !font-extrabold'>Struggling with Your Research? We've Got You Covered!</h1>
                </div>

                <div className='text-lg/normal' data-aos="fade-up" >
                    Get expert help with thesis writing, project work, assignments, and more—so you can focus on what truly matters.
                </div>

                <div className='relative' data-aos="fade-up" >
                    <span className='text-lg !font-bold'>Discover personalized research assistance that transforms your ideas into impactful academic work. From thesis consulting to comprehensive data analysis, our team of experts is here to guide you toward success. Over the years, we have refined and expanded our dissertation and thesis help services to provide the most comprehensive support available throughout the research process.</span>
                </div>

                <div className='!mt-10' data-aos="fade-up" >
                    <div onClick={() => setShowLogin(true)}>
                        <Button text= "Get Started"/>
                    </div>
                    
                </div>
            </div>

            <div className='w-full h-full max-sm:!mt-10'>
                <div className='!p6' data-aos="fade-left" data-aos-anchor-placement="center-bottom">
                    <img src={HeroImg} alt="hero" />
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero