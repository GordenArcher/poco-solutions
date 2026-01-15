import { motion } from "framer-motion";
import { Plans } from "../constant/Data";
import PricingCard from "../components/PricingCard";
import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

const PricingPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as const;

  const tableData = [
    {
      feature: "Consultation Access",
      basic: true,
      standard: true,
      premium: true,
    },
    {
      feature: "Advanced Formatting",
      basic: false,
      standard: true,
      premium: true,
    },
    {
      feature: "Unlimited Revisions",
      basic: false,
      standard: false,
      premium: true,
    },
    {
      feature: "Priority Support",
      basic: false,
      standard: true,
      premium: true,
    },
    {
      feature: "Plagiarism Report",
      basic: true,
      standard: true,
      premium: true,
    },
    {
      feature: "Direct Expert Access",
      basic: false,
      standard: false,
      premium: true,
    },
  ];

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Mobile Money, bank transfers, and major credit/debit cards.",
    },
    {
      question: "Can I switch plans later?",
      answer:
        "Yes, you can upgrade or downgrade your plan anytime. Changes take effect immediately.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "Refunds are considered on a case-by-case basis. Contact our support team for specific inquiries.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No, our pricing is transparent with no hidden fees. What you see is what you pay.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your academic needs. No hidden fees, no
            surprises.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {Plans.map((plan: PricingPlan, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <PricingCard plan={plan} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Compare Plans
          </h2>
          <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-200">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Features
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Basic
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Standard
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      Premium
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {tableData.map((row, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-gray-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.basic ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.standard ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.premium ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Plan?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Have specific requirements? Contact us for a personalized quote
            tailored to your unique needs.
          </p>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 cursor-pointer text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Contact for Custom Quote
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h4 className="text-lg font-medium text-gray-700 mb-4">
            Accepted Payment Methods
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
              <span className="text-gray-700 font-medium">Mobile Money</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
              <span className="text-gray-700 font-medium">Bank Transfer</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
              <span className="text-gray-700 font-medium">
                Credit/Debit Cards
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;
