import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, TrendingUp, AlertCircle } from "lucide-react";
import TabImage from "../assets/images/tabs/tab2.svg";

interface Feature {
  id: string;
  text: string;
  icon: React.ReactNode;
}

const Tab2 = () => {
  const features: Feature[] = [
    {
      id: "1",
      text: "Enjoy quick turnaround times that ensure you meet even the tightest deadlines without stress.",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      id: "2",
      text: "Stay informed with real-time progress updates so you can track the development of your work.",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      id: "3",
      text: "Have urgent requests handled with precision and expertise, ensuring your academic goals are met no matter the urgency.",
      icon: <AlertCircle className="w-5 h-5" />,
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
        {/* Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-[#103e91]">
              Fast & Reliable Delivery
            </h2>
            <p className="text-gray-600 text-lg">
              Get your work delivered on time without compromising on quality.
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
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex items-start gap-4 p-3 rounded-lg hover:bg-blue-50 transition-colors"
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

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-4 border-t border-gray-100"
          >
            <div className="text-sm text-gray-500 mb-3">Our Delivery Stats</div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-600">24-48h</div>
                <div className="text-xs text-gray-600">Standard</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-600">99%</div>
                <div className="text-xs text-gray-600">On Time</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-600">Urgent</div>
                <div className="text-xs text-gray-600">Available</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src={TabImage}
            alt="Fast delivery illustration"
            className="w-full max-w-md"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Tab2;
