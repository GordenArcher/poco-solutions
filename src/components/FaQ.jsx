import { useState } from 'react';
import Tooltip from './FaqBut';
import { faqs } from '../constant/Data';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    return (
        <div className='w-full h-full !mt-20 bg-[#f4f7fc] !py-16'>
            <div className='max-w-7xl mx-auto !px-4'>
                <div className='text-xl !font-extrabold flex items-center gap-3.5 text-[#103e91]'>
                    <h2 data-aos="fade-up">
                        Frequently Asked Questions (FAQ)
                    </h2>

                    <div data-aos="fade-up">
                        <Tooltip />
                    </div>
                </div>
                <div className='!mt-8'>
                    <div className='space-y-6 flex flex-col gap-2'>
                        {faqs.map((faq, index) => (
                            <div key={index} className='bg-[#103e91] transition-all duration-300 shadow-lg rounded-lg !p-6' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                <div className='cursor-pointer flex gap-3' onClick={() => toggleAnswer(index)}>
                                    <h3 className='text-xl max-sm:text-lg !font-semibold text-[#fff]'>
                                        {faq.question}
                                    </h3>
                                    <span className='text-[#fff] text-xl'>
                                        <ion-icon name={activeIndex === index ? "chevron-up-outline" : "chevron-down-outline"}  ></ion-icon>
                                    </span>
                                </div>

                                <div className={`overflow-hidden !p-2 transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className='text-[#fff] !mt-2'>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
