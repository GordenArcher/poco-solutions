import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tooltip from "./FaqBut";
import { faqs } from "../constant/Data";
import type { FAQItem } from "../types/faq";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  } as const;

  const answerVariants = {
    collapsed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    expanded: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  } as const;

  const iconVariants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  } as const;

  return (
    <div className="w-full bg-[#f8fafc] py-24">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-[#103e91]">
            Frequently Asked Questions
          </h2>
          <Tooltip />
        </motion.div>

        <motion.div
          className="space-y-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faqs.map((faq: FAQItem, index: number) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden"
              variants={itemVariants}
              layout
            >
              <button type="button"
                className="w-full p-6 flex justify-between items-center text-left cursor-pointer"
                onClick={() => toggleAnswer(index)}
                aria-expanded={activeIndex === index}
              >
                <h3 className="text-lg font-medium text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  variants={iconVariants}
                  animate={activeIndex === index ? "expanded" : "collapsed"}
                  transition={{ duration: 0.2 }}
                  className="shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#103e91]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {activeIndex === index && (
                  <motion.div
                    className="overflow-hidden"
                    variants={answerVariants}
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    layout
                  >
                    <div className="px-6 pb-6 pt-0">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
