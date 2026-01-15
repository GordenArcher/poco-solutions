import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadow from "leaflet/dist/images/marker-shadow.png";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  Clock,
  User,
  MessageSquare,
  Navigation,
  Award,
  CheckCircle,
  Loader2,
} from "lucide-react";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl: icon,
  shadowUrl: shadow,
});

const Contact = () => {
  const center: [number, number] = [5.6128, -0.2343];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      value: "Ayikai Doblo - Accra, Ghana",
      link: "#",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      action: "View on Map",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+233 27 569 7715",
      link: "tel:+233275697715",
      color: "bg-green-100",
      iconColor: "text-green-600",
      action: "Call Now",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+233 27 569 7715",
      link: "https://wa.me/233275697715",
      color: "bg-green-100",
      iconColor: "text-green-600",
      action: "Message Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      value: "pocosolution@gmail.com",
      link: "mailto:pocosolution@gmail.com",
      color: "bg-red-100",
      iconColor: "text-red-600",
      action: "Send Email",
    },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency Support Only" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitted(true);
    setIsSubmitting(false);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <MessageSquare className="w-4 h-4" />
            Get in Touch
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Contact our founder for detailed information about our academic
            support services
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 ${info.color} rounded-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <info.icon className={`w-6 h-6 ${info.iconColor}`} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {info.title}
                    </h3>
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 block mb-3"
                    >
                      {info.value}
                    </a>

                    <motion.a
                      href={info.link}
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center text-blue-600 text-sm font-medium"
                    >
                      {info.action}
                      <Navigation className="w-4 h-4 ml-2" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="relative"
          >
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-blue-600 rounded-3xl opacity-20 blur-xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 bg-white">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-gray-900">
                    Our Location
                  </h3>
                </div>
              </div>

              <MapContainer
                center={center}
                zoom={15}
                style={{ height: "400px", width: "100%" }}
                className="rounded-b-2xl"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={center}>
                  <Popup className="rounded-lg">
                    <div className="p-2">
                      <h4 className="font-bold text-gray-900">
                        Poco Solutions Office
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Ayikai Doblo, Accra
                      </p>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="bg-white rounded-2xl shadow-2xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Send className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">
                Send Us a Message
              </h2>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600">
                  Thank you for contacting us. We'll get back to you within 24
                  hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your academic needs..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-center text-gray-600 mb-4">
                Prefer to contact us directly?
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <motion.a
                  href="https://wa.me/233275697715"
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </motion.a>

                <motion.a
                  href="mailto:pocosolution@gmail.com"
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </motion.a>

                <motion.a
                  href="tel:+233275697715"
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900">
                Business Hours
              </h3>
            </div>

            <div className="space-y-4">
              {businessHours.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{item.day}</span>
                  <span className="text-gray-600">{item.hours}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-100 rounded-lg">
              <p className="text-sm text-blue-800">
                <Award className="w-4 h-4 inline mr-2" />
                Emergency support available outside business hours
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl p-6"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Quick Response Time
              </h3>
              <p className="text-gray-600">
                We typically respond within 1-2 hours during business days
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-6"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Multiple Support Channels
              </h3>
              <p className="text-gray-600">
                Contact us via phone, email, WhatsApp, or visit our office
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Academic Journey?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Contact us today for personalized academic support and guidance. Our
            team is ready to help you achieve your educational goals.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="tel:+233275697715"
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors duration-300"
            >
              Call Now: 027 569 7715
            </motion.a>

            <motion.a
              href="https://wa.me/233275697715"
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              WhatsApp Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
