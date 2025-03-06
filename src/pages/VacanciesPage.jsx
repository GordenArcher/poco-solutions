import { adPackages, jobOpenings } from "../constant/Data";

const VacanciesPage = () => {
  
    return (
      <div className="w-full !py-16 !px-6 md:!px-12 lg:!px-24 bg-gradient-to-b from-white to-blue-50" data-aos="fade-up">
        <div className="text-center !mb-16 max-w-4xl !mx-auto">
          <div data-aos="fade-up" className="inline-block bg-blue-100 text-[#103e91] !px-4 !py-2 rounded-full text-sm !font-semibold !mb-4">
            Academic and non Academic Excellence
          </div>
          <h1 data-aos="fade-up" className="text-4xl md:text-5xl lg:text-6xl !font-bold text-gray-800 leading-tight">
            Vacancies & Advertisements
          </h1>
          <p className="text-lg md:text-xl text-gray-600 !mt-6 max-w-3xl !mx-auto" data-aos="fade-up">
            Join our network of academic professionals and receive competitive compensation for research assistance and guidance.
          </p>
          <div className="!mt-8 flex flex-wrap justify-center gap-4" data-aos="fade-up">
            <a href="#jobs" className="!px-6 !py-3 bg-[#103e91] hover:bg-[#103e91] text-white !font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg">
              View Open Positions
            </a>
            <a href="#ads" className="!px-6 !py-3 bg-white hover:bg-gray-100 text-[#103e91] !font-medium rounded-lg transition duration-300 border border-[#103e91] shadow-md hover:shadow-lg">
              Explore Ad Opportunities
            </a>
          </div>
        </div>
  
        <div className="bg-[#103e91] text-white !p-8 rounded-xl !mb-16 max-w-4xl !mx-auto">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl !font-bold !mb-4" data-aos="fade-up">Join Our Academic Network</h2>
            <p className="text-lg" data-aos="fade-up">
              We are looking for lecturers with master's, doctorate, and PhD degrees for whom research assistance is a passion. We seek professionally certified resource persons who want to earn highly competitive compensation and receive regular payments doing what they enjoy - freelance research and guidance.
            </p>
          </div>
        </div>
  
        <div className="!mb-20" id="jobs">
          <div className="flex justify-between items-center !mb-8" data-aos="fade-up">
            <h2 className="text-3xl !font-bold text-gray-800">Current Opportunities</h2>
            <div className="hidden md:block">
              <span className="text-[#103e91] !font-medium">positions available</span>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100" data-aos="fade-up">
                <div className="!p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg !font-semibold text-[#103e91]">{job.title}</h3>
                  </div>
                  <p className="!mt-3 text-gray-600">{job.description}</p>
                  <div className="!mt-4">
                    <h4 className="text-sm !font-semibold text-gray-700">Requirements:</h4>
                    <ul className="!mt-2 space-y-1">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="text-[#103e91] !mr-2">•</span> {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="!mt-4 !pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Competitive compensation</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
  
          <div className="!mt-12 bg-gray-50 rounded-xl !p-8 max-w-4xl !mx-auto">
            <div className="text-center">
              <h3 className="text-xl !font-semibold text-gray-800 !mb-4" data-aos="fade-up">Why Join Our Academic Network?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 !mt-6" data-aos="fade-up">
                <div className="bg-white !p-4 rounded-lg shadow-sm" data-aos="fade-up">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#103e91] !mx-auto !mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="!font-medium text-gray-800 !mb-2">Competitive Pay</h4>
                  <p className="text-gray-600 text-sm">Receive highly competitive compensation for your academic expertise and regular, reliable payments.</p>
                </div>

                <div className="bg-white !p-4 rounded-lg shadow-sm" data-aos="fade-up">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#103e91] !mx-auto !mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="!font-medium text-gray-800 !mb-2">Flexible Schedule</h4>
                  <p className="text-gray-600 text-sm">Work on your own terms with project-based and freelance opportunities that fit your schedule.</p>
                </div>

                <div className="bg-white !p-4 rounded-lg shadow-sm" data-aos="fade-up">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#103e91] !mx-auto !mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="!font-medium text-gray-800 !mb-2">Academic Growth</h4>
                  <p className="text-gray-600 text-sm">Continue your academic journey by working on diverse research projects across various disciplines.</p>
                </div>
              </div>
            </div>
          </div>
  
          <div className="!mt-8 text-center" data-aos="fade-up">
            <p className="text-gray-600 !mb-4">
              Not seeing the right fit? Send your CV for future opportunities.
            </p>
            <a href="mailto:pocosolution@gmail.com" className="text-[#103e91] hover:text-[#103e91] !font-medium inline-flex items-center">
                pocosolution@gmail.com
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 !ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
  
        <div className="!mb-20" id="ads" data-aos="fade-up">
          <div className="max-w-4xl !mx-auto text-center !mb-12" data-aos="fade-up">
            <div className="inline-block bg-yellow-100 text-yellow-800 !px-4 !py-1 rounded-full text-sm !font-semibold !mb-4">
              Partnership Opportunities
            </div>
            <h2 className="text-3xl md:text-4xl !font-bold text-gray-800">Advertisements & Promotions</h2>
            <p className="!mt-4 text-lg text-gray-600 max-w-2xl !mx-auto">
              Reach our growing community of academic professionals, researchers, and students with our targeted advertising solutions.
            </p>
          </div>
  
          <div className="grid !mt-6 grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl !mx-auto">
            {adPackages.map((pkg, index) => (
              <div data-aos="fade-up" key={index} className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                index === 1 ? 'border-2 border-blue-500 relative transform hover:-translate-y-2' : 'border border-gray-200'
              }`}>
                {index === 1 && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs !font-bold !px-3 !py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <div className="!p-6 bg-white">
                  <h3 className="text-xl !font-bold text-gray-800">{pkg.name}</h3>
                  <div className="!mt-4 flex items-baseline">
                  </div>
                  <ul className="!mt-6 space-y-4">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="h-5 w-5 text-[#103e91] !mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
  
          <div className="!mt-12 bg-gray-50 rounded-xl !p-8 max-w-4xl !mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="!mb-6 md:!mb-0" data-aos="fade-up">
                <h3 className="text-xl !font-semibold text-gray-800">Need a custom solution?</h3>
                <p className="!mt-2 text-gray-600">
                  We offer tailored advertising packages to meet your specific goals and budget.
                </p>
              </div>
              <a href="https://+233275697715" className="!px-6 !py-3 bg-[#103e91] hover:bg-[#103e91] text-white !font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg">
                Give us a message
              </a>
            </div>
          </div>
        </div>
  
        <div className="!mb-20" data-aos="fade-up">
          <h2 data-aos="fade-up" className="text-3xl !font-bold text-gray-800 !mb-10">What Our Academic Partners Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white !p-6 rounded-xl shadow-md" data-aos="fade-up">
              <div className="flex items-center !mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-[#103e91] !font-bold">DR</div>
                <div className="!ml-4">
                  <h4 className="!font-semibold text-gray-800">Dr. Rebecca Chen</h4>
                  <p className="text-sm text-gray-500">PhD in Economics</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Working with Poco Solutions has allowed me to apply my research skills to meaningful projects while maintaining a flexible schedule. The compensation is excellent and payments are always on time."
              </p>
            </div>
            
            <div className="bg-white !p-6 rounded-xl shadow-md" data-aos="fade-up">
              <div className="flex items-center !mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 !font-bold">JM</div>
                <div className="!ml-4">
                  <h4 className="!font-semibold text-gray-800">Prof. James Miller</h4>
                  <p className="text-sm text-gray-500">Literature Specialist</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As an academic consultant with Poco Solutions, I've been able to help students achieve their research goals while maintaining my teaching position. The projects are intellectually stimulating and well-compensated."
              </p>
            </div>
            
            <div className="bg-white !p-6 rounded-xl shadow-md" data-aos="fade-up">
              <div className="flex items-center !mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 !font-bold">KT</div>
                <div className="!ml-4">
                  <h4 className="!font-semibold text-gray-800">Dr. Karen Thomas</h4>
                  <p className="text-sm text-gray-500">Research Methodologist</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The flexibility to choose projects that align with my expertise has been invaluable. Poco Solutions provides a platform for academics to apply their knowledge while earning competitive compensation."
              </p>
            </div>
          </div>
        </div>
  
        <div className="max-w-3xl !mb-16" data-aos="fade-up">
          <h2 data-aos="fade-up" className="text-3xl !font-bold text-gray-800 !mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-6 w-full flex flex-col gap-2.5">
            <div className="bg-white !p-6 rounded-xl shadow-md" data-aos="fade-up">
              <h3 className="text-lg !font-semibold text-gray-800" >What qualifications do I need to join as an academic researcher?</h3>
              <p className="!mt-2 text-gray-600">
                We primarily look for candidates with master's, doctorate, or PhD degrees in their respective fields. Professional certifications and relevant experience in academic research are highly valued.
              </p>
            </div>
            
            <div className="bg-white !p-6 rounded-xl shadow-md" data-aos="fade-up">
              <h3 className="text-lg !font-semibold text-gray-800" >How flexible are the working arrangements?</h3>
              <p className="!mt-2 text-gray-600" >
                Most positions offer flexible, freelance arrangements that allow you to work remotely on your own schedule. Project timelines and expectations are clearly communicated upfront.
              </p>
            </div>
            
            <div className="bg-white !p-6 rounded-xl shadow-md" data-aos="fade-up">
              <h3 className="text-lg !font-semibold text-gray-800" >What types of research projects will I work on?</h3>
              <p className="!mt-2 text-gray-600" >
                Projects span various academic disciplines and may include literature reviews, research design, data analysis, thesis/dissertation guidance, academic writing support, app development, and web development.
              </p>
            </div>
            
            <div className="bg-white !p-6 rounded-xl shadow-md" data-aos="fade-up">
              <h3 className="text-lg !font-semibold text-gray-800" >How is compensation structured?</h3>
              <p className="!mt-2 text-gray-600" >
                We offer competitive compensation based on project complexity, scope, and your qualifications. Payment structures vary by position but all include regular, reliable payment schedules.
              </p>
            </div>
          </div>
        </div>
  
        <div className="bg-[#103e91] rounded-2xl !p-8 text-white text-center" data-aos="fade-up">
          <h2 className="text-3xl !font-bold !mb-4">Join Our Academic Network Today</h2>
          <p className="max-w-2xl !mx-auto text-blue-100 !mb-8">
            Apply your expertise, earn competitive compensation, and enjoy the flexibility of freelance academic work.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:pocosolution@gmail.com" className="!px-6 !py-3 bg-white text-[#103e91] !font-medium rounded-lg transition duration-300 hover:bg-blue-50">
              Submit Your Application
            </a>
            <a href="https://wa.me/+233275697715" className="!px-6 !py-3 bg-transparent border border-white text-white !font-medium rounded-lg transition duration-300 hover:bg-[#103e91]">
              Request More Information
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default VacanciesPage;