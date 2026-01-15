import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, User, CheckCircle } from "lucide-react";
import type { Testimonial } from "../types/testimonial";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  } as const;

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="group"
    >
      <div className="relative bg-white rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 overflow-hidden">
        <div className="absolute top-4 right-4 text-blue-100">
          <Quote className="w-10 h-10" />
        </div>

        <div className="p-6">
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.div variants={itemVariants} className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">
                {testimonial.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                "{testimonial.comment}"
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 pt-4 border-t border-gray-100"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              </div>

              <div className="flex-1">
                <h4 className="font-semibold text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {testimonial.university}
                </p>
              </div>

              <div className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Verified
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
