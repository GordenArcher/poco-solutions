import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Back from "../layout/Back";
import {
  CheckCircle,
  FileText,
  Edit3,
  Search,
  BookOpen,
  Clock,
  Shield,
  DollarSign,
  Users,
  TrendingUp,
  Target,
  Layers,
  BarChart,
  Lock,
} from "lucide-react";

const Publication = () => {
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
      title: "Credibility & Recognition",
      description:
        "Establishes you as an expert in your field and enhances professional reputation.",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      title: "Knowledge Sharing",
      description:
        "Shares findings, ideas, and insights with a wider academic and professional audience.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Career Advancement",
      description:
        "Essential for career growth, promotions, and securing research funding.",
      icon: <Target className="w-5 h-5" />,
    },
    {
      title: "Visibility & Impact",
      description:
        "Increases visibility and impact within your academic or professional field.",
      icon: <BarChart className="w-5 h-5" />,
    },
    {
      title: "Meeting Standards",
      description:
        "Ensures compliance with strict journal and publisher guidelines for acceptance.",
      icon: <Shield className="w-5 h-5" />,
    },
  ];

  const services = [
    {
      title: "Manuscript Preparation",
      icon: <FileText className="w-6 h-6" />,
      features: [
        "Structuring and formatting according to journal guidelines",
        "Ensuring clarity, conciseness, and organization",
        "Compliance with target publication requirements",
      ],
    },
    {
      title: "Editing & Proofreading",
      icon: <Edit3 className="w-6 h-6" />,
      features: [
        "Professional editing for clarity and coherence",
        "Grammar, spelling, and punctuation checks",
        "Style consistency and readability improvements",
      ],
    },
    {
      title: "Journal Selection",
      icon: <Search className="w-6 h-6" />,
      features: [
        "Identifying suitable journals for your research area",
        "Insights into impact factors and submission requirements",
        "Target audience analysis and recommendations",
      ],
    },
    {
      title: "Submission Support",
      icon: <Layers className="w-6 h-6" />,
      features: [
        "Guidance through the complete submission process",
        "Cover letter and abstract preparation",
        "Supplementary materials organization",
      ],
    },
    {
      title: "Peer Review Assistance",
      icon: <Users className="w-6 h-6" />,
      features: [
        "Feedback on reviewer comments and critiques",
        "Revision strategies to meet editorial expectations",
        "Response letter preparation",
      ],
    },
    {
      title: "Plagiarism Check",
      icon: <Search className="w-6 h-6" />,
      features: [
        "Thorough plagiarism detection and analysis",
        "Paraphrasing and rewriting assistance",
        "Originality verification and reporting",
      ],
    },
    {
      title: "Formatting & Referencing",
      icon: <BookOpen className="w-6 h-6" />,
      features: [
        "Style-specific formatting (APA, MLA, Chicago, etc.)",
        "Accurate citation and reference checking",
        "Bibliography organization and verification",
      ],
    },
    {
      title: "Publication Strategy",
      icon: <Target className="w-6 h-6" />,
      features: [
        "Developing strategic publication plans",
        "Maximizing research impact and reach",
        "Long-term publication roadmap",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Users className="w-5 h-5" />,
      text: "Experienced Editors & Researchers",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "Comprehensive End-to-End Support",
    },
    { icon: <Shield className="w-5 h-5" />, text: "High-Quality Standards" },
    { icon: <Lock className="w-5 h-5" />, text: "Confidential & Secure" },
    { icon: <Clock className="w-5 h-5" />, text: "Timely Delivery" },
    { icon: <DollarSign className="w-5 h-5" />, text: "Affordable Pricing" },
  ];

  const journalTypes = [
    "Academic Journals",
    "Conference Proceedings",
    "Book Chapters",
    "Research Articles",
    "Review Papers",
    "Case Studies",
    "Technical Reports",
    "Monographs",
  ];

  const impactFactors = [
    { range: "Q1", description: "Top 25% of Journals" },
    { range: "Q2", description: "25-50% of Journals" },
    { range: "Q3", description: "50-75% of Journals" },
    { range: "Q4", description: "75-100% of Journals" },
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
            Professional Publication Services
          </h1>
          <p className="text-xl text-gray-600">
            Navigate the complex publication process with expert guidance and
            support
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl p-6">
            <p className="text-gray-700 leading-relaxed">
              Publishing your research is a critical step in establishing
              credibility and sharing knowledge. Our Publication Services
              provide comprehensive support from manuscript preparation to
              submission, ensuring your work meets the highest standards and
              maximizes its chances of acceptance.
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
            Why Publication Matters
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {whyItMatters.map((item, index) => (
              <motion.div
                key={index}
                variants={listItemVariants}
                className="flex flex-col p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <div className="text-amber-600">{item.icon}</div>
                  </div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm flex-1">
                  {item.description}
                </p>
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
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Publication Types We Support
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {journalTypes.map((type, index) => (
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Comprehensive Publication Services
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
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
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm">{feature}</span>
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
          <div className="bg-linear-to-r from-emerald-50 to-teal-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Journal Impact Factor Guide
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {impactFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-bold text-emerald-600 mb-1">
                    {factor.range}
                  </div>
                  <div className="text-sm text-gray-600">
                    {factor.description}
                  </div>
                </motion.div>
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
              Why Choose Our Publication Services?
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
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Our Publication Process
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden md:block"></div>

            <div className="space-y-8 md:space-y-0">
              {[
                {
                  step: 1,
                  title: "Manuscript Review",
                  desc: "Initial assessment and planning",
                },
                {
                  step: 2,
                  title: "Editing & Formatting",
                  desc: "Professional refinement",
                },
                {
                  step: 3,
                  title: "Journal Selection",
                  desc: "Target identification",
                },
                {
                  step: 4,
                  title: "Submission",
                  desc: "Complete package preparation",
                },
                {
                  step: 5,
                  title: "Peer Review Support",
                  desc: "Response and revisions",
                },
                { step: 6, title: "Publication", desc: "Final acceptance" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-4`}
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="font-bold text-blue-600 text-lg">
                      {item.step}
                    </span>
                  </div>
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-center md:text-left`}
                  >
                    <div className="font-medium text-gray-900">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-600">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">85%</div>
              <div className="text-sm text-gray-600">Acceptance Rate</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">1000+</div>
              <div className="text-sm text-gray-600">Papers Published</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600">Journal Partners</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">4.8/5</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
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
          <div className="bg-linear-to-r bg-purple-500  rounded-2xl p-8 text-white relative overflow-hidden">
            <motion.h3
              className="text-2xl font-bold mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Publish with Confidence
            </motion.h3>
            <motion.p
              className="text-purple-100 mb-6 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Get expert guidance from manuscript preparation to successful
              publication
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
                  className="bg-white cursor-pointer text-purple-600 hover:text-purple-700 font-semibold py-3 px-8 rounded-lg hover:bg-purple-50 transition-colors duration-300 shadow-lg"
                >
                  Start Publishing Today
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Publication;
