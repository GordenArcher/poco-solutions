import { useState } from 'react';
import Tooltip from './FaqBut';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const faqs = [
        {
            question: "How do I place an order?",
            answer: "Simply fill out the order form on our website with the details of your research or academic project, and our team will get in touch with you."
        },
        {
            question: "What is the delivery time for my order?",
            answer: "The delivery time depends on the complexity and scope of your project. We offer fast turnarounds for urgent requests, but standard orders are delivered within 5-7 business days."
        },
        {
            question: "Is my payment information secure?",
            answer: "Yes, we use secure payment methods with encrypted transactions to ensure your payment information is always protected."
        },
        {
            question: "Can I request revisions after receiving my work?",
            answer: "Absolutely! We offer revisions within a specified time frame after you receive your work, ensuring it meets your expectations."
        },
        {
            question: "Do you provide 24/7 customer support?",
            answer: "Yes, our support team is available 24/7 to answer any questions and assist you with your project."
        },
        {
            question: "What subjects or topics do you cover?",
            answer: "We cover a wide range of academic disciplines, including but not limited to business, computer science, engineering, medical sciences, and social sciences."
        }
    ];

    return (
        <div className='w-full h-full !mt-20 bg-[#f4f7fc] !py-16'>
            <div className='max-w-7xl mx-auto !px-4'>
                <h2 className='text-xl !font-extrabold flex items-center gap-3.5 text-[#103e91]'>
                    <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        Frequently Asked Questions (FAQ)
                    </h2>

                    <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <Tooltip />
                    </div>
                </h2>
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
