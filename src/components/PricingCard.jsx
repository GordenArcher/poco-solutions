import React from 'react'

const PricingCard = ({ plan }) => {
    return (
        <div className="group relative w-full" data-aos="fade-up" >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 !p-[1px] shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-cyan-500/25">
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 to-blue-500 opacity-20"></div>

                <div className="relative rounded-2xl h-[350px] bg-gradient-to-b from-slate-950 to-slate-900 !p-6">
                    <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70"></div>
                    <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70"></div>

                    <div className="absolute -right-[1px] -top-[1px] overflow-hidden rounded-tr-2xl">
                        <div className="absolute h-20 w-20 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                        <div className="absolute h-20 w-20 bg-slate-950/90"></div>
                        <div className="absolute right-0 top-[22px] h-[2px] w-[56px] rotate-45 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                        <span className="absolute right-1 top-1 text-[10px] !font-semibold " >POPULAR</span>
                    </div>

                    <div className="relative" data-aos="fade-up" >
                        <h3 className="text-sm !font-medium uppercase tracking-wider text-cyan-500">
                            {plan.name}
                        </h3>
                        <div className="!mt-2 flex items-baseline gap-2">
                        <span className="text-3xl !font-bold text-white" data-aos="fade-up" >{plan.price}</span>
                        {/* <span className="text-sm text-slate-400">/month</span> */}
                        </div>
                        <p className="!mt-2 text-sm text-slate-400" data-aos="fade-up" >
                            {plan.description}
                        </p>
                    </div>

                    <div className="relative !mt-6 space-y-4">
                        {plan.features.map((feature, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div data-aos="fade-up" >
                                    <svg
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="h-4 w-4 text-cyan-500"
                                    >
                                    <path
                                        d="M5 13l4 4L19 7"
                                        strokeWidth="2"
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                    ></path>
                                    </svg>
                                </div>

                                <div className='relative !mt-1' data-aos="fade-up" >
                                    <p className="text-sm !font-medium text-white">{feature}</p>
                                </div>
                            </div>
                        ))}

                    <div className="!mt-4 flex items-center justify-center gap-2" data-aos="fade-up" >
                        <svg data-aos="fade-up"  stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-slate-400">
                        <path
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            stroke-width="2"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        ></path>
                        </svg>
                        <span className="text-xs !font-medium text-slate-400" data-aos="fade-up" >30-day money-back guarantee</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default PricingCard