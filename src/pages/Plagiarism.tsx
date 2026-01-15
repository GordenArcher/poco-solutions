import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Back from "../layout/Back";
import {
  CheckCircle,
  Shield,
  FileText,
  Search,
  Edit3,
  Clock,
  Lock,
  DollarSign,
  Users,
  AlertTriangle,
  TrendingUp,
  FileCheck,
} from "lucide-react";

const Plagiarism = () => {
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
      title: "Avoiding Academic Penalties",
      description:
        "Prevent failing grades, suspension, or expulsion due to plagiarism violations.",
      icon: <AlertTriangle className="w-5 h-5" />,
    },
    {
      title: "Maintaining Credibility",
      description:
        "Build and maintain credibility in academic and professional settings with original work.",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      title: "Ensuring Proper Citation",
      description:
        "Strengthen arguments by properly citing sources and giving credit to original authors.",
      icon: <FileCheck className="w-5 h-5" />,
    },
    {
      title: "Meeting Institutional Requirements",
      description:
        "Comply with strict university and organizational plagiarism policies.",
      icon: <Shield className="w-5 h-5" />,
    },
  ];

  const services = [
    {
      title: "Thorough Plagiarism Scans",
      icon: <Search className="w-6 h-6" />,
      features: [
        "Advanced detection with Turnitin, Grammarly, and Copyscape",
        "Comparison against billions of web pages and academic papers",
        "Comprehensive content duplication identification",
      ],
    },
    {
      title: "Detailed Reports & Analysis",
      icon: <FileText className="w-6 h-6" />,
      features: [
        "Percentage of similarity breakdown",
        "Source identification for matches",
        "Actionable insights and recommendations",
      ],
    },
    {
      title: "Paraphrasing & Rewriting Assistance",
      icon: <Edit3 className="w-6 h-6" />,
      features: [
        "Expert assistance in rephrasing problematic sections",
        "Maintaining original meaning and academic tone",
        "Ensuring content originality",
      ],
    },
    {
      title: "Citation & Reference Formatting",
      icon: <FileCheck className="w-6 h-6" />,
      features: [
        "Proper citation in APA, MLA, Harvard, Chicago styles",
        "Accuracy and consistency checks",
        "Academic integrity compliance",
      ],
    },
    {
      title: "Expert Feedback & Guidance",
      icon: <Users className="w-6 h-6" />,
      features: [
        "Feedback on writing improvement",
        "Strategies to avoid unintentional plagiarism",
        "Development of strong research skills",
      ],
    },
  ];

  const benefits = [
    { icon: <Search className="w-5 h-5" />, text: "Advanced Detection Tools" },
    { icon: <FileText className="w-5 h-5" />, text: "Detailed Reports" },
    { icon: <Users className="w-5 h-5" />, text: "Expert Assistance" },
    { icon: <Lock className="w-5 h-5" />, text: "Confidential & Secure" },
    { icon: <Clock className="w-5 h-5" />, text: "Timely Delivery" },
    { icon: <DollarSign className="w-5 h-5" />, text: "Affordable Pricing" },
  ];

  const detectionTools = [
    { name: "Turnitin", accuracy: "99%" },
    { name: "Grammarly", accuracy: "98%" },
    { name: "Copyscape", accuracy: "97%" },
    { name: "iThenticate", accuracy: "99%" },
  ];

  const consequences = [
    "Failing Grades",
    "Paper Rejection",
    "Academic Suspension",
    "Reputation Damage",
    "Expulsion",
    "Career Impact",
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
            Plagiarism Checks & Reports
          </h1>
          <p className="text-xl text-gray-600">
            Ensure 100% originality and maintain academic integrity with
            professional scanning
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-linear-to-br from-red-50 to-orange-50 rounded-2xl p-6">
            <p className="text-gray-700 leading-relaxed">
              Plagiarism is one of the most serious academic offenses with
              severe consequences. In today's academic and professional
              environments, originality and integrity are paramount. Our service
              ensures your work meets the highest standards of academic
              integrity.
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
            Why Plagiarism Checks Are Essential
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
                <div className="p-3 bg-red-100 rounded-lg">
                  <div className="text-red-600">{item.icon}</div>
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
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-linear-to-r from-red-50 to-orange-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-red-900 mb-4">
              Consequences of Plagiarism
            </h3>
            <div className="flex flex-wrap gap-2">
              {consequences.map((consequence, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg text-red-700 text-sm font-medium"
                >
                  {consequence}
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
            Our Comprehensive Plagiarism Services
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
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
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
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
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Industry-Standard Detection Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {detectionTools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 text-center shadow-sm"
                >
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    {tool.name}
                  </div>
                  <div className="text-2xl font-bold text-blue-600">
                    {tool.accuracy}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    Accuracy Rate
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
              Why Choose Our Plagiarism Service?
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
              Sample Report Features
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-700">Overall Similarity Score</span>
                <span className="font-bold text-green-600">2%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "2%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="bg-green-500 h-2 rounded-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-green-600">✓ Web Sources: 1%</div>
                <div className="text-green-600">✓ Publications: 0.5%</div>
                <div className="text-green-600">✓ Student Papers: 0.5%</div>
                <div className="text-green-600">✓ Original Content: 98%</div>
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
          <div className="bg-linear-to-r bg-emerald-500 rounded-2xl p-8 text-white relative overflow-hidden">
            <motion.h3
              className="text-2xl font-bold mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ensure Your Work is 100% Original
            </motion.h3>
            <motion.p
              className="text-emerald-100 mb-6 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Get comprehensive plagiarism checks and detailed reports to
              guarantee academic integrity
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
                  Check for Plagiarism Now
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center"
        >
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">99.9%</div>
            <div className="text-sm text-gray-600">Accuracy Rate</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">24h</div>
            <div className="text-sm text-gray-600">Report Delivery</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">10,000+</div>
            <div className="text-sm text-gray-600">Documents Checked</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">100%</div>
            <div className="text-sm text-gray-600">Confidential</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Plagiarism;
