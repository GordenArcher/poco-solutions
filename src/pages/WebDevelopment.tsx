import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Back from "../layout/Back";
import {
  CheckCircle,
  Globe,
  Code,
  ShoppingCart,
  Layout,
  Search,
  Palette,
  Zap,
  Clock,
  DollarSign,
  Users,
  Shield,
  Smartphone,
  Cpu,
  Server,
} from "lucide-react";

const WebDevelopment = () => {
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
      title: "First Impressions Matter",
      description:
        "Your website is the first point of contact for potential customers - make it count.",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "Enhanced User Experience",
      description:
        "Easy navigation, fast loading times, and seamless functionality keep users engaged.",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      title: "SEO Optimization",
      description:
        "Higher search rankings attract more organic traffic and potential customers.",
      icon: <Search className="w-5 h-5" />,
    },
    {
      title: "Scalability & Flexibility",
      description: "Grow with your business without compromising performance.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: "Security & Trust",
      description:
        "Protect user data and maintain credibility with secure websites.",
      icon: <Shield className="w-5 h-5" />,
    },
  ];

  const services = [
    {
      title: "Custom Website Development",
      icon: <Code className="w-6 h-6" />,
      features: [
        "Tailored solutions for your brand and goals",
        "Fully responsive across all devices",
        "Modern technologies and best practices",
      ],
      tech: ["React", "Next.js", "TypeScript", "Tailwind"],
    },
    {
      title: "E-Commerce Development",
      icon: <ShoppingCart className="w-6 h-6" />,
      features: [
        "Secure online payment processing",
        "Product catalogs and shopping carts",
        "Inventory and order management",
      ],
      tech: ["Shopify", "WooCommerce", "Stripe", "Paystack"],
    },
    {
      title: "Web Application Development",
      icon: <Layout className="w-6 h-6" />,
      features: [
        "Dynamic and interactive applications",
        "Real-time features and APIs",
        "Scalable architecture",
      ],
      tech: ["Node.js", "Express", "Golang", "Django", "Firebase"],
    },
    {
      title: "Website Redesign & Maintenance",
      icon: <Cpu className="w-6 h-6" />,
      features: [
        "Modernization of outdated websites",
        "Performance optimization",
        "Regular updates and security patches",
      ],
      tech: ["Performance", "Security", "Updates", "Backups"],
    },
    {
      title: "Search Engine Optimization",
      icon: <Search className="w-6 h-6" />,
      features: [
        "Keyword research and strategy",
        "Technical SEO optimization",
        "Content optimization",
      ],
      tech: ["SEO", "Analytics", "Keywords", "Ranking"],
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      features: [
        "Intuitive user interfaces",
        "User experience optimization",
        "Mobile-first design approach",
      ],
      tech: ["Figma", "Adobe XD", "Prototyping", "Wireframes"],
    },
    {
      title: "API Integration",
      icon: <Server className="w-6 h-6" />,
      features: [
        "Third-party service integration",
        "Custom API development",
        "Data synchronization",
      ],
      tech: ["REST", "GraphQL", "Webhooks", "Authentication"],
    },
  ];

  const benefits = [
    { icon: <Users className="w-5 h-5" />, text: "Experienced Developers" },
    { icon: <Code className="w-5 h-5" />, text: "Custom Solutions" },
    { icon: <Smartphone className="w-5 h-5" />, text: "Responsive Design" },
    { icon: <Clock className="w-5 h-5" />, text: "Timely Delivery" },
    { icon: <DollarSign className="w-5 h-5" />, text: "Affordable Pricing" },
    { icon: <Shield className="w-5 h-5" />, text: "Ongoing Support" },
  ];

  const technologies = [
    "React",
    "Next.js",
    "TypeScript",
    "Golang",
    "Django",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Tailwind CSS",
    "GraphQL",
    "Firebase",
    "AWS",
    "Docker",
  ];

  const websiteTypes = [
    "Business Websites",
    "E-commerce Stores",
    "Portfolio Sites",
    "Web Applications",
    "Blog Platforms",
    "SaaS Products",
    "Educational Platforms",
    "Community Forums",
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
            <Globe className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Professional Web Development Services
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Create stunning, user-friendly, and high-performing websites
            tailored to your unique needs
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
              In today's digital age, a strong online presence is essential for
              success. Whether you need a simple portfolio, an e-commerce
              platform, or a complex web application, our team creates
              responsive, scalable, and secure websites that deliver exceptional
              user experiences.
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
            Why Web Development Matters
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
          <div className="bg-linear-to-r from-emerald-50 to-teal-50 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Types of Websites We Build
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {websiteTypes.map((type, index) => (
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
            Our Web Development Services
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
                  <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                    <div className="text-blue-600">{service.icon}</div>
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
          <div className="bg-linear-to-r from-purple-50 to-indigo-50 rounded-2xl p-6">
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
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-linear-to-r bg-blue-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">
              Why Choose Our Web Development Services?
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
            Our Development Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-blue-600 text-lg">1</span>
              </div>
              <div className="font-medium text-gray-900">Discovery</div>
              <div className="text-sm text-gray-600 mt-1">
                Requirements analysis
              </div>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-blue-600 text-lg">2</span>
              </div>
              <div className="font-medium text-gray-900">Design</div>
              <div className="text-sm text-gray-600 mt-1">
                UI/UX prototyping
              </div>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-blue-600 text-lg">3</span>
              </div>
              <div className="font-medium text-gray-900">Development</div>
              <div className="text-sm text-gray-600 mt-1">
                Coding & implementation
              </div>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-blue-600 text-lg">4</span>
              </div>
              <div className="font-medium text-gray-900">Deployment</div>
              <div className="text-sm text-gray-600 mt-1">
                Launch & maintenance
              </div>
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
              <div className="text-2xl font-bold text-blue-600">150+</div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">99.9%</div>
              <div className="text-sm text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">4-8 Weeks</div>
              <div className="text-sm text-gray-600">Average Delivery</div>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
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
              Ready to Build Your Digital Presence?
            </motion.h3>
            <motion.p
              className="text-emerald-100 mb-6 max-w-2xl mx-auto relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Let's create a website that drives results and grows your business
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
                  Start Your Project Today
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopment;
