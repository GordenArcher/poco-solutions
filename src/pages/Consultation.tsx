import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Back from "../layout/Back";
import {
  CheckCircle,
  Users,
  Target,
  BarChart,
  BookOpen,
  Clock,
  Shield,
  DollarSign,
  MessageSquare,
  Presentation,
  FileText,
  TrendingUp,
  Lightbulb,
} from "lucide-react";

const Consultation = () => {
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
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  } as const;

  const researchChallenges = [
    {
      title: "Defining Research Objectives",
      description:
        "Clear research objectives are essential for focused and successful studies.",
      icon: <Target className="w-5 h-5" />,
    },
    {
      title: "Choosing the Right Methodology",
      description:
        "Selecting appropriate quantitative, qualitative, or mixed-methods approaches.",
      icon: <Lightbulb className="w-5 h-5" />,
    },
    {
      title: "Data Analysis & Interpretation",
      description:
        "Navigating statistical tools and qualitative analysis techniques.",
      icon: <BarChart className="w-5 h-5" />,
    },
    {
      title: "Literature Review",
      description:
        "Identifying credible sources and synthesizing information effectively.",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      title: "Research Presentations",
      description:
        "Presenting findings confidently and clearly for academic success.",
      icon: <Presentation className="w-5 h-5" />,
    },
  ];

  const services = [
    {
      title: "Research Objectives & Methodology",
      icon: <Target className="w-6 h-6" />,
      features: [
        "Defining clear and achievable research goals",
        "Selecting appropriate research methodologies",
        "Aligning objectives with academic requirements",
      ],
    },
    {
      title: "Data Analysis & Interpretation",
      icon: <BarChart className="w-6 h-6" />,
      features: [
        "Guidance with SPSS, STATA, Python, or R",
        "Interpreting results and drawing conclusions",
        "Statistical analysis techniques",
      ],
    },
    {
      title: "Literature Review & Writing",
      icon: <BookOpen className="w-6 h-6" />,
      features: [
        "Identifying credible peer-reviewed sources",
        "Organizing and synthesizing literature",
        "Building theoretical foundations",
      ],
    },
    {
      title: "Research Proposal Feedback",
      icon: <FileText className="w-6 h-6" />,
      features: [
        "Constructive feedback on proposals",
        "Refining structure and coherence",
        "Addressing methodological issues",
      ],
    },
    {
      title: "Presentation Preparation",
      icon: <Presentation className="w-6 h-6" />,
      features: [
        "Professional PowerPoint creation",
        "Presentation delivery practice",
        "Defense preparation strategies",
      ],
    },
  ];

  const benefits = [
    { icon: <Users className="w-5 h-5" />, text: "Experienced Researchers" },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      text: "Personalized Guidance",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "Comprehensive Assistance",
    },
    { icon: <Shield className="w-5 h-5" />, text: "Confidential & Secure" },
    { icon: <Clock className="w-5 h-5" />, text: "Timely Delivery" },
    { icon: <DollarSign className="w-5 h-5" />, text: "Affordable Pricing" },
  ];

  const methodologies = [
    { name: "Quantitative", tools: "SPSS, STATA, Excel" },
    { name: "Qualitative", tools: "NVivo, Atlas.ti, MAXQDA" },
    { name: "Mixed-Methods", tools: "Integrated Analysis" },
    { name: "Case Study", tools: "In-depth Analysis" },
    { name: "Experimental", tools: "Control & Variables" },
    { name: "Survey", tools: "Questionnaire Design" },
  ];

  const consultationTypes = [
    "One-on-One Sessions",
    "Research Design Review",
    "Data Analysis Support",
    "Literature Review Help",
    "Presentation Coaching",
    "Thesis/Dissertation Guidance",
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
            Consultation & Research Support
          </h1>
          <p className="text-xl text-gray-600">
            Expert guidance for every stage of your academic research journey
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-linear-to-br from-purple-50 to-indigo-50 rounded-2xl p-6">
            <p className="text-gray-700 leading-relaxed">
              Navigating the complexities of research methodologies, data
              analysis, and literature reviews can be overwhelming. Our
              Consultation & Research Support provides one-on-one expert
              guidance to help you refine your research work and achieve
              academic excellence.
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
            Common Research Challenges
          </h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {researchChallenges.map((challenge, index) => (
              <motion.div
                key={index}
                variants={listItemVariants}
                className="flex flex-col p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <div className="text-purple-600">{challenge.icon}</div>
                  </div>
                  <h3 className="font-semibold text-gray-900">
                    {challenge.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm flex-1">
                  {challenge.description}
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
              Supported Research Methodologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {methodologies.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 text-center shadow-sm"
                >
                  <div className="text-lg font-semibold text-gray-900 mb-2">
                    {method.name}
                  </div>
                  <div className="text-sm text-gray-600">{method.tools}</div>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How We Support Your Research
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
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
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
          <div className="bg-linear-to-r from-emerald-50 to-teal-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Types of Consultation Available
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {consultationTypes.map((type, index) => (
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
              Why Choose Our Consultation Service?
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
            Our Consultation Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-blue-600 text-lg">1</span>
              </div>
              <div className="font-medium text-gray-900">
                Initial Assessment
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Understanding your needs
              </div>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-blue-600 text-lg">2</span>
              </div>
              <div className="font-medium text-gray-900">
                Strategy Development
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Creating research plan
              </div>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-blue-600 text-lg">3</span>
              </div>
              <div className="font-medium text-gray-900">Implementation</div>
              <div className="text-sm text-gray-600 mt-1">Guided execution</div>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-blue-600 text-lg">4</span>
              </div>
              <div className="font-medium text-gray-900">
                Review & Refinement
              </div>
              <div className="text-sm text-gray-600 mt-1">
                Feedback & improvements
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
          <div className="bg-linear-to-r bg-purple-500 rounded-2xl p-8 text-white relative overflow-hidden">
            <motion.h3
              className="text-2xl font-bold mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Elevate Your Research?
            </motion.h3>
            <motion.p
              className="text-purple-100 mb-6 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Get expert guidance and personalized support for your academic
              research projects
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
                  Schedule a Consultation
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
            <div className="text-2xl font-bold text-blue-600">50+</div>
            <div className="text-sm text-gray-600">Research Experts</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">1000+</div>
            <div className="text-sm text-gray-600">Projects Guided</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">4.9/5</div>
            <div className="text-sm text-gray-600">Client Rating</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Consultation;
