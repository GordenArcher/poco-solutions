import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Back from "../layout/Back";
import {
  CheckCircle,
  FileText,
  Search,
  Edit,
  BarChart,
  BookOpen,
} from "lucide-react";

const Thesis = () => {
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

  const iconMap = {
    "📖": <BookOpen className="w-6 h-6" />,
    "🔍": <Search className="w-6 h-6" />,
    "✍️": <Edit className="w-6 h-6" />,
    "📊": <BarChart className="w-6 h-6" />,
    "📝": <FileText className="w-6 h-6" />,
  };

  const challenges = [
    {
      title: "Choosing a Research Topic",
      description:
        "Selecting a topic that is both relevant to your field of study and feasible within the given time frame can be overwhelming.",
    },
    {
      title: "Developing a Research Question",
      description:
        "Formulating a strong research question that aligns with your academic objectives and contributes to existing knowledge.",
    },
    {
      title: "Conducting a Literature Review",
      description:
        "Identifying and reviewing scholarly sources to support your argument requires deep understanding and organization.",
    },
    {
      title: "Structuring the Thesis",
      description:
        "Organizing work into chapters with clear logical flow is essential but often challenging.",
    },
    {
      title: "Data Analysis",
      description:
        "Analyzing data and drawing meaningful conclusions, especially with statistical tools.",
    },
    {
      title: "Formatting and Referencing",
      description:
        "Properly formatting according to academic guidelines and ensuring accurate referencing.",
    },
  ];

  const services = [
    {
      title: "Topic Selection & Proposal Writing",
      icon: "📖",
      items: [
        "Brainstorming research ideas aligned with your interests",
        "Refining broad topics into focused research questions",
        "Crafting clear and concise research proposals",
      ],
    },
    {
      title: "Comprehensive Literature Review",
      icon: "🔍",
      items: [
        "Identifying relevant academic sources",
        "Organizing literature thematically",
        "Proper citation and referencing",
      ],
    },
    {
      title: "Methodology Development & Data Collection",
      icon: "📊",
      items: [
        "Choosing appropriate research methods",
        "Designing robust data collection tools",
        "Data analysis with statistical tools",
      ],
    },
    {
      title: "Writing & Structuring the Thesis",
      icon: "📝",
      items: [
        "Ensuring logical flow and coherence",
        "Effective presentation of findings",
        "Adherence to university guidelines",
      ],
    },
    {
      title: "Editing, Proofreading & Final Touches",
      icon: "✍️",
      items: [
        "Grammar and readability checks",
        "Formatting according to requirements",
        "Final improvements for academic excellence",
      ],
    },
  ];

  const benefits = [
    "Experienced Academic Writers",
    "Plagiarism-Free Work",
    "Comprehensive Support",
    "Confidential and Secure Service",
    "Timely Delivery",
    "Affordable Pricing",
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
            Thesis & Long Essay Writing Services
          </h1>
          <p className="text-xl text-gray-600">
            Expertly Crafted Academic Papers for Excellence
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
            Writing a thesis or a long essay is one of the most challenging
            academic endeavors. It's not just a requirement for graduation but a
            testament to years of learning, critical thinking, and research.
          </p>

          <div className="bg-blue-50 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              Common Challenges Students Face
            </h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  variants={listItemVariants}
                  className="flex items-start gap-3 p-3 bg-white rounded-lg"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0" />
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
            How We Help You Succeed
          </h2>

          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {iconMap[service.icon as keyof typeof iconMap] || (
                      <BookOpen className="w-6 h-6 text-blue-600" />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  {service.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      variants={listItemVariants}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
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
          <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose Our Thesis Writing Assistance?
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={listItemVariants}
                  className="flex items-center gap-3 p-3 bg-white/50 backdrop-blur-sm rounded-lg"
                >
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="font-medium text-gray-900">{benefit}</span>
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
          className="text-center"
        >
          <div className="bg-linear-to-r bg-blue-600  rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Start Your Thesis Journey Today
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let our experts guide you through every step of the process for
              academic excellence
            </p>

            <Link to="/contact">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-white cursor-pointer text-blue-600 hover:text-blue-700 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg"
              >
                Get Professional Thesis Help
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Thesis;
