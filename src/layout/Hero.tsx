import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroImg from "../assets/images/hero.svg";
import Button from "../components/Button";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  Shield,
  Clock,
  Users,
} from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as const;

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
  } as const;

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  } as const;

  const checkItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.6,
      },
    }),
  } as const;

  const featureVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.15,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="relative pt-16 pb-20 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 lg:pr-8"
          >
            <motion.div variants={badgeVariants}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r  text-blue-700 text-sm font-semibold border border-blue-200">
                Expert Academic Support
              </div>
            </motion.div>

            <div className="space-y-6">
              <motion.h1
                custom={0}
                variants={titleVariants}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight"
              >
                <span className="block leading-tight">Research</span>
                <motion.span
                  className="block bg-linear-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent leading-tight"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Made Simple
                </motion.span>
              </motion.h1>

              <motion.p
                custom={1}
                variants={titleVariants}
                className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Professional thesis writing, project assistance, and research
                support that helps you succeed with confidence. Let our experts
                guide you to academic excellence.
              </motion.p>
            </div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial="hidden"
              animate="visible"
            >
              {[
                { icon: Users, text: "Expert Researchers" },
                { icon: Shield, text: "Plagiarism-Free" },
                { icon: Clock, text: "On-Time Delivery" },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={featureVariants}
                  className="flex flex-col items-center sm:items-start p-4 rounded-xl bg-blue-50/50 border border-blue-100"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: "rgba(59, 130, 246, 0.05)",
                  }}
                >
                  <feature.icon className="w-6 h-6 text-blue-600 mb-2" />
                  <span className="text-sm font-medium text-gray-700 text-center sm:text-left">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="space-y-3">
              {[
                "Comprehensive research and writing support",
                "Custom solutions for your specific needs",
                "Strict confidentiality and data protection",
                "24/7 customer support availability",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={checkItemVariants}
                  initial="hidden"
                  animate="visible"
                  className="flex items-start gap-3 text-gray-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="sm:flex-1"
              >
                <Link to="/service">
                  <Button text="Start Your Project" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="sm:flex-1"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-blue-600 font-semibold border-2 border-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300"
                >
                  Free Consultation
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="relative bg-blue-50 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-blue-100">
              <div className="relative">
                <motion.img
                  src={HeroImg}
                  alt="Academic research and success illustration"
                  className="w-full h-auto"
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="absolute -top-4 -right-4 w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  whileHover={{ rotate: 5 }}
                >
                  <div className="text-center">
                    <div className="text-blue-600 font-bold text-2xl">A+</div>
                    <div className="text-xs text-gray-600">Quality</div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-600 rounded-2xl shadow-lg flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  whileHover={{ rotate: -5 }}
                >
                  <div className="text-center text-white">
                    <div className="font-bold text-lg">Thesis</div>
                    <div className="text-xs opacity-90">Support</div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="mt-8 pt-8 border-t border-blue-100 grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
