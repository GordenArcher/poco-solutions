import { motion } from "framer-motion";
import Hero from "../layout/Hero";
import { Choose, littleTestimonials, whatDo } from "../constant/Data";
import AboutImg from "../assets/images/illustration-1.webp";
import Jos from "../assets/images/avatar-7.png";
import { Link } from "react-router-dom";
import Slider from "../layout/Slider";
import FaQ from "../components/FaQ";
import TestimonialCard from "../components/TestimonialCard";
import Button from "../components/Button";
import {
  CheckCheck,
  Sparkles,
  BarChart3,
  Clock,
  TrendingUp,
  Target,
  Users,
  Shield,
  Award,
  FileCheck,
  GraduationCap,
  Zap,
  Globe,
  CheckCircle2,
  Phone,
  Lightbulb,
} from "lucide-react";
import React from "react";
import { Testimonial } from "../types/testimonial";

interface ChooseItem {
  id: number;
  icon: string;
  head: string;
  desc: string;
}

interface WhatDoItem {
  id: number;
  wdo: string;
}

const iconMap: Record<string, React.ReactNode> = {
  "bar-chart-3": <BarChart3 className="w-8 h-8" />,
  clock: <Clock className="w-8 h-8" />,
  "trending-up": <TrendingUp className="w-8 h-8" />,
  target: <Target className="w-8 h-8" />,
  users: <Users className="w-8 h-8" />,
  shield: <Shield className="w-8 h-8" />,
  award: <Award className="w-8 h-8" />,
  "file-check": <FileCheck className="w-8 h-8" />,
  "graduation-cap": <GraduationCap className="w-8 h-8" />,
  zap: <Zap className="w-8 h-8" />,
  globe: <Globe className="w-8 h-8" />,
  lightbulb: <Lightbulb className="w-8 h-8" />,
};

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <div className="w-full relative">
      <Hero />

      <div className="w-full mt-24 px-4 max-w-7xl mx-auto">
        <motion.div
          className="flex items-center gap-2 mb-10"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
          <CheckCheck className="w-7 h-7 text-blue-600" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Choose.map((ch: ChooseItem, index: number) => (
            <motion.div
              key={ch.id}
              className="relative perspective-1000"
              variants={itemVariants}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-200 group cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                <motion.div
                  className="relative mb-6 overflow-hidden rounded-xl w-fit"
                  whileHover="hover"
                  variants={{
                    hover: {
                      rotate: [0, 5, 0],
                      transition: { duration: 0.6 },
                    },
                  }}
                >
                  <div className="absolute inset-0 bg-linear-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <div className="relative text-blue-600 bg-linear-to-br from-blue-50 to-white p-4 rounded-xl shadow-sm border border-blue-100">
                    {iconMap[ch.icon] || <Sparkles className="w-8 h-8" />}
                  </div>
                </motion.div>

                <div className="mb-4 overflow-hidden">
                  <motion.h3
                    className="text-xl font-bold text-gray-900"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {ch.head}
                  </motion.h3>
                </div>

                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <p className="text-gray-600 leading-relaxed text-[15px]">
                    {ch.desc}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="w-full mt-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
                  About Us
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-gray-900"
              >
                Your Trusted Partner for Academic Success
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600"
              >
                Empowering students with expert guidance, quality research, and
                seamless academic support.
              </motion.p>
            </div>

            <motion.div
              className="space-y-3"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
              initial="hidden"
              whileInView="visible"
            >
              {whatDo.map((w: WhatDoItem) => (
                <motion.div
                  key={w.id}
                  variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span>{w.wdo}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src={Jos}
                  alt="Poco Darling"
                />
                <div>
                  <h4 className="font-semibold">Poco Darling</h4>
                  <p className="text-sm text-gray-500">Founder</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500">Call us</p>
                  <div className="text-blue-600 font-medium">
                    <a href="tel:+233275697715">0275697715</a> /{" "}
                    <a href="tel:+0558707856">0558707856</a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              className="w-full rounded-lg shadow-lg"
              src={AboutImg}
              alt="About illustration"
            />
          </motion.div>
        </div>
      </div>

      <div className="mt-24">
        <Slider />
      </div>

      <div className="mt-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Unlock Your Academic Potential
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              High-quality research, expert guidance, and personalized solutions
              tailored to your needs. Let's take your academic journey to the
              next level!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/service"
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="w-full mt-24 bg-linear-to-b from-white to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">
              Testimonials
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from students who have trusted us with their academic success
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {littleTestimonials.map((testimonial: Testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/testimonials">
              <Button text="View All Testimonials" />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="mt-16">
        <FaQ />
      </div>
    </div>
  );
};

export default Home;
