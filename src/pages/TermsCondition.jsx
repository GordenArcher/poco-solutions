import React, { useState } from 'react'
import Checkbox from '../components/Checkbox';
import { motion } from 'framer-motion';

const TermsCondition = () => {

    const [isExpanded, setIsExpanded] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [activeTab, setActiveTab] = useState('terms');
  
  return (
    <div className="max-w-4xl max-sm:!p-4 !p-10 !mx-auto bg-white overflow-hidden">
      <div className="bg-[#103e91] text-white !px-6 !py-4">
        <h1 className="text-2xl max-sm:text-lg !font-bold">TERMS AND CONDITIONS</h1>
        <p className="text-lg max-sm:text-sm">Poco Solutions Academic Support Services</p>
        <p className="text-sm !mt-1">Effective Date: March 4, 2025</p>
      </div>
      
      <div className="flex border-b border-gray-200">
        <button 
          className={`!px-6 max-sm:!px-2 !py-3 cursor-pointer !font-medium ${activeTab === 'terms' ? 'text-[#103e91] border-b-2 border-[#103e91]' : 'text-gray-600 hover:text-[#103e91]'}`}
          onClick={() => setActiveTab('terms')}
        >
          Terms & Conditions
        </button>
        <button 
          className={`!px-6 !py-3 cursor-pointer !font-medium ${activeTab === 'cookies' ? 'text-[#103e91] border-b-2 border-[#103e91]' : 'text-gray-600 hover:text-[#103e91]'}`}
          onClick={() => setActiveTab('cookies')}
        >
          Cookie Policy
        </button>
      </div>
      
      <div className="p-6">
        {activeTab === 'terms' ? (
            <motion.div
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            >
                <div className="p-6">
                    <div className={`space-y-6 ${!isExpanded && "max-h-96 overflow-hidden relative"}`}>
                        {!isExpanded && (
                            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
                        )}
                    
                        <section>
                            <h2 className="text-xl !font-bold text-[#103e91]">1. SERVICE DESCRIPTION</h2>
                            <p className="!mt-2">
                            Poco Solutions provides academic support services including but not limited to assistance with thesis/long essays, 
                            project work, term papers, assignments, proofreading, and plagiarism checking. All services are intended for 
                            educational and reference purposes only.
                            </p>
                        </section>
                    
                        <section>
                            <h2 className="text-xl !font-bold text-[#103e91]">2. CLIENT RESPONSIBILITIES</h2>
                            <p className="!mt-2">
                            2.1 By engaging our services, clients confirm that any materials provided will be used solely for reference, 
                            learning, and research purposes.
                            </p>
                            <p className="!mt-2">
                            2.2 Clients are responsible for the proper citation and acknowledgment of any assistance received from 
                            Poco Solutions in accordance with their institution's academic integrity policies.
                            </p>
                            <p className="!mt-2">
                            2.3 Clients must provide clear instructions, relevant materials, and reasonable timelines for completion 
                            of requested services.
                            </p>
                        </section>
                    
                        <section>
                            <h2 className="text-xl !font-bold text-[#103e91]">3. ACADEMIC INTEGRITY</h2>
                            <p className="!mt-2">
                            3.1 Poco Solutions provides research and writing assistance as learning aids. Clients are responsible for 
                            understanding and adhering to their academic institution's policies regarding plagiarism and academic integrity.
                            </p>
                            <p className="!mt-2">
                            3.2 Services are provided with the understanding that clients will not submit deliverables as their own original 
                            work without appropriate modification, integration of ideas, and proper citation.
                            </p>
                        </section>
                        
                        <section>
                            <h2 className="text-xl !font-bold text-[#103e91]">4. PAYMENT AND PRICING</h2>
                            <p className="!mt-2">
                            4.1 Payment terms will be agreed upon before commencement of services. A deposit may be required for certain projects.
                            </p>
                            <p className="!mt-2">
                            4.2 Pricing varies based on complexity, length, deadline, and specific requirements of each project.
                            </p>
                            <p className="!mt-2">
                            4.3 Additional fees may apply for expedited services, extensive revisions beyond the original scope, or 
                            specialized research requirements.
                            </p>
                        </section>
                    
                        <section>
                            <h2 className="text-xl !font-bold text-[#103e91]">5. DELIVERY AND REVISIONS</h2>
                            <p className="!mt-2">
                            5.1 Delivery timelines will be established at the time of order and are subject to complexity and current workload.
                            </p>
                            <p className="!mt-2">
                            5.2 Limited revisions are included within the agreed scope of work. Additional revisions may incur extra charges.
                            </p>
                            <p className="!mt-2">
                            5.3 Clients must review deliverables promptly and request any revisions within 7 days of delivery.
                            </p>
                        </section>
                        
                        <section>
                            <h2 className="text-xl !font-bold text-[#103e91]">6. CONFIDENTIALITY</h2>
                            <p className="!mt-2">
                            6.1 Poco Solutions maintains strict confidentiality regarding all client information and project details.
                            </p>
                            <p className="!mt-2">
                            6.2 Client personal information will not be shared with third parties except as required by law.
                            </p>
                        </section>
                    
                        <section>
                            <h2 className="text-xl !font-bold text-[#103e91]">7. REFUND POLICY</h2>
                            <p className="!mt-2">
                            7.1 Refund requests must be submitted within 48 hours of service delivery and will be evaluated on a case-by-case basis.
                            </p>
                            <p className="!mt-2">
                            7.2 No refunds will be provided for completed work that meets the agreed specifications.
                            </p>
                            <p className="!mt-2">
                            7.3 Partial refunds may be considered in cases where deliverables substantially fail to meet the agreed requirements.
                            </p>
                        </section>
                        
                        <section>
                            <h2 className="text-xl !font-bold text-[#103e91]">8. LIMITATION OF LIABILITY</h2>
                            <p className="!mt-2">
                            8.1 Poco Solutions' liability is limited to the amount paid for the specific service in question.
                            </p>
                            <p className="!mt-2">
                            8.2 Poco Solutions is not responsible for any academic or disciplinary consequences resulting from a client's 
                            use of our services.
                            </p>
                        </section>
                    
                        <section>
                            <h2 className="text-xl !font-bold text-[#103e91]">9. COPYRIGHT AND INTELLECTUAL PROPERTY</h2>
                            <p className="!mt-2">
                            9.1 Until full payment is received, Poco Solutions retains all rights to materials produced.
                            </p>
                            <p className="!mt-2">
                            9.2 Upon full payment, clients receive a license to use the materials for personal educational purposes only.
                            </p>
                        </section>
                        
                        <section>
                            <h2 className="text-xl !font-bold text-[#103e91]">10. CONTACT INFORMATION</h2>
                            <p className="!mt-2">
                            For inquiries or support regarding these terms and conditions, please contact Poco Solutions:
                            </p>
                            <p className="!mt-2">
                            Phone: 0558707856 / 0275697715
                            </p>
                        </section>
                    
                        <section>
                            <h2 className="text-xl !font-bold text-[#103e91]">11. AMENDMENTS</h2>
                            <p className="!mt-2">
                            Poco Solutions reserves the right to modify these terms and conditions at any time. Current terms will be 
                            available upon request.
                            </p>
                        </section>
                        
                        <p className="mt-4 font-medium">
                            By engaging Poco Solutions' services, clients acknowledge they have read, understood, and agreed to these 
                            terms and conditions.
                        </p>
                    </div>
                </div>
            </motion.div>
        ) : (
          <motion.div
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="space-y-6">
            <section>
              <h2 className="text-xl !font-bold text-[#103e91]">1. INTRODUCTION</h2>
              <p className="!mt-2">
                Poco Solutions we uses cookies and similar technologies on our website. This Cookie Policy explains how we use cookies, how they help us, and the choices you have.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl !font-bold text-[#103e91]">2. WHAT ARE COOKIES?</h2>
              <p className="!mt-2">
                Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl !font-bold text-[#103e91]">3. HOW WE USE COOKIES</h2>
              <p className="!mt-2">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc ml-6 !mt-2">
                <li className="mt-1">Essential cookies: Required for the operation of our website</li>
                <li className="mt-1">Functionality cookies: Allow us to remember choices you make</li>
                <li className="mt-1">Analytical cookies: Help us understand how visitors interact with our website</li>
                <li className="mt-1">Marketing cookies: Used to track visitors across websites to enable customized advertisements</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl !font-bold text-[#103e91]">4. TYPES OF COOKIES WE USE</h2>
              <div className="!mt-2">
                <p className="font-medium">4.1 Session Cookies</p>
                <p className="mt-1">These cookies are temporary and expire once you close your browser.</p>
                
                <p className="font-medium mt-3">4.2 Persistent Cookies</p>
                <p className="mt-1">These cookies remain on your device until they expire or you delete them.</p>
                
                <p className="font-medium mt-3">4.3 First-Party Cookies</p>
                <p className="mt-1">Set by our website domain.</p>
                
                <p className="font-medium mt-3">4.4 Third-Party Cookies</p>
                <p className="mt-1">Set by other domains we partner with, such as analytics providers.</p>
              </div>
            </section>
            
            <section>
              <h2 className="text-xl !font-bold text-[#103e91]">5. YOUR COOKIE CHOICES</h2>
              <p className="!mt-2">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc ml-6 !mt-2">
                <li className="mt-1">Browser settings: You can modify your browser settings to accept or reject cookies.</li>
                <li className="mt-1">Our cookie banner: You can set your preferences when you first visit our website.</li>
                <li className="mt-1">Third-party tools: You can opt out of certain third-party cookies through their respective websites.</li>
              </ul>
              <p className="!mt-2">
                Please note that disabling certain cookies may affect the functionality of our website.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl !font-bold text-[#103e91]">6. UPDATES TO THIS POLICY</h2>
              <p className="!mt-2">
                We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl !font-bold text-[#103e91]">7. CONTACT US</h2>
              <p className="!mt-2">
                If you have any questions about our Cookie Policy, please contact us:
              </p>
              <p className="!mt-2">
                Phone: 0558707856 / 0275697715
              </p>
            </section>
            </div>
          </motion.div>
        )}
        
        {activeTab === 'terms' && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="!mt-6 !px-4 !py-2 cursor-pointer bg-[#103e91] text-white rounded hover:bg-[#103e91] transition-colors"
          >
            {isExpanded ? "Show Less" : "Read Full Terms"}
          </button>
        )}
        
        <div className="!mt-6 !pt-4 border-t border-gray-200">
          <div className="flex items-start gap-2 cursor-pointer">
            <Checkbox isChecked={isChecked} setIsChecked={setIsChecked} />
            <span className="!ml-3 text-gray-700">
              I have read and agree to the Terms and Conditions and Cookie Policy of Poco Solutions
            </span>
          </div>
          
          <button 
            disabled={!isChecked}
            className={`!mt-4 !px-6 !py-2 cursor-pointer rounded !font-medium ${
              isChecked 
                ? "bg-[#103e91] text-white hover:bg-[#103e91]" 
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            } transition-colors`}
          >
            Accept Terms
          </button>
        </div>
      
      </div>

    </div>
  );
}

export default TermsCondition
