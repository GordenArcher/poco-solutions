import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, EyeOff } from "lucide-react";
import TabImage from "../assets/images/tabs/tab3.svg";

interface SecurityFeature {
  id: string;
  text: string;
  icon: React.ReactNode;
}

const Tab3 = () => {
  const features: SecurityFeature[] = [
    {
      id: "1",
      text: "We guarantee the confidentiality of your academic work, making sure it remains your intellectual property at all times.",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      id: "2",
      text: "Secure and trusted payment and communication channels ensure that your details and transactions are protected.",
      icon: <Lock className="w-5 h-5" />,
    },
    {
      id: "3",
      text: "Rest assured that no personal or project information will be shared, ensuring complete privacy throughout the process.",
      icon: <EyeOff className="w-5 h-5" />,
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
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-green-500" />
              <h2 className="text-3xl font-bold text-[#103e91]">
                100% Confidential & Secure
              </h2>
            </div>
            <p className="text-gray-600 text-lg">
              Your privacy and data security are our top priorities, ensuring a
              worry-free experience for you.
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
                  className="flex-shrink-0 p-2 bg-blue-100 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-blue-600">{feature.icon}</div>
                </motion.div>
                <p className="text-gray-700">{feature.text}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="p-4 bg-blue-50 rounded-lg border border-blue-100"
          >
            <div className="text-sm text-blue-600 font-medium mb-1">
              Our Security Promise
            </div>
            <div className="text-gray-700">
              All work is encrypted, stored securely, and never shared with
              third parties.
            </div>
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
            alt="Security and privacy illustration"
            className="w-full max-w-md"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Tab3;
