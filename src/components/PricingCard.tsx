import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

interface PricingCardProps {
  plan: {
    name: string;
    price: string;
    description: string;
    features: string[];
    recommended?: boolean;
  };
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative rounded-2xl p-8 ${
        plan.recommended
          ? "bg-linear-to-br bg-blue-600  text-white shadow-xl border-2 border-blue-500"
          : "bg-white text-gray-900 shadow-lg border border-gray-200"
      }`}
    >
      {plan.recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      {/*<div className="mb-4">
        <span className="text-4xl font-bold">{plan.price}</span>
        {plan.price !== "Custom" && <span className="text-lg">/project</span>}
      </div>*/}
      <p
        className={`mb-6 ${plan.recommended ? "text-blue-100" : "text-gray-600"}`}
      >
        {plan.description}
      </p>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle
              className={`w-5 h-5 mt-0.5 shrink-0 ${
                plan.recommended ? "text-green-300" : "text-green-500"
              }`}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full cursor-pointer py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
          plan.recommended
            ? "bg-white text-blue-600 hover:bg-blue-50"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Choose Plan
      </button>
    </motion.div>
  );
};

export default PricingCard;
