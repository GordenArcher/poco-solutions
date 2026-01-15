import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import TabImage from "../assets/images/tabs/tab1.svg";

interface Feature {
  id: string;
  text: string;
}

const Tab1 = () => {
  const features: Feature[] = [
    {
      id: "1",
      text: "Work with experienced professionals across various fields of study who understand the intricacies of academic writing.",
    },
    {
      id: "2",
      text: "Benefit from well-structured, thoroughly researched, and plagiarism-free content that meets the highest academic standards.",
    },
    {
      id: "3",
      text: "Receive personalized guidance and support for your projects, helping you develop a deeper understanding of the subject matter.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-[#103e91]">
              Expert Academic Assistance
            </h2>
            <p className="text-gray-600 text-lg">
              Receive high-quality research and writing services that are
              tailored to your academic needs.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-start gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring" }}
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500 mt-1" />
                </motion.div>
                <p className="text-gray-700">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src={TabImage}
            alt="Academic expertise illustration"
            className="w-full max-w-md"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Tab1;
