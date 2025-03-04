import React from "react";
import { Plans } from "../constant/Data";
import PricingCard from "../components/PricingCard";

export default function PricingPage() {
  return (
    <div className="max-w-6xl !mx-auto !py-12 !px-6 text-center">
      <h1 className="text-4xl !font-bold text-gray-900 !mb-6" data-aos="fade-up" >Our Pricing Plans</h1>
      <p className="text-lg text-gray-700 !mb-12" data-aos="fade-up" >
        Choose a plan that fits your needs. Transparent pricing with no hidden fees.
      </p>

      <div className="grid max-lg:flex-col max-lg:flex md:grid-cols-3 gap-8" data-aos="fade-up" >
        {Plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>

      <div className="!mt-16">
        <h2 className="text-3xl !font-bold text-gray-900 !mb-6" data-aos="fade-up" >Compare Plans</h2>
        <div className="overflow-x-auto" data-aos="fade-up" >
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border !p-4">Feature</th>
                <th className="border !p-4">Basic</th>
                <th className="border !p-4">Standard</th>
                <th className="border !p-4">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border !p-4">Consultation Access</td>
                <td className="border !p-4">✔️</td>
                <td className="border !p-4">✔️</td>
                <td className="border !p-4">✔️</td>
              </tr>
              <tr>
                <td className="border !p-4">Advanced Formatting</td>
                <td className="border !p-4">❌</td>
                <td className="border !p-4">✔️</td>
                <td className="border !p-4">✔️</td>
              </tr>
              <tr>
                <td className="border !p-4">Unlimited Revisions</td>
                <td className="border !p-4">❌</td>
                <td className="border !p-4">❌</td>
                <td className="border !p-4">✔️</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
