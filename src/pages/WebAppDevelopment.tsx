import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Back from "../layout/Back";
import {
  CheckCircle,
  Code,
  Globe,
  Smartphone,
  Server,
  Zap,
  DollarSign,
  Clock,
  Shield,
  Users,
  Database,
  Layers,
  Cpu,
  RefreshCw,
  BarChart,
  ShoppingCart,
} from "lucide-react";

const WebAppDevelopment = () => {
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
      title: "Enhanced User Experience",
      description:
        "Interactive, seamless experiences that keep users engaged with your services.",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      title: "Scalability & Flexibility",
      description:
        "Grow with your business, handling increased traffic and new features effortlessly.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "Cross-Platform Compatibility",
      description:
        "Accessible from any device with a browser - desktop, tablet, or smartphone.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "Cost-Effectiveness",
      description:
        "Eliminate multiple platform versions, reducing development and maintenance costs.",
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      title: "Improved Efficiency",
      description:
        "Streamline processes, automate tasks, and boost operational efficiency.",
      icon: <BarChart className="w-5 h-5" />,
    },
  ];

  const services = [
    {
      title: "Custom Web Application Development",
      icon: <Code className="w-6 h-6" />,
      features: [
        "Tailored solutions for specific business requirements",
        "Scalable, secure, and user-friendly applications",
        "Alignment with business goals and target audience",
      ],
      tech: ["React", "Vue", "Angular", "TypeScript"],
    },
    {
      title: "Front-End Development",
      icon: <Layers className="w-6 h-6" />,
      features: [
        "Visually appealing and responsive user interfaces",
        "Modern frameworks for optimal performance",
        "Intuitive and engaging user experiences",
      ],
      tech: ["React", "Next.js", "Tailwind", "SASS"],
    },
    {
      title: "Back-End Development",
      icon: <Server className="w-6 h-6" />,
      features: [
        "Robust and scalable server-side systems",
        "Secure data management and processing",
        "High-performance API development",
      ],
      tech: ["Node.js", "Python", "Java", "Golang"],
    },
    {
      title: "Full-Stack Development",
      icon: <Cpu className="w-6 h-6" />,
      features: [
        "End-to-end development services",
        "Complete solution integration",
        "Unified technology stack",
      ],
      tech: ["MERN", "MEAN", "LAMP", "JAMstack"],
    },
    {
      title: "Progressive Web Apps (PWA)",
      icon: <Zap className="w-6 h-6" />,
      features: [
        "Offline functionality capabilities",
        "Native app-like experience",
        "Fast loading and reliable performance",
      ],
      tech: ["Service Workers", "Web App Manifest", "Push API"],
    },
    {
      title: "E-Commerce Web Applications",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: [
        "Secure payment gateway integration",
        "Product catalog and inventory management",
        "Order processing and customer management",
      ],
      tech: ["Stripe", "PayStack", "Hubtel", "WooCommerce", "Shopify API"],
    },
    {
      title: "API Integration",
      icon: <Database className="w-6 h-6" />,
      features: [
        "Third-party service integration",
        "Custom API development",
        "Data synchronization and management",
      ],
      tech: ["REST", "GraphQL", "WebSocket", "OAuth"],
    },
    {
      title: "Web App Maintenance & Support",
      icon: <RefreshCw className="w-6 h-6" />,
      features: [
        "Regular updates and security patches",
        "Performance optimization",
        "Bug fixes and technical support",
      ],
      tech: ["Monitoring", "Backups", "Security", "Updates"],
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
    "Business Applications",
    "Customer Portals",
    "CRM Systems",
    "Project Management",
    "Analytics Dashboards",
    "Real-time Applications",
    "Educational Platforms",
    "Healthcare Systems",
  ];

  const technologies = [
    "React",
    "Vue.js",
    "Angular",
    "TypeScript",
    "Node.js",
    "Python",
    "Django",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "Redis",
    "Firebase",
  ];

  const developmentProcess = [
    {
      step: 1,
      title: "Requirement Analysis",
      desc: "Understanding your needs",
    },
    { step: 2, title: "UI/UX Design", desc: "Creating intuitive interfaces" },
    { step: 3, title: "Development", desc: "Agile coding & implementation" },
    { step: 4, title: "Testing", desc: "Quality assurance & bug fixing" },
    { step: 5, title: "Deployment", desc: "Launch & configuration" },
    { step: 6, title: "Maintenance", desc: "Support & updates" },
  ];

  return (
    <div className="min-h-screen bg-;inear-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Back />

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="mt-8 mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Code className="w-10 h-10 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Web Application Development Services
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Build dynamic, interactive, and scalable web applications that
            transform your operations
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-;inear-to-br from-indigo-50 to-purple-50 rounded-2xl p-6">
            <p className="text-gray-700 leading-relaxed">
              In today's digital-first world, web applications are essential
              tools for delivering dynamic, interactive, and scalable solutions.
              Whether you need a customer portal, e-commerce platform, or
              complex enterprise application, we build high-performing, secure,
              and user-friendly web apps tailored to your unique needs.
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
            Why Web Application Development Matters
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
                  <div className="p-2 bg-indigo-100 rounded-lg">
                    <div className="text-indigo-600">{item.icon}</div>
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
          <div className="bg-;inear-to-r from-emerald-50 to-teal-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Types of Web Applications We Build
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
            Our Web Application Development Services
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
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors duration-300">
                    <div className="text-indigo-600">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <ul className="space-y-2 mb-4">
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

                {/* Tech Stack */}
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
          <div className="bg-;inear-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Technologies We Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-3 py-2 bg-white/70 backdrop-blur-sm rounded-lg text-gray-700 text-sm font-medium"
                >
                  {tech}
                </motion.span>
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
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Our Development Process
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {developmentProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-indigo-600 text-lg">
                    {process.step}
                  </span>
                </div>
                <div className="font-medium text-gray-900 text-sm">
                  {process.title}
                </div>
                <div className="text-xs text-gray-600 mt-1">{process.desc}</div>
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
          <div className="bg-;inear-to-r bg-indigo-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">
              Why Choose Our Web App Development Services?
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
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-indigo-600">200+</div>
              <div className="text-sm text-gray-600">Web Apps Built</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-indigo-600">99.9%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-indigo-600">
                6-12 Weeks
              </div>
              <div className="text-sm text-gray-600">Delivery Time</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-indigo-600">24/7</div>
              <div className="text-sm text-gray-600">Monitoring</div>
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
          <div className="bg-;inear-to-r bg-emerald-500 rounded-2xl p-8 text-white relative overflow-hidden">
            <motion.h3
              className="text-2xl font-bold mb-4 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Transform Your Business with Custom Web Applications
            </motion.h3>
            <motion.p
              className="text-emerald-100 mb-6 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Let's build a powerful web application that drives growth and
              delivers exceptional user experiences
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
                  Start Your Web App Project
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebAppDevelopment;
