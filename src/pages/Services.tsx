import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "../constant/Data";
import {
  BookOpen,
  FileText,
  Edit3,
  Search,
  CheckCircle,
  Users,
  Globe,
  Layout,
  Smartphone,
  TrendingUp,
} from "lucide-react";

interface Service {
  icon: string;
  title: string;
  link: string;
  description: string;
}

const iconMap: Record<string, React.ReactNode> = {
  "📖": <BookOpen className="w-8 h-8" />,
  "📝": <FileText className="w-8 h-8" />,
  "✍️": <Edit3 className="w-8 h-8" />,
  "🔍": <Search className="w-8 h-8" />,
  "✅": <CheckCircle className="w-8 h-8" />,
  "📊": <TrendingUp className="w-8 h-8" />,
  "📚": <BookOpen className="w-8 h-8" />,
  "🌐": <Globe className="w-8 h-8" />,
  "🖥️": <Layout className="w-8 h-8" />,
  "📱": <Smartphone className="w-8 h-8" />,
  "👥": <Users className="w-8 h-8" />,
};

const Services = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  } as const;

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Academic Excellence at Your Fingertips
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive academic and technical services designed to help you
            succeed in your educational journey.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service: Service, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <Link to={`/service${service.link}`} className="block h-full">
                <div className="h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group-hover:shadow-lg group-hover:border-blue-200 transition-all duration-300">
                  <div className="relative p-6">
                    <motion.div
                      className="text-blue-600 mb-4 p-3 bg-blue-50 rounded-lg w-fit"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      {iconMap[service.icon] || (
                        <BookOpen className="w-8 h-8" />
                      )}
                    </motion.div>

                    <div className="relative space-y-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="pt-4">
                        <span className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all">
                          Learn More
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className=" bg-blue-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-8 py-12 text-center">
              <motion.h2
                className="text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Ready to Start Your Journey?
              </motion.h2>

              <motion.p
                className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Let us help you achieve academic success with our expert
                services and guidance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white text-blue-600 hover:text-blue-700 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg"
                >
                  Get in Touch
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                Academic
              </div>
              <div className="text-gray-600">Writing, Research & Editing</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                Technical
              </div>
              <div className="text-gray-600">Development & Publishing</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-blue-600 mb-2">
                Support
              </div>
              <div className="text-gray-600">Consultation & Guidance</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
