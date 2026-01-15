import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "../constant/Data";
import TestimonialCard from "../components/TestimonialCard";
import Back from "../layout/Back";
import { Link } from "react-router-dom";
import type { Testimonial } from "../types/testimonial";

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      <div className="p-4 md:p-8">
        <Back />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-12 mb-12"
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Student Testimonials
            </h1>
            <p className="text-gray-600">
              Real feedback from students who have worked with us
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {testimonials.map((testimonial: Testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Start Your Journey Today
              </h3>
              <p className="text-gray-600 mb-6">
                Join our community of successful students
              </p>
              <Link
                to="/service"
                className="inline-block bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
