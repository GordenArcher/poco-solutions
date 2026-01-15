import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Checkbox from "../components/Checkbox";
import {
  FileText,
  Cookie,
  CheckCircle,
  AlertCircle,
  Shield,
  Lock,
  Download,
  Printer,
  BookOpen,
  Scale,
  Clock,
  Mail,
  Phone,
  ArrowRight,
  X,
  Settings,
} from "lucide-react";

import { jsPDF } from "jspdf";

const TermsCondition = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [activeTab, setActiveTab] = useState("terms");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showCookiePreferences, setShowCookiePreferences] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    functional: false,
    analytics: false,
    marketing: false,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  } as const;

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  const handleAcceptTerms = () => {
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  const printDocument = () => {
    const printContent = document.getElementById("print-content");
    if (printContent) {
      const originalContent = document.body.innerHTML;
      document.body.innerHTML = printContent.innerHTML;
      window.print();
      document.body.innerHTML = originalContent;
      window.location.reload();
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(20);
    doc.text("Poco Solutions - Terms and Conditions", 20, 20);
    doc.setFontSize(12);

    const sections = termsSections
      .map((section) => {
        const content = Array.isArray(section.content)
          ? section.content.join("\n")
          : section.content;
        return `${section.number}. ${section.title}\n${content}\n\n`;
      })
      .join("\n");

    const lines = doc.splitTextToSize(sections, 170);
    doc.text(lines, 20, 40);

    doc.save("Poco-Solutions-Terms-and-Conditions.pdf");
  };

  const handleCookieChange = (type) => {
    if (type === "essential") return;
    setCookiePreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const saveCookiePreferences = () => {
    localStorage.setItem(
      "cookiePreferences",
      JSON.stringify(cookiePreferences),
    );
    setShowCookiePreferences(false);
  };

  useEffect(() => {
    const saved = localStorage.getItem("cookiePreferences");
    if (saved) {
      setCookiePreferences(JSON.parse(saved));
    }
  }, []);

  const termsSections = [
    {
      number: "1",
      title: "SERVICE DESCRIPTION",
      content:
        "Poco Solutions provides academic support services including but not limited to assistance with thesis/long essays, project work, term papers, assignments, proofreading, and plagiarism checking. All services are intended for educational and reference purposes only.",
      icon: BookOpen,
    },
    {
      number: "2",
      title: "CLIENT RESPONSIBILITIES",
      content: [
        "By engaging our services, clients confirm that any materials provided will be used solely for reference, learning, and research purposes.",
        "Clients are responsible for the proper citation and acknowledgment of any assistance received from Poco Solutions in accordance with their institution's academic integrity policies.",
        "Clients must provide clear instructions, relevant materials, and reasonable timelines for completion of requested services.",
      ],
      icon: Scale,
    },
    {
      number: "3",
      title: "ACADEMIC INTEGRITY",
      content: [
        "Poco Solutions provides research and writing assistance as learning aids. Clients are responsible for understanding and adhering to their academic institution's policies regarding plagiarism and academic integrity.",
        "Services are provided with the understanding that clients will not submit deliverables as their own original work without appropriate modification, integration of ideas, and proper citation.",
      ],
      icon: Shield,
    },
    {
      number: "4",
      title: "PAYMENT AND PRICING",
      content: [
        "Payment terms will be agreed upon before commencement of services. A deposit may be required for certain projects.",
        "Pricing varies based on complexity, length, deadline, and specific requirements of each project.",
        "Additional fees may apply for expedited services, extensive revisions beyond the original scope, or specialized research requirements.",
      ],
      icon: Clock,
    },
    {
      number: "5",
      title: "DELIVERY AND REVISIONS",
      content: [
        "Delivery timelines will be established at the time of order and are subject to complexity and current workload.",
        "Limited revisions are included within the agreed scope of work. Additional revisions may incur extra charges.",
        "Clients must review deliverables promptly and request any revisions within 7 days of delivery.",
      ],
    },
    {
      number: "6",
      title: "CONFIDENTIALITY",
      content: [
        "Poco Solutions maintains strict confidentiality regarding all client information and project details.",
        "Client personal information will not be shared with third parties except as required by law.",
      ],
      icon: Lock,
    },
    {
      number: "7",
      title: "REFUND POLICY",
      content: [
        "Refund requests must be submitted within 48 hours of service delivery and will be evaluated on a case-by-case basis.",
        "No refunds will be provided for completed work that meets the agreed specifications.",
        "Partial refunds may be considered in cases where deliverables substantially fail to meet the agreed requirements.",
      ],
    },
    {
      number: "8",
      title: "LIMITATION OF LIABILITY",
      content: [
        "Poco Solutions' liability is limited to the amount paid for the specific service in question.",
        "Poco Solutions is not responsible for any academic or disciplinary consequences resulting from a client's use of our services.",
      ],
    },
    {
      number: "9",
      title: "COPYRIGHT AND INTELLECTUAL PROPERTY",
      content: [
        "Until full payment is received, Poco Solutions retains all rights to materials produced.",
        "Upon full payment, clients receive a license to use the materials for personal educational purposes only.",
      ],
    },
    {
      number: "10",
      title: "CONTACT INFORMATION",
      content: [
        "For inquiries or support regarding these terms and conditions, please contact Poco Solutions:",
        "Phone: 0558707856 / 0275697715",
        "Email: pocosolution@gmail.com",
      ],
      icon: Phone,
    },
    {
      number: "11",
      title: "AMENDMENTS",
      content:
        "Poco Solutions reserves the right to modify these terms and conditions at any time. Current terms will be available upon request.",
    },
  ];

  const cookieSections = [
    {
      number: "1",
      title: "INTRODUCTION",
      content:
        "Poco Solutions uses cookies and similar technologies on our website. This Cookie Policy explains how we use cookies, how they help us, and the choices you have.",
    },
    {
      number: "2",
      title: "WHAT ARE COOKIES?",
      content:
        "Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.",
    },
    {
      number: "3",
      title: "HOW WE USE COOKIES",
      content: "We use cookies for the following purposes:",
      list: [
        "Essential cookies: Required for the operation of our website",
        "Functionality cookies: Allow us to remember choices you make",
        "Analytical cookies: Help us understand how visitors interact with our website",
        "Marketing cookies: Used to track visitors across websites to enable customized advertisements",
      ],
    },
    {
      number: "4",
      title: "TYPES OF COOKIES WE USE",
      content: [
        {
          subtitle: "Session Cookies",
          text: "These cookies are temporary and expire once you close your browser.",
        },
        {
          subtitle: "Persistent Cookies",
          text: "These cookies remain on your device until they expire or you delete them.",
        },
        { subtitle: "First-Party Cookies", text: "Set by our website domain." },
        {
          subtitle: "Third-Party Cookies",
          text: "Set by other domains we partner with, such as analytics providers.",
        },
      ],
    },
    {
      number: "5",
      title: "YOUR COOKIE CHOICES",
      content: "You can control and manage cookies in various ways:",
      list: [
        "Browser settings: You can modify your browser settings to accept or reject cookies.",
        "Our cookie banner: You can set your preferences when you first visit our website.",
        "Third-party tools: You can opt out of certain third-party cookies through their respective websites.",
      ],
    },
    {
      number: "6",
      title: "UPDATES TO THIS POLICY",
      content:
        "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.",
    },
    {
      number: "7",
      title: "CONTACT US",
      content:
        "If you have any questions about our Cookie Policy, please contact us:",
      contact: "Phone: 0558707856 / 0275697715",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-linear-to-b  py-8 px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-linear-to-r bg-blue-800 text-white rounded-2xl p-6 md:p-8 mb-6 shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                {activeTab === "terms" ? (
                  <FileText className="w-8 h-8" />
                ) : (
                  <Cookie className="w-8 h-8" />
                )}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  {activeTab === "terms"
                    ? "TERMS AND CONDITIONS"
                    : "COOKIE POLICY"}
                </h1>
                <p className="text-blue-100 mt-1">
                  {activeTab === "terms"
                    ? "Poco Solutions Academic Support Services"
                    : "Poco Solutions Privacy and Cookie Usage"}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-blue-200">
                Effective Date: March 4, 2025 • Last Updated: January 12, 2026
              </p>
              <div className="flex gap-2">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={downloadPDF}
                  className="p-2 cursor-pointer bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300"
                  title="Download PDF"
                >
                  <Download className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={printDocument}
                  className="p-2 cursor-pointer bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-300"
                  title="Print Document"
                >
                  <Printer className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="flex overflow-x-auto mb-6 bg-white rounded-xl border border-blue-600/30"
          >
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab("terms")}
              className={`flex items-center gap-3 px-6 py-4 cursor-pointer font-medium shrink-0 ${activeTab === "terms" ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50" : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"} transition-colors duration-300`}
            >
              <FileText className="w-5 h-5" />
              Terms & Conditions
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab("cookies")}
              className={`flex items-center gap-3 px-6 py-4 cursor-pointer font-medium shrink-0 ${activeTab === "cookies" ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50" : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"} transition-colors duration-300`}
            >
              <Cookie className="w-5 h-5" />
              Cookie Policy
            </motion.button>
          </motion.div>

          <AnimatePresence mode="wait">
            {activeTab === "terms" ? (
              <motion.div
                key="terms"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className=" rounded-2xl overflow-hidden"
              >
                <div id="print-content" className="printable-content">
                  <div className="hidden print:block">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                      Poco Solutions - Terms and Conditions
                    </h1>
                    <p className="text-gray-600 mb-6">
                      Effective Date: March 4, 2025
                    </p>
                  </div>

                  <div className={`p-6 md:p-8 `}>
                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      animate="visible"
                      className={`space-y-8 print:space-y-6 `}
                    >
                      {termsSections.map((section, index) => (
                        <motion.section
                          key={index}
                          variants={sectionVariants}
                          className="scroll-mt-20 print:break-inside-avoid"
                        >
                          <div className="flex items-start gap-4">
                            <div className="shrink-0">
                              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <span className="text-blue-600 font-bold">
                                  {section.number}
                                </span>
                              </div>
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-3">
                                {section.icon && (
                                  <section.icon className="w-5 h-5 text-blue-600" />
                                )}
                                <h2 className="text-xl font-bold text-gray-900">
                                  {section.title}
                                </h2>
                              </div>

                              {Array.isArray(section.content) ? (
                                <ul className="space-y-3">
                                  {section.content.map((item, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.05 }}
                                      className="flex items-start gap-2"
                                    >
                                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                                      <span className="text-gray-700">
                                        {item}
                                      </span>
                                    </motion.li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="text-gray-700 leading-relaxed">
                                  {section.content}
                                </p>
                              )}
                            </div>
                          </div>
                        </motion.section>
                      ))}
                    </motion.div>
                  </div>

                  <div className="border-t border-gray-200 p-6 md:p-8 bg-gray-50/50 print:hidden">
                    <div className="flex items-start gap-4">
                      <AlertCircle className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                          Important Notice
                        </h3>
                        <p className="text-gray-700 mb-6">
                          By engaging Poco Solutions' services, clients
                          acknowledge they have read, understood, and agreed to
                          these terms and conditions.
                        </p>

                        <div className="space-y-6">
                          <motion.div
                            className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 cursor-pointer"
                            onClick={() => setIsChecked(!isChecked)}
                          >
                            <Checkbox
                              IsChecked={isChecked}
                              setIsChecked={setIsChecked}
                            />
                            <div>
                              <span className="font-medium text-gray-900 block mb-1">
                                I have read and agree to the Terms and
                                Conditions
                              </span>
                              <p className="text-sm text-gray-600">
                                You must accept the terms to proceed with our
                                services
                              </p>
                            </div>
                          </motion.div>

                          <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                              disabled={!isChecked}
                              whileTap={isChecked ? { scale: 0.95 } : {}}
                              onClick={handleAcceptTerms}
                              className={`flex-1 cursor-pointer py-3 px-6 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 ${isChecked ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                            >
                              {showConfirmation ? (
                                <>
                                  <CheckCircle className="w-5 h-5 animate-pulse" />
                                  Terms Accepted!
                                </>
                              ) : (
                                <>
                                  Accept Terms
                                  <ArrowRight className="w-5 h-5" />
                                </>
                              )}
                            </motion.button>

                            <motion.a
                              href="/contact"
                              whileTap={{ scale: 0.95 }}
                              className="flex-1 py-3 px-6 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300 text-center"
                            >
                              Contact for Questions
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="cookies"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className=" rounded-2xl p-6 md:p-8"
              >
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  {cookieSections.map((section, index) => (
                    <motion.section
                      key={index}
                      variants={sectionVariants}
                      className="scroll-mt-20"
                    >
                      <div className="flex items-start gap-4">
                        <div className="shrink-0">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-blue-600 font-bold">
                              {section.number}
                            </span>
                          </div>
                        </div>

                        <div className="flex-1">
                          <h2 className="text-xl font-bold text-gray-900 mb-3">
                            {section.title}
                          </h2>

                          {section.list ? (
                            <>
                              <p className="text-gray-700 mb-3">
                                {section.content}
                              </p>
                              <ul className="space-y-2">
                                {section.list.map((item, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-start gap-2"
                                  >
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 shrink-0"></div>
                                    <span className="text-gray-700">
                                      {item}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            </>
                          ) : Array.isArray(section.content) &&
                            typeof section.content[0] === "object" ? (
                            <div className="space-y-4">
                              {section.content.map((item, i) => (
                                <div key={i}>
                                  <h4 className="font-medium text-gray-900 mb-1">
                                    {item.subtitle}
                                  </h4>
                                  <p className="text-gray-700">{item.text}</p>
                                </div>
                              ))}
                            </div>
                          ) : Array.isArray(section.content) ? (
                            <div className="space-y-2">
                              {section.content.map((item, i) => (
                                <p key={i} className="text-gray-700">
                                  {item}
                                </p>
                              ))}
                            </div>
                          ) : (
                            <p className="text-gray-700 leading-relaxed">
                              {section.content}
                            </p>
                          )}

                          {section.contact && (
                            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                              <p className="text-gray-700">{section.contact}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.section>
                  ))}
                </motion.div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl">
                    <Cookie className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        Cookie Preferences
                      </h3>
                      <p className="text-gray-700 mb-4">
                        You can manage your cookie preferences at any time
                        through your browser settings or by contacting us.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <motion.button
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setShowCookiePreferences(true)}
                          className="px-4 cursor-pointer py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                          <Settings className="w-4 h-4 inline mr-2" />
                          Manage Cookies
                        </motion.button>
                        <motion.a
                          href="/contact"
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 cursor-pointer border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                        >
                          Contact Support
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Need Help Understanding?
                </h3>
                <p className="text-gray-600">
                  Our team is ready to clarify any terms or policies for you.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="mailto:pocosolution@gmail.com"
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </motion.a>
                <motion.a
                  href="tel:+233275697715"
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showCookiePreferences && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 p-6 max-w-4xl mx-auto rounded-t-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Cookie className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  Cookie Preferences
                </h3>
              </div>
              <button
                onClick={() => setShowCookiePreferences(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">
                    Essential Cookies
                  </h4>
                  <p className="text-sm text-gray-600">
                    Required for the website to function
                  </p>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={cookiePreferences.essential}
                    disabled
                    className="sr-only"
                  />
                  <div className="w-12 h-6 bg-blue-600 rounded-full cursor-not-allowed"></div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300">
                <div>
                  <h4 className="font-medium text-gray-900">
                    Functional Cookies
                  </h4>
                  <p className="text-sm text-gray-600">
                    Remember your preferences and settings
                  </p>
                </div>
                <button
                  onClick={() => handleCookieChange("functional")}
                  className="relative"
                >
                  <input
                    type="checkbox"
                    checked={cookiePreferences.functional}
                    readOnly
                    className="sr-only"
                  />
                  <div
                    className={`w-12 h-6 rounded-full transition-colors duration-300 ${cookiePreferences.functional ? "bg-blue-600" : "bg-gray-300"}`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${cookiePreferences.functional ? "translate-x-7" : "translate-x-1"}`}
                    ></div>
                  </div>
                </button>
              </div>

              <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300">
                <div>
                  <h4 className="font-medium text-gray-900">
                    Analytics Cookies
                  </h4>
                  <p className="text-sm text-gray-600">
                    Help us improve our website
                  </p>
                </div>
                <button
                  onClick={() => handleCookieChange("analytics")}
                  className="relative"
                >
                  <input
                    type="checkbox"
                    checked={cookiePreferences.analytics}
                    readOnly
                    className="sr-only"
                  />
                  <div
                    className={`w-12 h-6 rounded-full transition-colors duration-300 ${cookiePreferences.analytics ? "bg-blue-600" : "bg-gray-300"}`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${cookiePreferences.analytics ? "translate-x-7" : "translate-x-1"}`}
                    ></div>
                  </div>
                </button>
              </div>

              <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300">
                <div>
                  <h4 className="font-medium text-gray-900">
                    Marketing Cookies
                  </h4>
                  <p className="text-sm text-gray-600">
                    Show you relevant advertisements
                  </p>
                </div>
                <button
                  onClick={() => handleCookieChange("marketing")}
                  className="relative"
                >
                  <input
                    type="checkbox"
                    checked={cookiePreferences.marketing}
                    readOnly
                    className="sr-only"
                  />
                  <div
                    className={`w-12 h-6 rounded-full transition-colors duration-300 ${cookiePreferences.marketing ? "bg-blue-600" : "bg-gray-300"}`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${cookiePreferences.marketing ? "translate-x-7" : "translate-x-1"}`}
                    ></div>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCookiePreferences(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
              >
                Cancel
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={saveCookiePreferences}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Save Preferences
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .printable-content,
          .printable-content * {
            visibility: visible;
          }
          .printable-content {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white;
          }
          .printable-content h1,
          .printable-content h2,
          .printable-content h3,
          .printable-content p,
          .printable-content li {
            color: black !important;
          }
        }
      `}</style>
    </>
  );
};

export default TermsCondition;
