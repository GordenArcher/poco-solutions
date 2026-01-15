import { motion } from "framer-motion";
import { adPackages, jobOpenings } from "../constant/Data";
import {
  Briefcase,
  Megaphone,
  Clock,
  Mail,
  MessageSquare,
  Award,
  GraduationCap,
  DollarSign,
  Globe,
  ChevronRight,
  CheckCircle,
  HelpCircle,
  Quote,
} from "lucide-react";

const VacanciesPage = () => {
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

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description:
        "Receive highly competitive compensation for your academic expertise and regular, reliable payments.",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description:
        "Work on your own terms with project-based and freelance opportunities that fit your schedule.",
    },
    {
      icon: GraduationCap,
      title: "Academic Growth",
      description:
        "Continue your academic journey by working on diverse research projects across various disciplines.",
    },
  ];

  const testimonials = [
    {
      initials: "DR",
      name: "Dr. Rebecca Chen",
      role: "PhD in Economics",
      quote:
        "Working with Poco Solutions has allowed me to apply my research skills to meaningful projects while maintaining a flexible schedule. The compensation is excellent and payments are always on time.",
      color: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      initials: "JM",
      name: "Prof. James Miller",
      role: "Literature Specialist",
      quote:
        "As an academic consultant with Poco Solutions, I've been able to help students achieve their research goals while maintaining my teaching position. The projects are intellectually stimulating and well-compensated.",
      color: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      initials: "KT",
      name: "Dr. Karen Thomas",
      role: "Research Methodologist",
      quote:
        "The flexibility to choose projects that align with my expertise has been invaluable. Poco Solutions provides a platform for academics to apply their knowledge while earning competitive compensation.",
      color: "bg-purple-100",
      textColor: "text-purple-600",
    },
  ];

  const faqs = [
    {
      question:
        "What qualifications do I need to join as an academic researcher?",
      answer:
        "We primarily look for candidates with master's, doctorate, or PhD degrees in their respective fields. Professional certifications and relevant experience in academic research are highly valued.",
    },
    {
      question: "How flexible are the working arrangements?",
      answer:
        "Most positions offer flexible, freelance arrangements that allow you to work remotely on your own schedule. Project timelines and expectations are clearly communicated upfront.",
    },
    {
      question: "What types of research projects will I work on?",
      answer:
        "Projects span various academic disciplines and may include literature reviews, research design, data analysis, thesis/dissertation guidance, academic writing support, app development, and web development.",
    },
    {
      question: "How is compensation structured?",
      answer:
        "We offer competitive compensation based on project complexity, scope, and your qualifications. Payment structures vary by position but all include regular, reliable payment schedules.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-blue-50">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            variants={scaleIn}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Award className="w-4 h-4" />
            Academic and Non-Academic Excellence
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            Vacancies & Advertisements
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Join our network of academic professionals and receive competitive
            compensation for research assistance and guidance.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              variants={fadeInUp}
              href="#jobs"
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View Open Positions
            </motion.a>
            <motion.a
              variants={fadeInUp}
              href="#ads"
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white hover:bg-gray-50 text-blue-600 font-medium rounded-lg transition-colors duration-300 border border-blue-600 shadow-lg hover:shadow-xl"
            >
              Explore Ad Opportunities
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative overflow-hidden bg-linear-to-r bg-blue-800 text-white p-8 rounded-2xl mb-16 max-w-4xl mx-auto"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -translate-y-32 translate-x-32 opacity-20"></div>
          <div className="relative z-10 text-center">
            <motion.h2
              variants={fadeInUp}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Join Our Academic Network
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-blue-100">
              We are looking for lecturers with master's, doctorate, and PhD
              degrees for whom research assistance is a passion. We seek
              professionally certified resource persons who want to earn highly
              competitive compensation and receive regular payments doing what
              they enjoy - freelance research and guidance.
            </motion.p>
          </div>
        </motion.div>

        <div className="mb-20" id="jobs">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-between items-center mb-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                Current Opportunities
              </h2>
              <p className="text-gray-600 mt-2">
                Find your perfect academic role
              </p>
            </div>
            <div className="hidden md:block">
              <span className="text-blue-600 font-medium bg-blue-50 px-4 py-2 rounded-full">
                {jobOpenings.length} positions available
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Briefcase className="w-5 h-5 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {job.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{job.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Requirements:
                    </h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 flex items-start"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/*<div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                    <span className="text-gray-600 text-sm">
                      Competitive compensation
                    </span>
                    <motion.span
                      className="text-blue-600 text-sm font-medium flex items-center"
                      whileHover={{ x: 5 }}
                    >
                      Apply now
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </motion.span>
                  </div>*/}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12"
          >
            <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Why Join Our Academic Network?
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Discover the advantages of working with us
                </p>
              </div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mx-auto mb-4">
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-center mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 text-sm text-center">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <p className="text-gray-600 mb-4">
                {/*Not seeing the right fit? Send your CV for future opportunities.*/}
                Send your CV to
              </p>
              <motion.a
                href="mailto:pocosolution@gmail.com"
                whileHover={{ x: 5 }}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                <Mail className="w-4 h-4 mr-2" />
                pocosolution@gmail.com
                <ChevronRight className="w-4 h-4 ml-1" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        <div className="mb-20" id="ads">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Megaphone className="w-4 h-4" />
              Partnership Opportunities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advertisements & Promotions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reach our growing community of academic professionals,
              researchers, and students with our targeted advertising solutions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {adPackages.map((pkg, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: index === 1 ? -12 : -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                  index === 1
                    ? "border-2 border-blue-500 transform scale-105"
                    : "border border-gray-200"
                }`}
              >
                {index === 1 && (
                  <div className="absolute top-0 right-0 bg-linear-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-4 py-2 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}

                <div className="p-6 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Globe className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {pkg.name}
                    </h3>
                  </div>

                  <ul className="space-y-4 mt-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/*<motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full mt-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
                  >
                    Get Started
                  </motion.button>*/}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-12"
          >
            <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Need a solution?
                  </h3>
                  <p className="text-blue-100">
                    We offer tailored advertising packages to meet your specific
                    goals and budget.
                  </p>
                </div>
                <motion.a
                  href="https://wa.me/+233275697715"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg transition-colors duration-300 hover:bg-blue-50 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Message Us
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-10">
            <Quote className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Academic Partners Say
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center ${testimonial.textColor} font-bold`}
                  >
                    {testimonial.initials}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16 max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <motion.div variants={staggerContainer} className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative overflow-hidden bg-linear-to-r bg-blue-800 rounded-2xl p-8 text-white text-center"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full -translate-x-32 -translate-y-32 opacity-20"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Join Our Academic Network Today
            </h2>
            <p className="max-w-2xl mx-auto text-blue-100 mb-8 text-lg">
              Apply your expertise, earn competitive compensation, and enjoy the
              flexibility of freelance academic work.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                href="mailto:pocosolution@gmail.com"
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg transition-colors duration-300 hover:bg-blue-50 shadow-lg"
              >
                Submit Your Application
              </motion.a>
              <motion.a
                href="https://wa.me/+233275697715"
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg transition-colors duration-300 hover:bg-white/10 shadow-lg"
              >
                Request More Information
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default VacanciesPage;
