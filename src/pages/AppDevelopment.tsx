import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Back from "../layout/Back";
import {
  CheckCircle,
  Smartphone,
  Globe,
  Users,
  TrendingUp,
  DollarSign,
  Palette,
  RefreshCw,
  Database,
  Search,
  Shield,
  Clock,
  Code,
  Apple,
  Layers,
} from "lucide-react";

const AppDevelopment = () => {
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
      title: "Wider Audience Reach",
      description:
        "Connect with users on the go, expanding your reach and accessibility.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "Enhanced User Experience",
      description:
        "Seamless, intuitive experiences that keep users engaged and satisfied.",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      title: "Increased Customer Loyalty",
      description:
        "Personalized experiences and push notifications foster loyalty.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Competitive Advantage",
      description: "Position your brand as innovative and forward-thinking.",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      title: "Monetization Opportunities",
      description: "Revenue through in-app purchases, subscriptions, and ads.",
      icon: <DollarSign className="w-5 h-5" />,
    },
  ];

  const services = [
    {
      title: "Native App Development",
      icon: <Code className="w-6 h-6" />,
      features: [
        "iOS apps with Swift & Objective-C",
        "Android apps with Kotlin & Java",
        "Superior performance and device access",
      ],
      platforms: [
        <Apple className="w-4 h-4" />,
        <Smartphone className="w-4 h-4" />,
      ],
      tech: ["Swift", "Kotlin", "Java", "Objective-C"],
    },
    {
      title: "Cross-Platform Development",
      icon: <Layers className="w-6 h-6" />,
      features: [
        "Single codebase for iOS & Android",
        "Cost-effective development",
        "Faster time to market",
      ],
      platforms: ["React Native", "Flutter"],
      tech: ["React Native", "Flutter", "Xamarin", "Ionic"],
    },
    {
      title: "Progressive Web Apps (PWA)",
      icon: <Globe className="w-6 h-6" />,
      features: [
        "Offline functionality capabilities",
        "No app store installation required",
        "Web-based with app-like experience",
      ],
      platforms: ["PWA"],
      tech: ["Service Workers", "Web App Manifest", "Cache API"],
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      features: [
        "Intuitive and visually appealing interfaces",
        "User-centered design approach",
        "Interactive prototypes and wireframes",
      ],
      platforms: ["Design"],
      tech: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    },
    {
      title: "App Redesign & Maintenance",
      icon: <RefreshCw className="w-6 h-6" />,
      features: [
        "Modernization of outdated apps",
        "Performance optimization",
        "Regular updates and security",
      ],
      platforms: ["Updates"],
      tech: ["Refactoring", "Performance", "Security", "Updates"],
    },
    {
      title: "API Integration",
      icon: <Database className="w-6 h-6" />,
      features: [
        "Third-party service integration",
        "Payment gateway connections",
        "Social media and analytics integration",
      ],
      platforms: ["API"],
      tech: ["REST", "GraphQL", "WebSocket", "OAuth"],
    },
    {
      title: "App Testing & QA",
      icon: <Shield className="w-6 h-6" />,
      features: [
        "Comprehensive testing strategies",
        "Performance and security testing",
        "User acceptance testing",
      ],
      platforms: ["QA"],
      tech: ["Jest", "Detox", "Appium", "Testing"],
    },
    {
      title: "App Store Optimization",
      icon: <Search className="w-6 h-6" />,
      features: [
        "Keyword optimization for visibility",
        "Compelling app descriptions",
        "High-quality screenshots and videos",
      ],
      platforms: ["ASO"],
      tech: ["Keywords", "Metadata", "Analytics", "Ranking"],
    },
  ];

  const benefits = [
    { icon: <Users className="w-5 h-5" />, text: "Experienced Developers" },
    { icon: <Code className="w-5 h-5" />, text: "Custom Solutions" },
    { icon: <Smartphone className="w-5 h-5" />, text: "User-Centric Design" },
    { icon: <Clock className="w-5 h-5" />, text: "Timely Delivery" },
    { icon: <DollarSign className="w-5 h-5" />, text: "Affordable Pricing" },
    { icon: <Shield className="w-5 h-5" />, text: "Ongoing Support" },
  ];

  const appTypes = [
    "Business Apps",
    "E-commerce Apps",
    "Social Media Apps",
    "Healthcare Apps",
    "Educational Apps",
    "Gaming Apps",
    "Productivity Apps",
    "Fitness Apps",
  ];

  const developmentStages = [
    { stage: 1, title: "Discovery", desc: "Requirements & planning" },
    { stage: 2, title: "Design", desc: "UI/UX prototyping" },
    { stage: 3, title: "Development", desc: "Coding & implementation" },
    { stage: 4, title: "Testing", desc: "QA & bug fixing" },
    { stage: 5, title: "Deployment", desc: "App store launch" },
    { stage: 6, title: "Maintenance", desc: "Updates & support" },
  ];

  const statistics = [
    { value: "85%", label: "User Retention" },
    { value: "4.8★", label: "App Store Rating" },
    { value: "6-12 Weeks", label: "Development Time" },
    { value: "24/7", label: "Support Available" },
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
          <div className="flex items-center gap-3 mb-4">
            <Smartphone className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Professional App Development Services
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Create high-performing, scalable, and secure mobile applications for
            iOS, Android, and beyond
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-6">
            <p className="text-gray-700 leading-relaxed">
              In today's mobile-first world, having a robust and user-friendly
              mobile application is essential for engaging your audience and
              streamlining operations. Whether you need a native iOS/Android
              app, cross-platform solution, or progressive web app, we deliver
              exceptional user experiences that achieve your business goals.
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
            Why Mobile App Development Matters
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
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <div className="text-blue-600">{item.icon}</div>
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
          <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Types of Apps We Develop
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {appTypes.map((type, index) => (
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
            Our App Development Services
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
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                      <div className="text-blue-600">{service.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    {service.platforms &&
                      Array.isArray(service.platforms) &&
                      service.platforms.map((platform, i) => (
                        <span key={i} className="text-blue-600">
                          {platform}
                        </span>
                      ))}
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {service.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
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
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Our Development Process
          </h3>
          <div className="relative">
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-0.5 bg-blue-200 -translate-y-1/2"></div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 relative">
              {developmentStages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-white border-2 border-blue-200 rounded-full flex items-center justify-center mx-auto mb-3 relative z-10">
                    <span className="font-bold text-blue-600 text-lg">
                      {stage.stage}
                    </span>
                  </div>
                  <div className="font-medium text-gray-900 text-sm">
                    {stage.title}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{stage.desc}</div>
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
              Why Choose Our App Development Services?
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
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-white rounded-lg shadow-sm"
              >
                <div className="text-2xl font-bold text-blue-600">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
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
              Transform Your Business with Mobile Apps
            </motion.h3>
            <motion.p
              className="text-emerald-100 mb-6 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Let's build a powerful mobile application that engages users and
              drives growth
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
                  Start Your App Project
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AppDevelopment;
