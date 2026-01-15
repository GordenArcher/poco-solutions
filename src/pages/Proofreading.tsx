import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Back from "../layout/Back";
import {
  CheckCircle,
  Edit3,
  Search,
  FileText,
  BookOpen,
  Clock,
  Shield,
  DollarSign,
  Users,
  Eye,
  Zap,
  Layers,
} from "lucide-react";

const Proofreading = () => {
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

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  } as const;

  const whyItMatters = [
    {
      title: "Grammar, Spelling, and Punctuation",
      description:
        "Errors can make your paper difficult to read and create a negative impression.",
      icon: <Edit3 className="w-5 h-5" />,
    },
    {
      title: "Sentence Clarity and Flow",
      description:
        "Poorly structured sentences can obscure your ideas and arguments.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "Formatting and Citation Style",
      description:
        "Proper formatting is essential to meet academic standards and avoid plagiarism.",
      icon: <Layers className="w-5 h-5" />,
    },
    {
      title: "Consistency and Tone",
      description:
        "Maintaining consistent tone and style is crucial for professionalism.",
      icon: <BookOpen className="w-5 h-5" />,
    },
  ];

  const editingProcess = [
    {
      title: "Grammar, Spelling & Punctuation",
      steps: [
        "Meticulous review and correction of all grammatical errors",
        "Ensuring adherence to standard English rules",
      ],
      icon: <Edit3 className="w-6 h-6" />,
    },
    {
      title: "Sentence Clarity & Flow",
      steps: [
        "Restructuring sentences for better clarity and logic",
        "Eliminating redundancies and awkward phrasing",
      ],
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Formatting & Citation Style",
      steps: [
        "Formatting according to required academic styles",
        "Ensuring accurate and consistent citations",
      ],
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: "Readability & Academic Tone",
      steps: [
        "Maintaining formal academic tone throughout",
        "Eliminating informal language and slang",
      ],
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: "Feedback & Suggestions",
      steps: [
        "Providing constructive feedback for improvement",
        "Helping develop better writing skills",
      ],
      icon: <Eye className="w-6 h-6" />,
    },
  ];

  const benefits = [
    { icon: <Users className="w-5 h-5" />, text: "Experienced Editors" },
    { icon: <Search className="w-5 h-5" />, text: "Attention to Detail" },
    { icon: <FileText className="w-5 h-5" />, text: "Plagiarism-Free Work" },
    { icon: <Shield className="w-5 h-5" />, text: "Confidential & Secure" },
    { icon: <Clock className="w-5 h-5" />, text: "Timely Delivery" },
    { icon: <DollarSign className="w-5 h-5" />, text: "Affordable Pricing" },
  ];

  const documentTypes = [
    "Theses & Dissertations",
    "Research Papers",
    "Essays & Term Papers",
    "Journal Articles",
    "Conference Papers",
    "Reports & Proposals",
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Back />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-8 mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Proofreading & Editing
          </h1>
          <p className="text-xl text-gray-600">
            Polish your academic work to perfection with expert editing services
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-2xl p-6">
            <p className="text-gray-700 leading-relaxed">
              Proofreading and editing are critical steps that transform good
              writing into exceptional work. Even well-researched papers can
              lose marks due to grammatical errors, unclear structures, or
              improper formatting. Our expert editing services ensure your
              academic work meets the highest standards of excellence.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Proofreading and Editing Matter
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {whyItMatters.map((item, index) => (
              <motion.div
                key={index}
                variants={listItemVariants}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="p-3 bg-emerald-100 rounded-lg">
                  <div className="text-emerald-600">{item.icon}</div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Comprehensive Editing Process
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {editingProcess.map((process, index) => (
              <motion.div
                key={index}
                variants={listItemVariants}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <div className="text-blue-600">{process.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {process.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {process.steps.map((step, stepIndex) => (
                    <li
                      key={stepIndex}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-linear-to-r from-purple-50 to-indigo-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Types of Documents We Edit
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {documentTypes.map((type, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg text-gray-700 text-sm font-medium"
                >
                  {type}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-linear-to-r bg-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">
              Why Choose Our Editing Service?
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={listItemVariants}
                  className="flex items-center gap-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg"
                >
                  <div className="p-2 bg-white/20 rounded-lg">
                    {benefit.icon}
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600">99.9%</div>
              <div className="text-sm text-gray-600">Error-Free Rate</div>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600">24h</div>
              <div className="text-sm text-gray-600">Turnaround Time</div>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-gray-600">Confidential</div>
            </div>
            <div className="p-4 bg-white rounded-xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600">5000+</div>
              <div className="text-sm text-gray-600">Papers Edited</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-linear-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>

            <motion.h3
              className="text-2xl font-bold mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Perfect Your Academic Work?
            </motion.h3>
            <motion.p
              className="text-emerald-100 mb-6 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Get professional proofreading and editing that elevates your work
              to the highest academic standards
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative z-10"
            >
              <Link to="/contact">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="bg-white cursor-pointer text-emerald-600 hover:text-emerald-700 font-semibold py-3 px-8 rounded-lg hover:bg-emerald-50 transition-colors duration-300 shadow-lg"
                >
                  Get Professional Editing
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Quality Guarantee
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Unlimited revisions within 7 days
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Plagiarism report included
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Formatting to any style guide
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">
                    Direct editor communication
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Proofreading;
