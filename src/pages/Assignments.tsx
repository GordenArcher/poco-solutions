import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Back from "../layout/Back";
import {
  CheckCircle,
  BookOpen,
  Search,
  Edit3,
  FileText,
  Clock,
  Shield,
  DollarSign,
  Users,
  TrendingUp,
  FileCheck,
} from "lucide-react";

const Assignments = () => {
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

  const challenges = [
    {
      title: "Understanding Requirements",
      description:
        "Interpreting assignment questions and aligning with academic expectations.",
    },
    {
      title: "Research & Data Collection",
      description:
        "Finding reliable and credible sources to support arguments.",
    },
    {
      title: "Structuring Arguments",
      description:
        "Organizing ideas into logical flow with clear introduction, body, and conclusion.",
    },
    {
      title: "Citing and Referencing",
      description:
        "Proper formatting according to academic styles (APA, MLA, Harvard, Chicago, etc.)",
    },
    {
      title: "Writing and Editing",
      description:
        "Maintaining academic tone, ensuring clarity, and proofreading for errors.",
    },
  ];

  const assistanceServices = [
    {
      title: "Understanding Requirements & Structure",
      icon: <BookOpen className="w-6 h-6" />,
      items: [
        "Analyzing assignment questions and requirements",
        "Developing logical paper structure and flow",
        "Aligning with academic guidelines and expectations",
      ],
    },
    {
      title: "Research & Source Collection",
      icon: <Search className="w-6 h-6" />,
      items: [
        "Identifying credible scholarly sources",
        "Extracting key points for evidence-based arguments",
        "Ensuring source credibility and relevance",
      ],
    },
    {
      title: "Writing, Editing & Formatting",
      icon: <Edit3 className="w-6 h-6" />,
      items: [
        "Ensuring clarity and logical coherence",
        "Maintaining appropriate academic tone",
        "Editing, proofreading, and proper formatting",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Users className="w-5 h-5" />,
      text: "Experienced Academic Writers",
    },
    { icon: <FileCheck className="w-5 h-5" />, text: "Plagiarism-Free Work" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Comprehensive Support" },
    { icon: <Shield className="w-5 h-5" />, text: "Confidential and Secure" },
    { icon: <Clock className="w-5 h-5" />, text: "Timely Delivery" },
    { icon: <DollarSign className="w-5 h-5" />, text: "Affordable Pricing" },
  ];

  const formattingStyles = [
    { name: "APA", color: "bg-blue-100 text-blue-800" },
    { name: "MLA", color: "bg-green-100 text-green-800" },
    { name: "Harvard", color: "bg-purple-100 text-purple-800" },
    { name: "Chicago", color: "bg-amber-100 text-amber-800" },
    { name: "IEEE", color: "bg-red-100 text-red-800" },
    { name: "Vancouver", color: "bg-indigo-100 text-indigo-800" },
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
            Assignments & Term Papers
          </h1>
          <p className="text-xl text-gray-600">
            Professional assistance for academic writing excellence
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-gray-700 leading-relaxed mb-6">
            High-quality assignments and term papers require thorough research,
            logical structuring, and strict adherence to academic guidelines. We
            provide comprehensive support to help you excel in your academic
            evaluations.
          </p>

          <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-amber-900 mb-4">
              Common Academic Writing Challenges
            </h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  variants={listItemVariants}
                  className="flex items-start gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-lg"
                >
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      {challenge.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {challenge.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
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
            How We Assist with Assignments & Term Papers
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {assistanceServices.map((service, index) => (
              <motion.div
                key={index}
                variants={listItemVariants}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <div className="text-blue-600">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
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
          <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Supported Formatting Styles
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {formattingStyles.map((style, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`px-3 py-1 rounded-full text-sm font-medium ${style.color}`}
              >
                {style.name}
              </motion.span>
            ))}
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
              Why Choose Our Assignment Assistance?
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
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Types of Assignments We Handle
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Essays & Term Papers</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Case Studies</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Research Papers</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Literature Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Lab Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700">Reflective Journals</span>
                </div>
              </div>
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
          <div className="bg-linear-to-r from-emerald-500 to-teal-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Get Top Grades on Your Assignments
            </h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Professional writing assistance tailored to your academic needs
              and deadlines
            </p>

            <Link to="/contact">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-white cursor-pointer text-emerald-600 hover:text-emerald-700 font-semibold py-3 px-8 rounded-lg hover:bg-emerald-50 transition-colors duration-300 shadow-lg"
              >
                Get Assignment Help Now
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">4.8/5</div>
            <div className="text-sm text-gray-600">Client Rating</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">24h</div>
            <div className="text-sm text-gray-600">Urgent Delivery</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">100%</div>
            <div className="text-sm text-gray-600">Original Work</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">3000+</div>
            <div className="text-sm text-gray-600">Papers Done</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Assignments;
