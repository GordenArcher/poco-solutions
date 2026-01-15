import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import TeamImage from "../assets/images/team.avif";
import Button from "../components/Button";
import { services } from "../constant/Data";
import Team from "../assets/images/team.svg";
import {
  Target,
  Eye,
  Users,
  Clock,
  Shield,
  TrendingUp,
  CheckCircle,
  Award,
  MessageSquare,
  HeartHandshake,
  BookOpen,
  FileText,
  Edit3,
  Search,
  Globe,
  Smartphone,
  Layout,
} from "lucide-react";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as const;

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as const;

  const iconMap: Record<string, React.ReactNode> = {
    "📖": <BookOpen className="w-8 h-8" />,
    "📝": <FileText className="w-8 h-8" />,
    "✍️": <Edit3 className="w-8 h-8" />,
    "🔍": <Search className="w-8 h-8" />,
    "✅": <CheckCircle className="w-8 h-8" />,
    "📊": <TrendingUp className="w-8 h-8" />,
    "📚": <BookOpen className="w-8 h-8" />,
    "🌐": <Globe className="w-8 h-8" />,
    "🖥️": <Layout className="w-8 h-8" />,
    "📱": <Smartphone className="w-8 h-8" />,
    "👥": <Users className="w-8 h-8" />,
  };

  const teamServices = [
    "Thesis Writing",
    "Project Work Assistance",
    "Proofreading and Editing",
    "Plagiarism Checks",
    "Research Design",
    "Data Analysis",
    "Publication Support",
  ];

  const approachItems = [
    {
      icon: Award,
      title: "Quality",
      description: "Delivering exceptional work that exceeds expectations.",
    },
    {
      icon: Clock,
      title: "Timeliness",
      description: "Respecting deadlines and providing prompt service.",
    },
    {
      icon: Users,
      title: "Personalization",
      description: "Tailoring our approach to meet your unique requirements.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description:
        "Maintaining the highest ethical standards in all our services.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement",
      description: "Constantly refining our processes to serve you better.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-gray-50">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <motion.div variants={staggerContainer}>
            <motion.div variants={fadeInUp} className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Our Mission
                </h2>
              </div>
              <motion.p
                variants={fadeInUp}
                className="mt-3 text-lg text-gray-600 leading-relaxed"
              >
                To empower researchers and scholars by providing high-quality
                academic support, research guidance, and innovative solutions
                that enhance knowledge creation and dissemination. We are
                committed to upholding academic integrity, fostering
                intellectual growth, and enabling groundbreaking discoveries.
              </motion.p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Our Vision
                </h2>
              </div>
              <motion.p
                variants={fadeInUp}
                className="mt-3 text-lg text-gray-600 leading-relaxed"
              >
                To be the leading global partner in academic research
                assistance, driving excellence in scholarly work through
                ethical, reliable, and cutting-edge research support services.
                We envision a future where researchers of all backgrounds have
                access to the resources and expertise they need to advance
                knowledge and innovation.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contact">
                  <Button text="Contact Us" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/service">
                  <Button text="Our Services" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="mt-10 lg:mt-0"
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-blue-600 rounded-2xl opacity-20 blur-xl"></div>
              <img
                src={TeamImage}
                alt="Team collaboration"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        id="services"
        className="bg-linear-to-br bg-blue-800 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              What We Offer
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Our comprehensive range of professional services designed to help
              you succeed in your academic journey.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={`/service${service.link}`} className="block h-full">
                  <div className="h-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group-hover:shadow-lg group-hover:border-blue-200 transition-all duration-300">
                    <div className="relative p-6">
                      <motion.div
                        className="text-blue-600 mb-4 p-3 bg-blue-50 rounded-lg w-fit"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                      >
                        {iconMap[service.icon] || (
                          <BookOpen className="w-8 h-8" />
                        )}
                      </motion.div>

                      <div className="relative space-y-3">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>

                        <div className="pt-4">
                          <span className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all">
                            Learn More
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div variants={fadeInLeft} className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Our Expert Team
              </h2>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 mb-6 leading-relaxed"
            >
              Our team of seasoned academic professionals offers comprehensive
              support services to help you excel in your studies and research.
              We combine expertise with dedication to ensure your success.
            </motion.p>

            <motion.ul variants={staggerContainer} className="space-y-3 mb-8">
              {teamServices.map((service, index) => (
                <motion.li
                  key={index}
                  variants={fadeInUp}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 mb-8 leading-relaxed"
            >
              We ensure high-quality work and help you meet deadlines with
              personalized, reliable support from concept to completion.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact">
                <Button text="Get Started with Our Team" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInRight}
            className="lg:w-1/2"
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r bg-blue-400 rounded-2xl opacity-20 blur-xl"></div>
              <img
                src={Team}
                alt="Our Team"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="bg-linear-to-b from-white to-blue-50 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <HeartHandshake className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">
                Our Core Values
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to
              your academic success
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {approachItems.map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -10, scale: 1.05 }}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="p-4 bg-blue-100 rounded-xl mb-4">
                  <item.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-20"
          >
            <div className="bg-linear-to-r bg-blue-600 rounded-3xl p-8 lg:p-12">
              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {[
                  { value: "500+", label: "Projects Completed" },
                  { value: "98%", label: "Client Satisfaction" },
                  { value: "50+", label: "Expert Researchers" },
                  { value: "24/7", label: "Support Available" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-blue-200">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <MessageSquare className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Ready to Start Your Project?
                </h3>
              </div>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful researchers who have trusted us with
                their academic work. Let's discuss how we can help you achieve
                your research goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/contact">
                    <Button text="Get Free Consultation" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to="/service">
                    <Button text="View All Services" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
