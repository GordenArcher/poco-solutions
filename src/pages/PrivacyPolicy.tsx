import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Eye,
  Lock,
  User,
  Mail,
  Phone,
  MessageCircle,
  Download,
  Printer,
  ChevronDown,
  ChevronUp,
  FileText,
  Clock,
  AlertCircle,
  CheckCircle,
  Cookie,
} from "lucide-react";
import { jsPDF } from "jspdf";

const PrivacyPolicy = () => {
  const [expandedSection, setExpandedSection] = useState<null | number>(null);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    functional: false,
    analytics: false,
    marketing: false,
  });
  const [showCookieBanner, setShowCookieBanner] = useState(true);

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
      transition: { duration: 0.4, ease: "easeOut" },
    },
  } as const;

  useEffect(() => {
    const saved = localStorage.getItem("privacyCookiePreferences");
    if (saved) {
      setCookiePreferences(JSON.parse(saved));
      setShowCookieBanner(false);
    }
  }, []);

  const toggleSection = (index: number | null) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const handleCookieChange = (type: string) => {
    if (type === "essential") return;
    setCookiePreferences((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const saveCookiePreferences = () => {
    localStorage.setItem(
      "privacyCookiePreferences",
      JSON.stringify(cookiePreferences),
    );
    setShowCookieBanner(false);
  };

  const acceptAllCookies = () => {
    setCookiePreferences({
      essential: true,
      functional: true,
      analytics: true,
      marketing: true,
    });
    localStorage.setItem(
      "privacyCookiePreferences",
      JSON.stringify({
        essential: true,
        functional: true,
        analytics: true,
        marketing: true,
      }),
    );
    setShowCookieBanner(false);
  };

  const printDocument = () => {
    const printContent = document.getElementById("print-privacy-policy");
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
    doc.text("Poco Solutions - Privacy Policy", 20, 20);
    doc.setFontSize(12);

    const sections = privacySections
      .map((section) => {
        const content = Array.isArray(section.content)
          ? section.content.map((item) => `• ${item}`).join("\n")
          : section.content;
        return `${section.number}. ${section.title}\n${content}\n\n`;
      })
      .join("\n");

    const lines = doc.splitTextToSize(sections, 170);
    doc.text(lines, 20, 40);

    doc.save("Poco-Solutions-Privacy-Policy.pdf");
  };

  const privacySections = [
    {
      number: "1",
      title: "Information We Collect",
      icon: Eye,
      content: [
        "Name and contact information (email, phone number)",
        "Academic information and project requirements",
        "Payment and billing information",
        "Communication history and preferences",
        "Website usage data and analytics",
      ],
    },
    {
      number: "2",
      title: "How We Use Your Information",
      icon: User,
      content: [
        "Provide and improve academic support services",
        "Process transactions and manage payments securely",
        "Communicate about services, updates, and offers",
        "Personalize your experience and recommendations",
        "Comply with legal obligations and protect rights",
      ],
    },
    {
      number: "3",
      title: "Information Sharing",
      icon: Shield,
      content: [
        "With academic experts working on your project",
        "Payment processors for secure transactions",
        "Legal authorities when required by law",
        "Service providers who assist our operations",
        "With your explicit consent for specific purposes",
      ],
    },
    {
      number: "4",
      title: "Data Security",
      icon: Lock,
      content: [
        "Encryption of sensitive data in transit and at rest",
        "Regular security audits and vulnerability assessments",
        "Access controls and authentication measures",
        "Secure data storage and backup procedures",
        "Employee training on data protection practices",
      ],
    },
    {
      number: "5",
      title: "Your Rights",
      icon: CheckCircle,
      content: [
        "Access your personal information we hold",
        "Request correction of inaccurate data",
        "Delete your personal information",
        "Object to processing of your data",
        "Data portability to another service",
        "Withdraw consent at any time",
      ],
    },
    {
      number: "6",
      title: "Data Retention",
      icon: Clock,
      content: [
        "We retain personal data only as long as necessary",
        "Project data: 5 years for reference and support",
        "Financial records: 7 years for legal compliance",
        "Marketing preferences: Until you opt-out",
        "You can request deletion at any time",
      ],
    },
    {
      number: "7",
      title: "Changes to This Policy",
      icon: FileText,
      content: [
        "We will notify you of significant changes",
        "Updated policies posted on this page",
        "Continued use constitutes acceptance",
        "Review this policy periodically",
      ],
    },
    {
      number: "8",
      title: "Contact Information",
      icon: Mail,
      content: [
        "Email: pocosolution@gmail.com",
        "Phone: 0558707856 / 0275697715",
        "WhatsApp: +233 27 569 7715",
        "Address: Ayikai Doblo, Accra, Ghana",
      ],
    },
  ];

  const consentOptions = [
    {
      icon: Eye,
      title: "Essential Cookies",
      description: "Required for website functionality",
      type: "essential",
      mandatory: true,
    },
    {
      icon: User,
      title: "Functional Cookies",
      description: "Remember your preferences",
      type: "functional",
      mandatory: false,
    },
    {
      icon: Shield,
      title: "Analytics Cookies",
      description: "Help us improve our services",
      type: "analytics",
      mandatory: false,
    },
    {
      icon: Mail,
      title: "Marketing Cookies",
      description: "Show relevant content",
      type: "marketing",
      mandatory: false,
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-gray-50 to-white py-8 px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-linear-to-r bg-blue-800 text-white rounded-2xl p-6 md:p-8 mb-6 shadow-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-xl">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  Privacy Policy
                </h1>
                <p className="text-blue-100 mt-1">
                  Poco Solutions Data Protection and Privacy
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-blue-200">
                Effective Date: March 4, 2025 • Last Updated: March 4, 2025
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
                  title="Print Policy"
                >
                  <Printer className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mb-6 p-6 bg-blue-50 rounded-xl border border-blue-200"
          >
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  Important Notice
                </h3>
                <p className="text-gray-700">
                  This Privacy Policy explains how Poco Solutions collects,
                  uses, and protects your personal information when you use our
                  academic support services. By using our services, you consent
                  to the practices described in this policy.
                </p>
              </div>
            </div>
          </motion.div>

          <div id="print-privacy-policy" className="printable-content">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="hidden print:block p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  Poco Solutions - Privacy Policy
                </h1>
                <p className="text-gray-600 mb-6">
                  Effective Date: March 4, 2025
                </p>
              </div>

              <div className="p-6 md:p-8">
                <div className="space-y-6 print:space-y-4">
                  {privacySections.map((section, index) => (
                    <motion.section
                      key={index}
                      variants={sectionVariants}
                      className="scroll-mt-20 print:break-inside-avoid"
                    >
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                          expandedSection === index
                            ? "bg-blue-50 border-blue-200"
                            : "bg-white border-gray-200 hover:border-blue-300"
                        }`}
                        onClick={() => toggleSection(index)}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <section.icon className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <h2 className="text-xl font-bold text-gray-900">
                                {section.number}. {section.title}
                              </h2>
                            </div>
                          </div>
                          <div className="shrink-0">
                            {expandedSection === index ? (
                              <ChevronUp className="w-5 h-5 text-blue-600" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-400" />
                            )}
                          </div>
                        </div>

                        <AnimatePresence>
                          {expandedSection === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pt-4 border-t border-gray-200">
                                {Array.isArray(section.content) ? (
                                  <ul className="space-y-3">
                                    {section.content.map((item, i) => (
                                      <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        className="flex items-start gap-3"
                                      >
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0"></div>
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
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {expandedSection !== index && (
                          <div className="pt-4 border-t border-gray-200">
                            <p className="text-gray-600 text-sm">
                              Click to expand section details
                            </p>
                          </div>
                        )}
                      </motion.div>
                    </motion.section>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-200 p-6 md:p-8 bg-gray-50/50 print:hidden">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      Your Privacy Matters
                    </h3>
                    <p className="text-gray-700 mb-6">
                      We are committed to protecting your privacy and ensuring
                      your personal information is handled securely. If you have
                      any questions or concerns about our privacy practices,
                      please don't hesitate to contact us.
                    </p>

                    <div className="flex flex-wrap gap-4">
                      <motion.a
                        href="mailto:pocosolution@gmail.com"
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                      >
                        <Mail className="w-4 h-4" />
                        Email Questions
                      </motion.a>
                      <motion.a
                        href="https://wa.me/+233275697715"
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp Support
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
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showCookieBanner && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl z-50 p-6"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Cookie className="w-5 h-5 text-blue-600" />
                    <h3 className="text-lg font-bold text-gray-900">
                      Cookie Preferences
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    We use cookies to enhance your experience on our website.
                    Please choose which cookies you consent to. Essential
                    cookies are required for the website to function properly.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 shrink-0">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowCookieBanner(false)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    Essential Only
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={acceptAllCookies}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    Accept All
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      const modal = document.getElementById("cookie-modal");
                      if (modal) {
                        modal.showModal();
                      }
                    }}
                    className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    Customize
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <dialog
        id="cookie-modal"
        className="p-0 rounded-2xl shadow-2xl max-w-md w-full"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Cookie className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">
                Cookie Settings
              </h3>
            </div>
            <button
              onClick={() => {
                const modal = document.getElementById("cookie-modal");
                if (modal) modal.close();
              }}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            >
              <ChevronUp className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="space-y-4 mb-6">
            {consentOptions.map((option) => (
              <div
                key={option.type}
                className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${option.mandatory ? "bg-blue-100" : "bg-gray-100"}`}
                  >
                    <option.icon
                      className={`w-4 h-4 ${option.mandatory ? "text-blue-600" : "text-gray-600"}`}
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {option.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {option.description}
                    </p>
                    {option.mandatory && (
                      <span className="text-xs text-blue-600 mt-1 block">
                        Always active
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => handleCookieChange(option.type)}
                  disabled={option.mandatory}
                  className={`relative ${option.mandatory ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <input
                    type="checkbox"
                    checked={cookiePreferences[option.type]}
                    readOnly
                    className="sr-only"
                  />
                  <div
                    className={`w-12 h-6 rounded-full transition-colors duration-300 ${
                      cookiePreferences[option.type]
                        ? "bg-blue-600"
                        : "bg-gray-300"
                    } ${option.mandatory ? "bg-blue-400" : ""}`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                        cookiePreferences[option.type]
                          ? "translate-x-7"
                          : "translate-x-1"
                      }`}
                    ></div>
                  </div>
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const modal = document.getElementById("cookie-modal");
                if (modal) modal.close();
              }}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300"
            >
              Cancel
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                saveCookiePreferences();
                const modal = document.getElementById("cookie-modal");
                if (modal) modal.close();
              }}
              className="px-4 cursor-pointer py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Save Preferences
            </motion.button>
          </div>
        </div>
      </dialog>

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

        dialog::backdrop {
          background: rgba(0, 0, 0, 0.5);
        }

        dialog {
          border: none;
          background: white;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  );
};

export default PrivacyPolicy;
