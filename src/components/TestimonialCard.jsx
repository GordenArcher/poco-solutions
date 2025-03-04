import React from 'react'

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="group relative w-full" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
    <div className="relative overflow-hidden rounded-2xl bg-slate-950 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/10">
      <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70"></div>
      <div className="absolute -right-16 -bottom-16 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-70"></div>

      <div className="relative !p-6">
        <div className="absolute right-6 top-6">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-indigo-500/10">
            <path d="M14.417 6.679C15.447 7.773 16 9 16 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C9.591 12.322 8.17 10.841 8.17 9c0-1.657 1.343-3 3-3s3.215.186 3.247.679zm5.498 0C20.945 7.773 21.5 9 21.5 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C15.091 12.322 13.67 10.841 13.67 9c0-1.657 1.343-3 3-3s3.215.186 3.245.679z"></path>
          </svg>
        </div>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-amber-400">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          ))}
        </div>

        <div className="!mt-4 space-y-2">
          <h3 className="text-xl !font-semibold text-white">{testimonial.title}</h3>
          <p className="text-slate-400">{testimonial.comment}</p>
        </div>

        <div className="!mt-6 flex items-center gap-4">
          <div className="group/avatar relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-75 blur transition-all duration-300 group-hover/avatar:opacity-100"></div>
            <div className="relative h-12 w-12 rounded-full bg-slate-950 ring-2 ring-slate-950">
              <svg fill="currentColor" viewBox="0 0 24 24" className="h-12 w-12 text-indigo-500">
                <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
              </svg>
            </div>
          </div>
          <div>
            <h4 className="!font-semibold text-white">{testimonial.name}</h4>
            <p className="text-sm text-slate-400">{testimonial.university}</p>
          </div>

          <div className="ml-auto">
            <div className="flex items-center gap-1 rounded-full bg-indigo-500/10 !px-3 !py-1">
              <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-indigo-500">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

}

export default TestimonialCard