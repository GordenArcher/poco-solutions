import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Back from "../layout/Back";
import {
  CheckCircle,
  Target,
  Search,
  BarChart,
  FileText,
  Presentation,
  Clock,
  Shield,
  DollarSign,
  Users,
} from "lucide-react";

const ProjectWork = () => {
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
      title: "Topic Selection",
      description:
        "Choosing a project topic that is unique, feasible, and aligned with academic standards.",
    },
    {
      title: "Research Planning",
      description:
        "Developing a clear research plan with well-defined objectives and hypotheses.",
    },
    {
      title: "Literature Review",
      description:
        "Conducting thorough literature review and synthesizing information effectively.",
    },
    {
      title: "Data Collection & Analysis",
      description:
        "Designing surveys and analyzing data with statistical tools.",
    },
    {
      title: "Report Writing & Presentation",
      description:
        "Organizing project reports and preparing professional presentations.",
    },
  ];

  const assistanceServices = [
    {
      title: "Topic Selection & Research Planning",
      icon: <Target className="w-6 h-6" />,
      items: [
        "Brainstorming unique and feasible project ideas",
        "Refining research objectives and hypotheses",
        "Creating detailed research plans with timelines",
      ],
    },
    {
      title: "Literature Review & Theoretical Framework",
      icon: <Search className="w-6 h-6" />,
      items: [
        "Identifying credible peer-reviewed sources",
        "Establishing connections with existing research",
        "Writing comprehensive literature reviews",
      ],
    },
    {
      title: "Data Collection & Analysis",
      icon: <BarChart className="w-6 h-6" />,
      items: [
        "Designing robust data collection tools",
        "Guidance with SPSS, STATA, Python, R, or Excel",
        "Interpreting data and drawing meaningful conclusions",
      ],
    },
    {
      title: "Project Report Writing & Presentation Preparation",
      icon: <Presentation className="w-6 h-6" />,
      items: [
        "Organizing reports into logical chapters",
        "Formatting according to university guidelines",
        "Creating professional PowerPoint presentations",
      ],
    },
  ];

  const benefits = [
    {
      icon: <Users className="w-5 h-5" />,
      text: "Experienced Academic Writers",
    },
    { icon: <FileText className="w-5 h-5" />, text: "Plagiarism-Free Work" },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "Comprehensive Support",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Confidential and Secure Service",
    },
    { icon: <Clock className="w-5 h-5" />, text: "Timely Delivery" },
    { icon: <DollarSign className="w-5 h-5" />, text: "Affordable Pricing" },
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
            Project Work Assistance
          </h1>
          <p className="text-xl text-gray-600">
            Complete support for your academic research projects from start to
            finish
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
            Academic projects require applying theoretical knowledge to
            practical problems, conducting in-depth research, and presenting
            findings professionally. Whether it's a semester-long project,
            capstone, or research-based assignment, each step demands expertise
            and careful planning.
          </p>

          <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Common Project Challenges
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
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-lnear-to-r bg-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">
              Why Choose Our Project Work Assistance?
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
            Our Project Assistance Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-blue-600">1</span>
              </div>
              <div className="font-medium text-gray-900">Topic Selection</div>
            </div>
            <div className="text-center p-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-blue-600">2</span>
              </div>
              <div className="font-medium text-gray-900">Research Planning</div>
            </div>
            <div className="text-center p-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-blue-600">3</span>
              </div>
              <div className="font-medium text-gray-900">Data Analysis</div>
            </div>
            <div className="text-center p-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-blue-600">4</span>
              </div>
              <div className="font-medium text-gray-900">Final Delivery</div>
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
          <div className="bg-linear-to-r bg-emerald-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Excel in Your Project Work?
            </h3>
            <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
              Get comprehensive support from experienced professionals and
              achieve academic excellence
            </p>

            <Link to="/contact">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-white cursor-pointer text-emerald-600 hover:text-emerald-700 font-semibold py-3 px-8 rounded-lg hover:bg-emerald-50 transition-colors duration-300 shadow-lg"
              >
                Start Your Project Today
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            What's Included
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">
                  Topic brainstorming sessions
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Research proposal writing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">
                  Literature review assistance
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Data analysis guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Report formatting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Presentation preparation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectWork;
